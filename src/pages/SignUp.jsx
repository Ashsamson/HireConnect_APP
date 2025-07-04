
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { ArrowLeft } from 'lucide-react';
import photo from '../assets/photo.png';

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const passwordChecks = useMemo(() => ({
    length: form.password.length >= 8,
    number: /\d/.test(form.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(form.password),
  }), [form.password]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    navigate('/verify-email');
  };

  const handleOAuth = (provider) => {
    if (provider === 'google') {
      window.location.href = 'https://accounts.google.com/';
    } else if (provider === 'facebook') {
      window.location.href = 'https://facebook.com/';
    } else {
      window.location.href = 'https://github.com/';
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <button onClick={() => navigate('/')} className="absolute left-4 top-4 text-gray-600 hover:text-gray-800">
        <ArrowLeft />
      </button>

      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-6">Create your account below</h2>

        <button type="button" onClick={() => handleOAuth('google')} className="w-full flex items-center justify-center border rounded py-2 mb-2">
          <FcGoogle className="mr-2" /> Continue with Google
        </button>

        <button type="button" onClick={() => handleOAuth('facebook')} className="w-full flex items-center justify-center border rounded py-2 mb-4">
          <FaFacebookF className="mr-2 text-blue-600" /> Continue with Facebook
        </button>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <ul className="text-xs text-gray-600 mb-4 list-disc pl-5">
          <li className={passwordChecks.length ? 'text-green-600' : ''}>Password must contain at least 8 characters</li>
          <li className={passwordChecks.number ? 'text-green-600' : ''}>Password must contain a number</li>
          <li className={passwordChecks.special ? 'text-green-600' : ''}>Password must contain a special character</li>
        </ul>

        <div className="mb-4">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Sign Up
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <span onClick={() => navigate('/signin')} className="text-blue-600 cursor-pointer">Sign in</span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
