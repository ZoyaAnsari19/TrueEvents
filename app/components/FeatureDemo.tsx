'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Feature {
  title: string;
  video: string;
}

const features: Feature[] = [
  { title: 'Smart Registration', video: "https://www.eventtia.com/wp-content/uploads/web-videos/clip Manage Attendee Registrations.webm"},
  { title: 'Ticketing & Payments', video: '/video/video2.mp4' },
  { title: 'Real-time Analytics', video: '/video/video3.mp4' },
  { title: 'Attendee Engagement', video: '/video/video4.mp4' },
  { title: 'Hybrid Event Tools', video: '/video/video5.mp4' },
  { title: 'Event Insights Dashboard', video: '/video/video6.mp4' },
];

const FeatureDemoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentFeature = features[currentIndex];

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 md:px-12 overflow-hidden" id='demo'>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#0A84FF] to-[#00C1FF] bg-clip-text text-transparent">
            Experience TrueEvents in Action
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
            Watch how our all-in-one event management features work together seamlessly.
          </p>
        </motion.div>

        {/* Main Video Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg bg-white/60 border border-gray-200/50">
            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-cyan-100">
              <AnimatePresence mode="wait">
                <motion.video
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={currentFeature.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </AnimatePresence>

              {/* Blue Glow Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>

              {/* Feature Title Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
                >
                  <div className="bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-700 whitespace-nowrap">
                      {currentFeature.title}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-12 bg-gradient-to-r from-blue-500 to-cyan-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to feature ${index + 1}: ${features[index].title}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature Navigation Dots Info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          Click the dots to navigate between features
        </motion.p>
      </div>
    </section>
  );
};

export default FeatureDemoSection;