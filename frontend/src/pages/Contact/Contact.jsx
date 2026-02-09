import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission (e.g., API call)
        alert("Thank you! We will contact you shortly.");
        console.log(formData);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">

            {/* Hero Section */}
            {/* Hero Section */}
            <div className="relative h-[55vh] bg-[#0A192F] overflow-hidden flex flex-col">
                <Navbar />
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                <div className="flex-grow flex items-center justify-center relative z-10 px-4">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-6xl font-extrabold text-white mb-4"
                        >
                            Get In Touch
                        </motion.h1>
                        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                            Ready to start your project? Fill out the form or give us a call.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 mt-0 md:-mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#0A192F] text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between h-full"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-8 text-orange-500">Contact Information</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-orange-400">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Call Us Anytime</p>
                                        <p className="text-xl font-semibold">+971 50 123 4567</p>
                                        <p className="text-sm text-gray-500">+971 4 123 4567</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-orange-400">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Email Support</p>
                                        <p className="text-xl font-semibold">hello@alfykra.com</p>
                                        <p className="text-sm text-gray-500">support@alfykra.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-white/10 p-3 rounded-lg text-orange-400">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Our Location</p>
                                        <p className="text-lg font-semibold leading-snug">Office 402, Al Barsha Business Centre,<br /> Al Barsha 1, Dubai, UAE</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 pt-6 border-t border-white/10">
                                    <div className="bg-white/10 p-3 rounded-lg text-orange-400">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 mb-1">Working Hours</p>
                                        <p className="text-lg font-semibold">Mon - Sat: 9am - 7pm</p>
                                        <p className="text-sm text-orange-400">Sunday Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <div className="h-48 w-full rounded-2xl overflow-hidden bg-gray-800 relative">
                                {/* Placeholder for Map */}
                                <img
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
                                    alt="Map Location"
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <a href="#" className="bg-white text-[#0A192F] px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100"
                    >
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-[#0A192F] mb-2">Book a Consultation</h2>
                            <p className="text-gray-500">Fill in your details below and we will get back to you with a free quote.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="+971 50 123 4567"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Service Type</label>
                                    <select
                                        name="service"
                                        className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all text-gray-600 appearance-none cursor-pointer"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="1br">1 BR Refresh</option>
                                        <option value="2br">2 BR Premium</option>
                                        <option value="3br">3 BR Luxury</option>
                                        <option value="villa">Villa / Custom</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:border-orange-500 focus:bg-white focus:ring-2 focus:ring-orange-200 outline-none transition-all placeholder:text-gray-400 resize-none"
                                    placeholder="Tell us about your requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-orange-600 text-white font-bold py-5 rounded-xl shadow-lg hover:bg-orange-700 hover:shadow-orange-500/30 transition-all flex items-center justify-center gap-2 group text-lg"
                            >
                                Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;
