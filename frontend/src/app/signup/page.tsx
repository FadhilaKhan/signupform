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

  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]); // State for selected interests
  const router = useRouter(); // Initialize the useRouter hook for navigation

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setIsSubmitted(true); // Mark the form as submitted
  };

  const handleInterestClick = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSignInClick = () => {
    router.push('/login'); // Redirect to the login page
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Section */}
      <div className="w-1/2 flex items-center justify-center p-7">
        <div className="bg-[#219EBC]/20 backdrop-blur-lg p-6 rounded-[55px] shadow-lg w-[470px] h-[630px] max-w-md border border-gray-200">
          <div className="bg-white p-4 rounded-[55px] shadow-lg w-[410px] h-[585px] max-w-md border border-gray-200">
            {!isSubmitted ? (
              <>
                <h2 className="text-3xl font-bold text-[#115A63] mb-0.5 text-center">Sign Up</h2>
                <p className="text-gray-500 text-sm mb-4">
                  By signing up, you agree to the{" "}
                  <a href="#" className="text-blue-600 underline">Terms of Use</a> and{" "}
                  <a href="#" className="text-blue-600 underline">Privacy Policy</a>.
                </p>

                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2.5">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="w-full p-3 w-[399px] h-[37px] border border-gray-300 rounded-lg placeholder:text-sm"
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full bg-blue-500 w-[399px] h-[37px] text-white p-3 rounded-[25px] hover:bg-blue-600 transition justify-center"
                  >
                    Next
                  </button>

                  <p className="text-gray-500 w-[399px] h-[37px] text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 underline">
                      Log in
                    </a>
                  </p>

                  <button className="mt-4 flex items-center justify-center gap-2 border p-3 w-[399px] h-[37px] border-gray-300 rounded-[25px] w-full text-gray-700 hover:bg-gray-100 transition">
                    <FaGoogle />
                    Continue with Google
                  </button>
                </form>
              </>
            ) : (
              <>
                {/* Select your interest section */}
                <h2 className="text-3xl font-bold text-[#115A63] mb-0.5 text-center">Select your interest</h2>
                <div className="grid grid-cols-3 gap-4 mt-6">
                  {["BMW", "Jeep", "Mercedes", "Hybrid", "Toyota", "Ferrari", "Lamborghini"].map((interest) => (
                    <button
                      key={interest}
                      className={`py-2 px-6 rounded-full transition ${selectedInterests.includes(interest) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700 hover:bg-gray-400'}`}
                      onClick={() => handleInterestClick(interest)}
                    >
                      {interest}
                    </button>
                  ))}
                </div>

                {/* Sign In Button */}
                <button
                  onClick={handleSignInClick}
                  className="mt-4 w-full p-3 border border-gray-300 rounded-[25px] text-gray-700 hover:bg-gray-100 transition"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Section - Always Present */}
      <div className="absolute top-0 right-0 transform translate z-30 w-[500px]">
        <div className="backdrop-blur-lg p-6 rounded-[55px] shadow-lg w-[800px] h-[685px] border border-gray-200 relative">
          <div className="h-8"></div>
          <img
            src='/images/signup2.png'
            alt='Benefits Icon'
            className='w-48 h-48 ml-4 mb-4 rounded-lg shadow-lg object-cover'
          />
          <div className="h-8"></div>
          <div className="relative z-10 text-left">
            <h2 className="text-3xl font-bold mb-6 text-[#115A63]">Benefits of creating an account</h2>
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
    </div>
  );
}
