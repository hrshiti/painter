import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, X, ArrowLeft, Clock, ShieldCheck, Tag, Home, ArrowRight } from 'lucide-react';
import { plansData } from '../../data/plans';
import Footer from '../../components/Footer';

const PlanDetail = () => {
    const { id } = useParams();
    const plan = plansData[id];

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!plan) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Plan Not Found</h2>
                <Link to="/" className="text-orange-600 hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Go Back to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen font-sans">

            {/* Header / Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
                    style={{ backgroundImage: `url(${plan.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-black/40 to-black/20" />

                <div className="absolute inset-0 flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                    <Link to="/" className="text-white/80 hover:text-white mb-6 flex items-center gap-2 w-fit bg-white/10 px-4 py-2 rounded-full backdrop-blur-md transition-colors">
                        <ArrowLeft size={18} /> Back to Plans
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg"
                    >
                        {plan.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-200 text-lg md:text-2xl max-w-2xl font-light mb-8 drop-shadow-md"
                    >
                        {plan.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-4 md:gap-8 text-white/90 font-medium"
                    >
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                            <Clock size={20} className="text-orange-400" />
                            <span>{plan.duration} Completion</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                            <ShieldCheck size={20} className="text-green-400" />
                            <span>{plan.warranty} Warranty</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                            <Tag size={20} className="text-yellow-400" />
                            <span>Starting at {plan.price}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12 relative -mt-20 z-10">

                {/* Left Column: Details */}
                <div className="lg:col-span-2 space-y-12">

                    {/* Scope Section */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-[#0A192F] mb-6 flex items-center gap-3">
                            <Home className="text-orange-500" /> Scope of Work
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {plan.rooms?.map((room, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-2xl hover:bg-orange-50 transition-colors border border-gray-100">
                                    <h3 className="font-bold text-lg text-gray-800 mb-2">{room.name}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{room.details}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Inclusions & Exclusions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-green-500">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Check className="bg-green-100 text-green-600 p-1 rounded-full w-8 h-8" /> What's Included
                            </h3>
                            <ul className="space-y-4">
                                {plan.inclusions?.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                        <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg p-8 border-t-4 border-red-400">
                            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <X className="bg-red-100 text-red-500 p-1 rounded-full w-8 h-8" /> Exclusions
                            </h3>
                            <ul className="space-y-4">
                                {plan.exclusions && plan.exclusions.length > 0 ? (
                                    plan.exclusions.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                                            <X size={18} className="text-red-400 mt-1 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-400 italic text-sm">No specific exclusions listed.</li>
                                )}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Right Column: Sticky Booking Card */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
                        <div className="text-center mb-8">
                            <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold">Total Estimated Cost</span>
                            <div className="text-4xl font-extrabold text-[#0A192F] mt-2 mb-1">{plan.price}</div>
                            <span className="text-xs text-gray-400">*Based on standard area size</span>
                        </div>

                        <Link
                            to="/book"
                            className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all mb-4 flex items-center justify-center gap-2 group"
                        >
                            Book This Plan <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link to="/contact" className="w-full bg-white text-[#0A192F] font-bold py-4 rounded-xl border-2 border-gray-200 hover:border-[#0A192F] transition-all mb-6 flex items-center justify-center">
                            Request Callback
                        </Link>

                        <div className="bg-gray-50 p-4 rounded-xl text-center">
                            <h4 className="font-bold text-sm text-gray-700 mb-2">Why Choose Al-Fykra?</h4>
                            <div className="flex justify-center gap-4 text-xs text-gray-500">
                                <span className="flex flex-col items-center gap-1">
                                    <ShieldCheck size={16} className="text-green-500" />
                                    Insured Work
                                </span>
                                <span className="flex flex-col items-center gap-1">
                                    <Clock size={16} className="text-blue-500" />
                                    On-Time
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
};

export default PlanDetail;
