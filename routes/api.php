<php?

use App\Http\Controllers\AuthController;

Route::post('/loginUser', [AuthController::class, 'login']);
