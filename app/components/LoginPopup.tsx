"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginPopup({ isOpen, onClose }: LoginPopupProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className='bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 w-full max-w-md overflow-hidden'>
              {/* Header */}
              <div className='flex justify-between items-center p-6 border-b border-gray-200/50'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  Welcome Back
                </h2>
                <button
                  onClick={onClose}
                  className='p-2 rounded-full hover:bg-gray-100 transition-colors'
                  aria-label='Close login popup'
                  title='Close login popup'>
                  <X className='w-5 h-5 text-gray-500' />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className='p-6'>
                <div className='space-y-4'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'>
                      Email Address
                    </label>
                    <input
                      id='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                      placeholder='you@example.com'
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium text-gray-700 mb-1'>
                      Password
                    </label>
                    <input
                      id='password'
                      type='password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className='w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
                      placeholder='••••••••'
                      required
                    />
                  </div>

                  <div className='flex items-center justify-between'>
                    <label className='flex items-center'>
                      <input
                        type='checkbox'
                        className='rounded border-gray-300 text-purple-600 focus:ring-purple-500'
                      />
                      <span className='ml-2 text-sm text-gray-600'>
                        Remember me
                      </span>
                    </label>
                    <button
                      type='button'
                      className='text-sm font-medium text-purple-600 hover:text-purple-500'>
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type='submit'
                    disabled={isLoading}
                    className='w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all shadow-lg hover:shadow-xl disabled:opacity-70'>
                    {isLoading ? "Signing in..." : "Sign in"}
                  </button>
                </div>

                <div className='mt-6 text-center'>
                  <p className='text-sm text-gray-600'>
                    Don't have an account?{" "}
                    <button
                      type='button'
                      className='font-medium text-purple-600 hover:text-purple-500'>
                      Sign up
                    </button>
                  </p>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
