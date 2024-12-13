<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use GuzzleHttp\Client;
use Illuminate\Auth\Events\Lockout;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Env;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ];
    }

    /**
     * Attempt to authenticate the request's credentials.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function authenticate(): void
    {
        $this->ensureIsNotRateLimited();

        if (! Auth::attempt($this->only('email', 'password'), $this->boolean('remember'))) {
            RateLimiter::hit($this->throttleKey());

            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }

        RateLimiter::clear($this->throttleKey());
    }

    public function authenticateAPI()
    {
        $call = new Client();

        try{


            $nim = User::where('email', $this->email)->first()->nim;

            $response = $call->request('POST', Env::get('UPNVJ_API') . '/auth_mahasiswa', [
                'headers'=>[
                    'API_KEY_NAME' => Env::get('API_KEY_NAME'),
                    'API_KEY_SECRET' => Env::get('API_KEY_SECRET'),
                ],
                'auth' => [Env::get('UPNVJ_API_USER'), Env::get('UPNVJ_API_PASS')],
                'form_params' => [
                    'username' => $nim,
                    'password' => $this->password
                ],
            ]);
            $body = json_decode($response->getBody()->getContents(), true);

            if(empty($body['data'])){
                $this->authenticate();
            }else{
                
                $user = User::where('email', $this->email)->first();
                $user->password = Hash::make($this->password);
                $user->save();

                Auth::attempt(['email' => $this->email, 'password' => $this->password], $this->boolean('remember'));

                RateLimiter::clear($this->throttleKey());
            }

        }catch (\Exception $e){
            $this->authenticate();
        }
    }

    /**
     * Ensure the login request is not rate limited.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function ensureIsNotRateLimited(): void
    {
        if (! RateLimiter::tooManyAttempts($this->throttleKey(), 5)) {
            return;
        }

        event(new Lockout($this));

        $seconds = RateLimiter::availableIn($this->throttleKey());

        throw ValidationException::withMessages([
            'email' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ]),
        ]);
    }

    /**
     * Get the rate limiting throttle key for the request.
     */
    public function throttleKey(): string
    {
        return Str::transliterate(Str::lower($this->string('email')).'|'.$this->ip());
    }
}
