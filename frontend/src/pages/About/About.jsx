import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Home, Clock } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const About = () => {
    const stats = [
        { icon: <Home size={28} />, value: "500+", label: "Homes Painted" },
        { icon: <Users size={28} />, value: "50+", label: "Expert Painters" },
        { icon: <Award size={28} />, value: "10+", label: "Years Experience" },
        { icon: <Clock size={28} />, value: "100%", label: "On-Time Delivery" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <div className="bg-[#0A192F] relative">
                <Navbar />
                {/* Hero Section */}
                <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1574359416556-912803bda90d?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 block"
                        >
                            Our Story
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                        >
                            Painting Dreams,<br /> One Wall at a Time.
                        </motion.h1>
                    </div>
                </div>
            </div>

            {/* Our Mission */}
            <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1599696847721-6d7ec21c1766?q=80&w=2131&auto=format&fit=crop"
                            alt="Painters at work"
                            className="rounded-3xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 w-full object-cover h-[300px] md:h-[500px]"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A192F]">Who We Are</h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Al-Fykra Painters is more than just a painting service. We are a team of passionate artists, technicians, and listeners. Founded in 2015, we started with a simple mission: to make high-quality home makeovers accessible, transparent, and stress-free.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            We believe that your home is your canvas. Whether it's a vibrant living room that sparks joy or a serene bedroom for relaxation, we bring the expertise to match your vision. Our "Dust-Free" promise ensures that while your walls change, your peace of mind stays intact.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100 mt-2">
                                    <div className="text-orange-500 mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-[#0A192F]">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-gray-50 py-16 md:py-24 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A192F] mb-16">The Al-Fykra Difference</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Transparency", desc: "No hidden costs. The price we quote is the price you pay.", img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop" },
                            { title: "Quality", desc: "We use only premium paints (Asian Paints, Berger, etc.) for a lasting finish.", img: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2670&auto=format&fit=crop" },
                            { title: "Speed", desc: "Automated tools and organized teams ensure we finish 40% faster.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2670&auto=format&fit=crop" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-[#0A192F] mb-3">{item.title}</h3>
                                    <p className="text-gray-500">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
