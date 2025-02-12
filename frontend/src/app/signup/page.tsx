// pages/signup.tsx
'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface SignupResponse {
  message: string;
  user_id: number;
}

const Signup: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    MobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post<SignupResponse>('http://localhost:8000/signup', formData);
      setSuccess(response.data.message);
      router.push('/login'); // Redirect to login after successful signup
    } catch (err: any) {
      setError(err.response?.data?.detail || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="FirstName"
            placeholder="First Name"
            value={formData.FirstName}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            value={formData.LastName}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="email"
            name="EmailAddress"
            placeholder="Email Address"
            value={formData.EmailAddress}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="text"
            name="MobileNumber"
            placeholder="Mobile Number"
            value={formData.MobileNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
