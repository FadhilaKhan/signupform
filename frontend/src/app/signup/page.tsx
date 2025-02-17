// pages/signup.tsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaGoogle } from "react-icons/fa";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section - Signup Form */}
      <div className="w-1/2 flex items-center justify-center p-12">
      <div className="bg-white p-12 rounded-xl shadow-2xl w-[700px] h-[590px] border border-gray-300">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[530px] max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold text-gray-700 mb-6">Sign Up</h2>

        <p className="text-gray-500 text-sm mb-6">
          By signing up, you agree to the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg"
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-500 w-[399px] h-[37px] text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Next
          </button>

          <p className="text-gray-500 w-[399px] h-[37px] text-sm mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-600 underline">
            Log in
          </a>
        </p>

        <button className="mt-4 flex items-center justify-center gap-2 border p-3 w-[399px] h-[37px] rounded-lg w-full text-gray-700 hover:bg-gray-100 transition">
          <FaGoogle />
          Continue with Google
        </button>

        
        </form>
        </div>
      </div>
      </div>
            {/* Right Section - Benefits & Illustration */}
      <div className="w-1/2 flex flex-col justify-center items-center text-white bg-gradient-to-r from-gray-800 to-black px-10 py-16 relative">
        <img
          src="/car-image.png"
          alt="Luxury Car"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Benefits of creating an account
          </h2>
          <ul className="text-lg space-y-3">
            <li>✅ Save posts</li>
            <li>✅ Access to AI tools</li>
            <li>✅ Sell cars</li>
            <li>✅ Post comments, make friends</li>
          </ul>
        </div>
    </div>
    </div>
  );
}