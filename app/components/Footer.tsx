'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Facebook, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log('Newsletter subscription:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const footerColumns: FooterColumn[] = [
    {
      title: 'PRODUCTS',
      links: [
        { label: 'Event Registration', href: '#' },
        { label: 'Ticketing System', href: '#' },
        { label: 'Virtual Events', href: '#' },
        { label: 'Hybrid Solutions', href: '#' },
        { label: 'Analytics', href: '#' },
        { label: 'Mobile App', href: '#' },
      ],
    },
    {
      title: 'SOLUTIONS',
      links: [
        { label: 'Corporate Events', href: '#' },
        { label: 'Conferences', href: '#' },
        { label: 'Trade Shows', href: '#' },
        { label: 'Workshops', href: '#' },
        { label: 'Webinars', href: '#' },
        { label: 'Networking', href: '#' },
      ],
    },
    {
      title: 'RESOURCES',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Webinars', href: '#' },
        { label: 'Templates', href: '#' },
        { label: 'Help Center', href: '#' },
      ],
    },
    {
      title: 'COMPANY',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Partners', href: '#' },
        { label: 'Press Kit', href: '#' },
        { label: 'Terms & Privacy', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.02, 0.04] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* LEFT: Newsletter + Social */}
          <div className="md:col-span-1 lg:col-span-1 space-y-8">
            {/* Newsletter */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-400 mb-2">Subscribe to</p>
                <h3 className="text-2xl font-bold text-white mb-4">TrueEvents newsletter</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Receive expert insights, product news, customer stories and inspirational content.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />

                <p className="text-xs text-gray-500 leading-relaxed">
                  By clicking on "Submit", you agree to our{' '}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 underline">
                    privacy policy
                  </Link>
                  . You may unsubscribe at any time.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  {isSubmitted ? 'Subscribed!' : 'Submit'}
                </motion.button>
              </form>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-400">Follow us</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all group"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PRODUCTS (Tablet: Top) */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {footerColumns[0].title}
              </h4>
              <ul className="space-y-3 mt-4">
                {footerColumns[0].links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* RESOURCES - ONLY ON TABLET: UNDER PRODUCTS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 md:mt-12 lg:hidden"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {footerColumns[2].title}
              </h4>
              <ul className="space-y-3 mt-4">
                {footerColumns[2].links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* SOLUTIONS (Tablet: Top) */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {footerColumns[1].title}
              </h4>
              <ul className="space-y-3 mt-4">
                {footerColumns[1].links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* COMPANY - ONLY ON TABLET: UNDER SOLUTIONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 md:mt-12 lg:hidden"
            >
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {footerColumns[3].title}
              </h4>
              <ul className="space-y-3 mt-4">
                {footerColumns[3].links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RESOURCES - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:block space-y-4"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {footerColumns[2].title}
            </h4>
            <ul className="space-y-3">
              {footerColumns[2].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COMPANY - Desktop Only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:block space-y-4"
          >
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {footerColumns[3].title}
            </h4>
            <ul className="space-y-3">
              {footerColumns[3].links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200 inline-block">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TE</span>
              </div>
              <span className="text-sm text-gray-400">
                © {new Date().getFullYear()} TrueEvents. All rights reserved.
              </span>
            </div>

            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;