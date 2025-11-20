"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const bookDemoSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid business email"),
  countryCode: z.string().min(1, "Select country code"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  attendees: z.string().min(1, "Please select number of attendees"),
  message: z.string().optional(),
});

type BookDemoFormData = z.infer<typeof bookDemoSchema>;

const BookDemoSection: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookDemoFormData>({
    resolver: zodResolver(bookDemoSchema),
  });

  const onSubmit = (data: BookDemoFormData) => {
    console.log("Form Data:", data);
    setShowSuccess(true);
    reset();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const trustedLogos = [
    "Coca-Cola", "Nestlé", "FedEx", "Pernod Ricard",
    "Bioderma", "Absolut", "BBVA", "ExxonMobil"
  ];

  return (
    <section className="relative min-h-screen bg-slate-950 py-16 px-6 md:py-20 lg:py-24 overflow-hidden" id="book-demo">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-80 h-80 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.03, 0.06] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 md:w-96 md:h-96 bg-violet-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-start">
          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 lg:space-y-10"
          >
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs">
                <div className="flex">{[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}</div>
                <span className="font-medium text-gray-300">G2</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs">
                <div className="flex">{[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}</div>
                <span className="font-medium text-gray-300">Capterra</span>
              </div>
              <div className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border border-blue-500/30 rounded-full">
                <span className="text-xs font-semibold text-blue-300">Highest User Adoption 2024</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-tight">
                READY TO GET<br className="hidden sm:block" /> STARTED?
              </h1>
              <p className="text-base sm:text-lg text-gray-400 max-w-xl">
                Please fill out the form and one of our event experts will get back to you shortly to discuss your event needs.
              </p>
            </div>

            {/* Trusted Logos */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Trusted by industry leaders
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center">
                {trustedLogos.map((name, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                  >
                    <span className="text-gray-400 text-xs sm:text-sm font-bold">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 backdrop-blur-lg p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Expert Avatars */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
                  ].map((img, i) => (
                    <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 p-0.5">
                      <img src={img} alt="Expert" className="w-full h-full rounded-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium text-gray-700">Book a demo with one of our experts</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input {...register("fullName")} placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
                  {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Business Email</label>
                  <input {...register("email")} type="email" placeholder="name@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900" />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                </div>

                {/* Phone - Fully Responsive */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative sm:w-32">
                      <select {...register("countryCode")} className="w-full px-3 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none text-gray-900 text-sm">
                        <option value="+91">India +91</option>
                        <option value="+1">USA +1</option>
                        <option value="+44">UK +44</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                    </div>
                    <input {...register("phone")} type="tel" placeholder="9876543210" className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-900" />
                  </div>
                  {(errors.phone || errors.countryCode) && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone?.message || errors.countryCode?.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Attendees</label>
                  <div className="relative">
                    <select {...register("attendees")} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 appearance-none text-gray-900">
                      <option value="">Please Select</option>
                      <option value="1-50">1-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                  {errors.attendees && <p className="text-xs text-red-500 mt-1">{errors.attendees.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message (Optional)</label>
                  <textarea {...register("message")} rows={4} placeholder="Tell us about your event..." className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 resize-none text-gray-900" />
                </div>

                <p className="text-xs text-gray-600">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">terms</a> and{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-700 underline">privacy policy</a>.
                </p>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Book a call
                </motion.button>
              </form>

              {/* Success Toast */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-16 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg whitespace-nowrap"
                >
                  Form submitted successfully!
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemoSection;