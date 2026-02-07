import React from 'react';
import { motion } from 'framer-motion';
import heroBg from '../assets/heroimage.jpg';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div
            className="relative min-h-screen text-white overflow-hidden font-sans bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
        >
            {/* Dark Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Reusable Navbar */}
            <Navbar />

            {/* Hero Content */}
            <main className="flex flex-col items-center text-center px-4 mt-12 md:mt-24 max-w-4xl mx-auto relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg text-white"
                >
                    Premium Home Painting<br className="hidden md:block" /> Services You Can Trust
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-gray-100 font-medium text-sm md:text-xl max-w-2xl mb-10 leading-relaxed drop-shadow-md"
                >
                    Professional painters, transparent pricing & on-time delivery.
                </motion.p>

                <div className="flex gap-4">
                    <Link to="/book">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="bg-[#f97316] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all flex items-center gap-2 shadow-xl hover:scale-105"
                        >
                            Book Painting
                        </motion.button>
                    </Link>
                    <Link to="/plans">
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0A192F] transition-all shadow-xl"
                        >
                            View Plans
                        </motion.button>
                    </Link>
                </div>
            </main>
        </div>
    );
};

export default Hero;
