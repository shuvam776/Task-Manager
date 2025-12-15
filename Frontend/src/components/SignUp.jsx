
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/axios.jsx"
export const SignUp = () =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const validate = () => {
    if (!email || !password) return 'Email and password are required.';
//this is the same regular expressions like u studied in python
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return '';
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  const validationError = validate();
  if (validationError) {
    setError(validationError);
    return;
  }

  try {
    setLoading(true);

    await api.post('/signup', {
      email,
      password,
    });

    navigate('/taskmanager');

  } catch (err) {
    setError(err.response?.data?.msg );
  } finally {
    setLoading(false);
  }
}


  return (
    <div className="min-h-screen sm:w-400 relative sm:relative sm:right-53  sm: flex items-center justify-center bg-linear-to-b from-gray-900 to-gray-800 px-4 flex-wrap sm: bottom-8">
      <div className="max-w-md w-full">
        <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-lg p-8">

          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-linear-to-br shadow-md">
             
                
             
            </div>
            <div>
              <h1 className="text-white text-lg font-semibold tracking-tight bg-green-500 via-green-700 border-4 rounded-2xl w-80 p-2 relative right-7 border-black font-serif ">Welcome back</h1>
              <p className="text-white relative right-7  text-sm">Sign up to continue to your Task Manager</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 relative right-43">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                placeholder="you@company.com"
                aria-invalid={!!error}
                aria-describedby="email-error"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                <button type="button" className="text-xs text-indigo-400 hover:text-indigo-300">Forgot?</button>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-lg bg-gray-900 border border-gray-700 px-3 py-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div id="email-error" className="text-sm text-red-400">{error}</div>
            )}

       <button
            
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition transform text-white font-medium shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              ) : null}
              <span>{loading ? 'Signing in...' : 'Sign Up'}</span>
            </button>

            <div className="flex items-center justify-center text-sm text-gray-400">
              <span>New here?</span>
              <button type="button" className="ml-2 text-indigo-400 hover:underline">Create an account</button>
            </div>
          </form>

        </div>

        <p className="mt-4 text-center text-xs text-gray-500">By continuing, you agree to our <button className="underline"><a href='#'>Terms</a></button> and <button className="underline"><a href='#'>Privacy</a></button>.</p>
      </div>
    </div>
  );
};
