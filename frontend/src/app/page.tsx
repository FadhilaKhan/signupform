"use client";

import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { useState } from "react";

export default function Home() {
  const router = useRouter(); // Initialize the router

  const handleSignUpClick = () => {
    router.push("/signup");  // Navigate to the signup page
  };

  const handlePrivacyandPolicy = () => {
    router.push("/privacyandconditions");  // Navigate to the signup page
  };

  const handleTermsandConditions = () => {
    router.push("/termsandconditions");  // Navigate to the signup page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8">
        Welcome to Our Service!
      </h1>
      <p className="text-lg mb-8">
        Sign up now to get started.
      </p>
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={handleSignUpClick}
      >
        Sign Up
      </button>
    <br />
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={handleSignUpClick}
      >
        Sign Up
      </button>
    <br />
      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={handlePrivacyandPolicy}
      >
        Privacy and Policy
      </button>

      <br />

      <button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        onClick={handleTermsandConditions}
      >
        Terms and COnditions
      </button>
    </div>
  );
}
