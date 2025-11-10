"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Sparkles, Zap, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className='relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32'
      id='about'>
      {/* Soft Animated Blobs */}
      <motion.div
        className='absolute top-20 left-10 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl'
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className='absolute bottom-20 right-10 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl'
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Main Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='space-y-16'>
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center space-y-6 max-w-4xl mx-auto'>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className='inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-100 border border-blue-200 rounded-full'>
              <Sparkles className='w-5 h-5 text-blue-600' />
              <span className='text-sm font-semibold text-blue-700'>
                Discover TrueEvents
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'>
              <span className='text-gray-900'>Simplify every event —</span>
              <br />
              <span className='bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent'>
                from planning to success
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className='text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
              TrueEvents is your complete event management solution, designed to
              transform complex logistics into seamless experiences. Whether
              you're hosting a corporate conference or a dream wedding, we've
              got you covered.
            </motion.p>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={itemVariants}
            className='flex flex-wrap justify-center gap-6 md:gap-8'>
            {[
              { icon: CheckCircle2, text: "Easy Setup" },
              { icon: Zap, text: "Real-time Analytics" },
              { icon: Users, text: "10K+ Happy Clients" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className='flex items-center space-x-3 px-5 py-3 bg-white border border-blue-200 rounded-full shadow-sm'>
                <feature.icon className='w-5 h-5 text-blue-600' />
                <span className='text-sm font-semibold text-gray-700'>
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className='text-center'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='group relative inline-flex items-center space-x-3 px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-base md:text-lg rounded-full shadow-xl hover:shadow-blue-500/40 transition-all duration-300 overflow-hidden'>
              <motion.div className='absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-max' />
              <span className='relative z-10'>Learn More About TrueEvents</span>
              <ArrowRight className='relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2, duration: 0.8 }}
              className='mt-6 text-sm text-gray-500 font-medium'>
              Trusted by event professionals worldwide • Free 14-day trial
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
