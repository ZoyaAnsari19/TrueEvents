'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QrCode, Clock, Users, CheckCircle, Calendar, ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    // Auto-rotate cards every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCardIndex((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const eventCards = [
        {
            id: 1,
            title: 'QR Check-In',
            subtitle: 'Instant Access',
            icon: QrCode,
            color: 'from-blue-500 to-cyan-500',
            features: [
                { icon: CheckCircle, text: 'Fast Entry' },
                { icon: Users, text: '2,345 Scanned' },
            ],
            accentColor: 'bg-blue-500',
        },
        {
            id: 2,
            title: 'Event Schedule',
            subtitle: 'Today\'s Agenda',
            icon: Clock,
            color: 'from-violet-500 to-purple-500',
            timeSlots: [
                { time: '09:00 AM', event: 'Keynote Speech', status: 'live' },
                { time: '11:30 AM', event: 'Panel Discussion', status: 'upcoming' },
                { time: '02:00 PM', event: 'Networking Break', status: 'upcoming' },
            ],
            accentColor: 'bg-violet-500',
        },
        {
            id: 3,
            title: 'Featured Speakers',
            subtitle: '12 Speakers',
            icon: Users,
            color: 'from-pink-500 to-rose-500',
            speakers: [
                { name: 'Sarah Johnson', role: 'CEO, TechCorp', initials: 'SJ', color: 'bg-pink-500' },
                { name: 'Mike Chen', role: 'Designer', initials: 'MC', color: 'bg-purple-500' },
                { name: 'Emily Davis', role: 'Developer', initials: 'ED', color: 'bg-blue-500' },
                { name: 'Alex Rivera', role: 'Founder', initials: 'AR', color: 'bg-cyan-500' },
            ],
            accentColor: 'bg-pink-500',
        },
    ];

    const animatedTexts = ['Simplified', 'Digitized', 'Efficient', 'Scalable'];
    const [swapTextIndex, setSwapTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSwapTextIndex((prev) => (prev + 1) % animatedTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#EAF4FF] via-white to-[#F5F9FF]">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-64 -right-64 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/40 to-violet-200/40 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute -bottom-64 -left-64 w-[700px] h-[700px] bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(10,132,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,132,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            </div>

            {/* Main Content - ZERO TOP GAP */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column */}
                    <div className="text-center lg:text-left space-y-6">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full"
                        >
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-semibold text-blue-600">
                                Trusted by 10,000+ Event Organizers
                            </span>
                        </motion.div>

                        {/* Main Heading with Animated Text */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                        >
                            <span className="text-gray-900">TrueEvents Management,</span>
                            <br />
                            <div className="relative h-20 md:h-24 overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={swapTextIndex}
                                        initial={{ y: 80, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -80, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 bg-clip-text text-transparent text-6xl md:text-7xl lg:text-8xl font-bold"
                                    >
                                        {animatedTexts[swapTextIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            TrueEvents all-in-one event management software simplifies event planning and elevates the attendee experience.
                        </motion.p>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex justify-center lg:justify-start"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative px-8 py-4 bg-white text-gray-900 font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
                            >
                                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 rounded-full"
                                />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Column: Vertical Stacked Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative h-[800px] md:h-[900px] hidden lg:flex justify-center items-center"
                    >
                        <div className="relative w-[380px] h-full">
                            <AnimatePresence initial={false}>
                                {eventCards.map((card, index) => {
                                    const diff = index - activeCardIndex;
                                    const isActive = diff === 0;
                                    const isNext = diff === 1 || diff === -2;
                                    const isPrev = diff === -1 || diff === 2;

                                    return (
                                        <motion.div
                                            key={card.id}
                                            initial={false}
                                            animate={{
                                                y: isActive ? 0 : isNext ? 120 : isPrev ? -120 : 0,
                                                scale: isActive ? 1 : 0.92,
                                                opacity: isActive ? 1 : 0.6,
                                                zIndex: isActive ? 30 : isNext ? 20 : isPrev ? 20 : 10,
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                            className="absolute inset-x-0 mx-auto w-full"
                                            style={{
                                                top: isActive ? '20%' : isNext ? 'calc(20% + 100px)' : isPrev ? 'calc(20% - 100px)' : '20%',
                                                transform: `translateY(-50%)`,
                                            }}
                                        >
                                            {/* Card */}
                                            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 h-[520px] flex flex-col">
                                                <div className={`h-1.5 rounded-t-3xl bg-gradient-to-r ${card.color}`} />
                                                <div className="flex items-center space-x-4 mt-6 mb-8">
                                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                                                        <card.icon className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                                                        <p className="text-sm text-gray-500">{card.subtitle}</p>
                                                    </div>
                                                </div>

                                                <div className="flex-1 overflow-hidden">
                                                    {card.id === 1 && card.features && (
                                                        <div className="space-y-6">
                                                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 flex justify-center">
                                                                <div className="w-40 h-40 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                                                                    <QrCode className="w-32 h-32 text-gray-800" />
                                                                </div>
                                                            </div>
                                                            <div className="space-y-3">
                                                                {card.features.map((f, i) => (
                                                                    <div key={i} className="flex items-center space-x-3">
                                                                        <f.icon className="w-5 h-5 text-blue-600" />
                                                                        <span className="text-base font-medium text-gray-700">{f.text}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {card.id === 2 && card.timeSlots && (
                                                        <div className="space-y-4">
                                                            {card.timeSlots.map((slot, i) => (
                                                                <div
                                                                    key={i}
                                                                    className="flex items-center justify-between p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl"
                                                                >
                                                                    <div className="flex items-center space-x-4 flex-1">
                                                                        <span className="text-base font-bold text-violet-600 w-20">{slot.time}</span>
                                                                        <span className="text-base font-medium text-gray-900">{slot.event}</span>
                                                                    </div>
                                                                    {slot.status === 'live' && (
                                                                        <span className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                                                                            LIVE
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {card.id === 3 && card.speakers && (
                                                        <div className="space-y-6">
                                                            <div className="flex -space-x-3">
                                                                {card.speakers.map((s, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={`w-14 h-14 ${s.color} rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-white shadow-lg`}
                                                                    >
                                                                        {s.initials}
                                                                    </div>
                                                                ))}
                                                                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold text-xs border-4 border-white shadow-lg">
                                                                    +8
                                                                </div>
                                                            </div>
                                                            <div className="space-y-4">
                                                                {card.speakers.slice(0, 2).map((s, i) => (
                                                                    <div key={i} className="flex items-center space-x-4">
                                                                        <div className={`w-12 h-12 ${s.color} rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                                                                            {s.initials}
                                                                        </div>
                                                                        <div>
                                                                            <div className="text-base font-semibold text-gray-900">{s.name}</div>
                                                                            <div className="text-sm text-gray-500">{s.role}</div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                {isActive && (
                                                    <motion.div
                                                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                        className={`absolute -inset-6 bg-gradient-to-r ${card.color} blur-3xl -z-10 rounded-3xl`}
                                                    />
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>

                            {/* Dots */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
                                {eventCards.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveCardIndex(i)}
                                        className={`w-2 h-2 rounded-full transition-all ${i === activeCardIndex
                                                ? 'w-10 bg-gradient-to-r from-purple-500 to-yellow-500'
                                                : 'bg-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Mobile View */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {eventCards.map((card) => (
                        <motion.div
                            key={card.id}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                        >
                            <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center shadow-lg mb-4`}>
                                <card.icon className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-1">{card.title}</h4>
                            <p className="text-sm text-gray-500">{card.subtitle}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}