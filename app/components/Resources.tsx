'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, BookOpen, Video, Award } from 'lucide-react';

interface Resource {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<any>;
  categoryColor: string;
}

const resources: Resource[] = [
  {
    id: 1,
    category: 'Guide',
    title: 'Mastering Hybrid Event Strategies',
    description: 'Learn proven techniques to create engaging experiences that seamlessly blend in-person and virtual attendees.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    icon: BookOpen,
    categoryColor: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    category: 'Webinar',
    title: 'Engaging Attendees in 2025: The Future of Event Interaction',
    description: 'Discover cutting-edge tools and strategies to maximize attendee engagement and create memorable event experiences.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80',
    icon: Video,
    categoryColor: 'from-purple-500 to-pink-400',
  },
  {
    id: 3,
    category: 'Case Study',
    title: 'How TrueEvents Helped 500+ Brands Run Seamless Events',
    description: 'Real success stories showcasing how leading brands transformed their event management with TrueEvents.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    icon: Award,
    categoryColor: 'from-orange-500 to-yellow-400',
  },
];

const ResourceCard: React.FC<{ resource: Resource; index: number }> = ({ resource, index }) => {
  const IconComponent = resource.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-200/60 hover:shadow-2xl transition-all duration-400 border border-white/50"
    >
      {/* Glowing Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-400 blur-xl -z-10"></div>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={resource.image}
          alt={resource.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${resource.categoryColor} text-white text-sm font-semibold shadow-lg backdrop-blur-sm`}>
            <IconComponent className="w-4 h-4" />
            {resource.category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {resource.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          {resource.description}
        </p>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 5 }}
          className="group/btn inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-500 transition-colors duration-300"
          aria-label={`Read more about ${resource.title}`}
        >
          Read More
          <motion.div
            className="relative"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="w-5 h-5" />
            <motion.div
              className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-0 group-hover/btn:opacity-50"
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </div>

      {/* Corner Glow */}
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400 blur-sm"></div>
    </motion.div>
  );
};

const ResourcesSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-blue-50/50 to-cyan-50 py-20 px-6 overflow-hidden" id='resource'>
      {/* Animated Light Blobs with White Glow */}
      <motion.div
        animate={{ y: [0, -35, 0], x: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-cyan-400/25 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 45, 0], x: [0, -35, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-400/25 to-blue-400/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-300/15 to-cyan-300/10 rounded-full blur-3xl"
      />

      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

      {/* Floating Blue Icons with Soft Glow */}
      {[
        { Icon: BookOpen, left: '12%', top: '22%', delay: 0 },
        { Icon: Video, left: '78%', top: '32%', delay: 2.5 },
        { Icon: Award, left: '38%', top: '68%', delay: 4.5 },
      ].map(({ Icon, left, top, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-500/25"
          style={{ left, top }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 18, 0],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            delay,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
        </motion.div>
      ))}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            Resources to help you plan better events
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore guides, webinars, and success stories from TrueEvents experts.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {resources.map((resource, index) => (
            <ResourceCard key={resource.id} resource={resource} index={index} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-1"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-3xl font-bold text-slate-800 mb-8"
            >
              Want to explore more event planning resources?
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Get started with TrueEvents resources"
            >
              Get Started
              <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="w-5 h-5" />
              </motion.div>
              <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResourcesSection;