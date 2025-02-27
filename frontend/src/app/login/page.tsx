'use client';
import React, { useState } from 'react';

export default function Login() {
  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section - Benefits and Image */}
      <div className="w-1/2 relative">
      <div className="backdrop-blur-lg p-6 rounded-[55px] shadow-lg w-[500px] h-[685px] border border-gray-200 relative">
      <div className="h-8"></div>
          <img
            src='/images/signup2.png'
            alt='Benefits Icon'
            className='w-48 h-48 ml-4 mb-4 rounded-lg shadow-lg object-cover'
          />
          <div className="h-8"></div>
          <div className="relative z-10 text-left">
            <h2 className="text-3xl font-bold mb-6 text-[#115A63]">
              Benefits of creating an account
            </h2>
            <ul className="text-lg space-y-3 text-black">
              <li>✅ Save posts</li>
              <li>✅ Access to AI tools</li>
              <li>✅ Sell cars</li>
              <li>✅ Post comments, make friends</li>
            </ul>
          </div>
          <img
            src='/images/signup.jpg'
            alt="Luxury Car"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-[55px]"
          />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-1/2 flex items-center justify-center p-7 ml-10"> {/* Added margin-left to move form right */}
        <div className="bg-[#219EBC]/20 backdrop-blur-lg p-6 rounded-[55px] shadow-lg w-[470px] h-[630px] max-w-md border border-gray-200">
          <div className="bg-white p-4 rounded-[55px] shadow-lg w-[410px] h-[585px] max-w-md border border-gray-200">
            <h2 className="text-3xl font-bold text-[#115A63] mb-0.5 text-center">Log In</h2>
            <div className="h-8"></div>
            <p className="text-gray-500 text-sm mb-4">
              By logging in, you agree to the{" "}
              <a href="#" className="text-blue-600 underline">Terms of Use</a> and{" "}
              <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
            </p>
            <div className="h-8"></div>
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2.5">
              <input
                type="text"
                name="emailOrMobile"
                placeholder="Your email / mobile number"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-sm"
                onChange={handleChange}
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg placeholder:text-sm"
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-[25px] hover:bg-blue-600 transition justify-center"
              >
                Log In
              </button>

              <p className="text-gray-500 text-sm mt-4 text-center">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-600 underline">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
