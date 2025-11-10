'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Lightbulb,
    TrendingUp,
    Ticket,
    Users,
    Globe,
    Database,
    LucideProps,
    PlayCircle, ArrowDown
} from 'lucide-react';

type IconType = React.ComponentType<LucideProps>;

interface Feature {
    id: number;
    icon: IconType;
    title: string;
    description: string;
}

const features: Feature[] = [
    { id: 1, icon: Lightbulb, title: 'Smart Registration', description: 'Streamline attendee sign-ups with intelligent forms and automated confirmations.' },
    { id: 2, icon: TrendingUp, title: 'Real-time Analytics', description: 'Track engagement metrics and attendance data as events unfold in real-time.' },
    { id: 3, icon: Globe, title: 'Hybrid Experience', description: 'Seamlessly blend in-person and virtual attendance for maximum reach.' },
    { id: 4, icon: Ticket, title: 'Seamless Ticketing', description: 'Sell tickets effortlessly with integrated payment processing and QR codes.' },
    { id: 5, icon: Users, title: 'Live Engagement', description: 'Connect with attendees through polls, Q&A sessions, and interactive features.' },
    { id: 6, icon: Database, title: 'Data-Driven Insights', description: 'Make informed decisions with comprehensive reports and actionable intelligence.' },
];

const FeaturedSolutions: React.FC = () => {
    // Explicit Variants type
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut", // string easing
            },
        },
    };

    // Button Variants - Fixed with string easing
    const buttonVariants: Variants = {
        rest: { scale: 1 },
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.3,
                ease: "easeInOut", // string instead of number[]
            },
        },
        tap: { scale: 0.98 },
    };

    return (
        <section className="relative min-h-screen bg-white py-20 px-6 overflow-hidden" id='feature'>
            {/* Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/40 to-cyan-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/30 to-cyan-50/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                            Power
                        </span>{' '}
                        <span className="text-slate-900">Your Events with</span>{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            TrueEvents
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover how our features turn planning into a seamless experience
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 20px 60px rgba(10, 132, 255, 0.2)',
                                }}
                                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-gray-100"
                            >
                                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg group-hover:shadow-xl transition-shadow duration-500"
                                    aria-hidden="true"
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>

                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-center"
                >
                    <motion.button
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => {
                            const element = document.getElementById('demo');
                            element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-semibold text-white rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
                        aria-label="Explore all TrueEvents features"
                    >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500"></div>
                        {/* Animated Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                        {/* Button Text + Down Arrow */}
                        <span className="relative z-10 flex items-center gap-2">
                            Explore All Features
                            <motion.div
                                initial={{ y: 0 }}
                                whileHover={{ y: 4 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                <ArrowDown className="w-5 h-5" />
                            </motion.div>
                        </span>
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedSolutions;