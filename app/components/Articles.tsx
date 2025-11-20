'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Top 10 Hybrid Event Strategies That Work in 2025',
    description: 'Discover the most effective ways to host successful hybrid events combining live and virtual experiences.',
    date: 'November 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    category: 'Strategy',
  },
  {
    id: 2,
    title: 'The Future of Event Technology: AI and Automation',
    description: 'Explore how artificial intelligence is revolutionizing event planning, attendee engagement, and data analytics.',
    date: 'October 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Maximizing ROI: Event Marketing Best Practices',
    description: 'Learn proven tactics to increase event attendance, engagement, and measure success with precision.',
    date: 'October 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    category: 'Marketing',
  },
  {
    id: 4,
    title: 'Sustainable Events: Going Green in 2025',
    description: 'Practical tips for creating eco-friendly events that reduce carbon footprint without compromising quality.',
    date: 'September 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    category: 'Sustainability',
  },
  {
    id: 5,
    title: 'Attendee Engagement: Interactive Tools That Work',
    description: 'Transform passive audiences into active participants with cutting-edge engagement technologies.',
    date: 'September 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
    category: 'Engagement',
  },
  {
    id: 6,
    title: 'Case Study: How Fortune 500 Companies Run Events',
    description: 'Behind-the-scenes look at how leading brands execute flawless corporate events at scale.',
    date: 'August 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
    category: 'Case Study',
  },
];

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full"
    >
      {/* Image - Fixed for mobile */}
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
        <motion.img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md text-shadow">
            {article.category}
          </span>
        </div>

        {/* Read Time */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 text-xs font-medium text-white bg-black/40 backdrop-blur-sm rounded-full">
          <Clock className="w-3 h-3" />
          {article.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-2 sm:mb-3">
            <Calendar className="w-4 h-4" />
            <time>{article.date}</time>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {article.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {article.description}
          </p>
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 4 }}
          className="mt-4 sm:mt-6 inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-cyan-600"
        >
          Read More
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const ArticlesInsightsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-white via-blue-50/10 to-white" id='article'>
      {/* Background Glows */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 w-80 h-80 sm:w-96 sm:h-96 bg-blue-300/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.08, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-80 h-80 sm:w-96 sm:h-96 bg-cyan-300/15 rounded-full blur-3xl -z-10"
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-bold text-blue-600 bg-blue-100 rounded-full">
              Knowledge Hub
            </span>
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Recent Articles & Insights
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the latest trends, success stories, and expert tips in event management.
          </p>
        </motion.div>

        {/* Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Swiper Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              pagination={{ clickable: true }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
              className="h-full"
            >
              {articles.map((article) => (
                <SwiperSlide key={article.id}>
                  <ArticleCard article={article} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Right: Synced Text - Hidden on Mobile */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block space-y-6 sticky top-24"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 text-sm text-blue-600 mb-4">
                <Calendar className="w-4 h-4" />
                <time>{articles[activeIndex].date}</time>
                <span className="mx-2 text-gray-400">•</span>
                <Clock className="w-4 h-4" />
                <span>{articles[activeIndex].readTime}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                {articles[activeIndex].title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-base">
                {articles[activeIndex].description}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ x: 6 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-600"
                >
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-md">
                {articles[activeIndex].category}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Show Text Below Card */}
        <motion.div
          key={`mobile-${activeIndex}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden mt-8 p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-gray-100"
        >
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <Calendar className="w-4 h-4" />
            <time>{articles[activeIndex].date}</time>
            <span className="mx-2 text-gray-400">•</span>
            <Clock className="w-4 h-4" />
            <span>{articles[activeIndex].readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-slate-800 mb-2">
            {articles[activeIndex].title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {articles[activeIndex].description}
          </p>
          <button className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
            Read Full Article
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="mt-4 inline-block">
            <span className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full">
              {articles[activeIndex].category}
            </span>
          </div>
        </motion.div>

        {/* View All Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span className="relative z-10">View All Articles</span>
            <ArrowRight className="w-5 h-5 z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ArticlesInsightsSection;