import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Login failed");
            }

            const data = await response.json();
            // Handle successful login (e.g., store token, redirect, etc.)
            console.log("Login successful:", data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-1/2 h-full flex justify-center items-center relative z-10">
            <div className="absolute inset-0 z-0 flex justify-center pointer-events-none">
                <img
                    src="/img/bglogin1.png"
                    alt="Login Background"
                    className="w-full max-h-[600px] rounded-md"
                />
            </div>

            <div className="absolute top-0 right-0 p-12 text-4xl font-bold z-10">
                <span className="text-[#2d3036]">i</span>
                <span className="text-[#fe632e]">Prestasi</span>
            </div>

            <div className="relative w-[598px] bg-white rounded-3xl border border-[#d1d3d8] p-12 shadow-lg flex flex-col items-center gap-6 z-20">
                <h1 className="text-[#2d3036] text-2xl font-medium">
                    Selamat Datang,{" "}
                    <span className="text-[#fe632e]">Fikers!</span>
                </h1>

                {error && <p className="text-red-600">{error}</p>}

                {/* Form Fields */}
                <form className="w-full space-y-6" onSubmit={handleSubmit}>
                    {/* Email Field */}
                    <div>
                        <label className="block text-zinc-950 text-base font-medium mb-2">
                            Email <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="ava.wright@gmail.com"
                            className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-md text-base text-zinc-500 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label className="block text-zinc-950 text-base font-medium mb-2">
                            Kata Sandi <span className="text-red-600">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-md text-base text-zinc-500 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className={`w-full px-6 py-3 ${
                            loading ? "bg-gray-400" : "bg-[#fe632e]"
                        } text-white text-base font-medium rounded-lg hover:bg-[#e5571e] transition-colors`}
                        disabled={loading} // Disable button while loading
                    >
                        {loading ? "Loading..." : "Masuk"}
                    </button>
                </form>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-0 flex justify-center">
                <img
                    src="/img/bglogin2.png"
                    alt="Bottom Image"
                    className="w-full max-h-[300px] object-cover rounded-md"
                />
            </div>
        </div>
    );
};

export default LoginForm;
