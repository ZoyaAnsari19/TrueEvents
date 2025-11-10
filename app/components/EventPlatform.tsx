'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cubicBezier } from "framer-motion";
import { 
  Sparkles, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';


interface EventCategory {
  id: number;
  name: string;
  image: string;
}

const eventCategories: EventCategory[] = [
  {
    id: 1,
    name: 'Corporate Events',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    id: 2,
    name: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    id: 3,
    name: 'Music Concerts',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  },
  {
    id: 4,
    name: 'Exhibitions',
    image: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=800&q=80',
  },
  {
    id: 5,
    name: 'Product Launches',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
  },
  {
    id: 6,
    name: 'Award Shows',
    image: 'https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&q=80',
  },
  {
    id: 7,
    name: 'Fashion Shows',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
  },
  {
    id: 8,
    name: 'Sports Events',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
  },
  {
    id: 9,
    name: 'Tech Conferences',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 10,
    name: 'Charity Galas',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
];

const EventPlatform: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: cubicBezier(0.42, 0, 0.58, 1) }
  }
};

 return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-indigo-100 py-20 px-6 overflow-hidden" id='category'>
      {/* Animated Background Blobs - Deeper Colors */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-400/25 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Floating Lucide Icons */}
      {[
        { Icon: Sparkles, left: '15%', top: '20%', delay: 0 },
        { Icon: Zap, left: '75%', top: '30%', delay: 1.5 },
        { Icon: Users, left: '40%', top: '70%', delay: 3 },
        { Icon: CheckCircle2, left: '80%', top: '65%', delay: 4.5 },
      ].map(({ Icon, left, top, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-indigo-500/25"
          style={{ left, top }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-14 h-14 md:w-20 md:h-20" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Explore Event Categories
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            Discover the perfect event solution for every occasion. From corporate gatherings to dream weddings.
          </p>
        </motion.div>

        {/* Event Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {eventCategories.map((event) => (
            <motion.div
              key={event.id}
              variants={variants}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border border-white/50"
            >
              {/* Glowing Border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"></div>
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700"
                  whileHover={{ scale: 1.15 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              {/* Title */}
              <div className="p-6 bg-gradient-to-b from-white/80 to-white">
                <h3 className="text-xl font-bold text-slate-800 text-center group-hover:text-indigo-600 transition-colors duration-300">
                  {event.name}
                </h3>
              </div>

              {/* Ring Border */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-indigo-400 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventPlatform;