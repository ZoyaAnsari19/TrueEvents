'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const pathname = usePathname();

  // === Scroll Effect ===
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', hasDropdown: true },
    { name: 'Categories', href: '#category', hasDropdown: false },
    { name: 'Features', href: '#feature', hasDropdown: false, isNew: true },
    { name: 'Articles', href: '#article', hasDropdown: false },
    { name: 'Resource', href: '#resource', hasDropdown: false },
  ];

  const marqueeText = '✨ Smart Event Management | 📅 Book Venues Instantly | 🎟️ Seamless Ticketing & Payments | 💬 Engage Attendees Effortlessly | 📊 Real-Time Analytics Dashboard | 🤖 AI-Powered Insights | 🌍 Hybrid & Virtual Event Tools | 🚀 Grow Your Audience with TrueEvents';

  return (
    <>
      {/* Top Marquee Bar */}
      <div className="relative overflow-hidden bg-gray-50 border-b border-gray-200 h-10">
        <motion.div
          className="flex whitespace-nowrap hover:pause-marquee"
          animate={{ x: [0, -1000] }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-10 text-xs md:text-sm tracking-wide text-gray-700 font-medium px-4"
            >
              {marqueeText}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 backdrop-blur-md shadow-lg'
            : 'bg-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">

            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className="flex-shrink-0 cursor-pointer"
              >
                <div className="text-3xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                    TrueEvents
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center ml-8 space-x-6 xl:space-x-8 flex-1 justify-center">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <Link href={item.href}>
                      <button className={`flex items-center space-x-1 text-sm font-medium transition-colors py-2 ${
                        isActive 
                          ? 'text-violet-600' 
                          : 'text-gray-700 hover:text-gray-900'
                      }`}>
                        <span>{item.name}</span>
                        {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                        {item.isNew && (
                          <motion.span
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="ml-2 px-2 py-0.5 text-xs font-bold bg-black text-white rounded-full"
                          >
                            New
                          </motion.span>
                        )}
                      </button>
                    </Link>
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-600 transition-all duration-300 ease-out ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </motion.div>
                );
              })}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mx-4 lg:mx-6">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Websites"
                  className="w-full pl-11 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent focus:bg-white transition-all duration-300 shadow-sm focus:shadow-lg"
                />
              </div>
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
              <Link href="/login">
                <motion.button
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Log in
                </motion.button>
              </Link>
              <Link href="/signup">
                <motion.button
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Sign Up
                </motion.button>
              </Link>
              <Link href="#book-demo">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(0, 0, 0)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-2 bg-black text-white text-sm font-semibold rounded-full transition-all duration-300 border-2 border-black hover:border-black"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center space-x-2 ml-auto">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        <AnimatePresence>
          {isMobileSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-200 bg-white"
            >
              <div className="px-4 py-3">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by Websites"
                    autoFocus
                    className="w-full pl-11 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/">
                    <div className="text-2xl font-bold cursor-pointer">
                      <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                        TrueEvents
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-700 hover:bg-gray-100 rounded-full"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <nav className="space-y-1 mb-8">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link key={item.name} href={item.href}>
                        <motion.button
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`w-full px-4 py-3 text-left font-medium rounded-lg transition-all flex items-center justify-between group ${
                            isActive
                              ? 'bg-violet-100 text-violet-600'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <span className="flex items-center space-x-2">
                            <span>{item.name}</span>
                            {item.isNew && (
                              <span className="px-2 py-0.5 text-xs font-bold bg-black text-white rounded-full">
                                New
                              </span>
                            )}
                          </span>
                          {item.hasDropdown && (
                            <ChevronDown className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          )}
                        </motion.button>
                      </Link>
                    );
                  })}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-3"
                >
                  <Link href="/login">
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full px-4 py-3 text-center font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Log in
                    </button>
                  </Link>
                  <Link href="/signup">
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full px-4 py-3 text-center font-medium text-gray-700 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Sign Up
                    </button>
                  </Link>
                  
                  <Link href="#book-demo">
                    <button 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full px-4 py-3 text-center bg-black text-white font-semibold rounded-full hover:bg-white hover:text-black border-2 border-black transition-all"
                    >
                      Book a Demo
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}