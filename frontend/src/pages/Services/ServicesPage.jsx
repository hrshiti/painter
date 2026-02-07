import React from 'react';
import { motion } from 'framer-motion';
import { Check, PaintBucket, Umbrella, Brush, Palette, Droplets, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const ServicesPage = () => {
    const services = [
        {
            icon: <Home size={32} className="text-orange-500" />,
            title: "Interior Painting",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop",
            desc: "Give your rooms a fresh new look with our odorless, long-lasting paints. Perfect for living rooms, bedrooms, and kitchens.",
            features: [
                "Expert Color Consultation",
                "Crack Filling & Surface Prep",
                "Wide Range of Finishes (Matte, Satin, Gloss)",
                "Dust-Free Process"
            ]
        },
        {
            icon: <Umbrella size={32} className="text-blue-500" />,
            title: "Exterior Painting",
            image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2670&auto=format&fit=crop",
            desc: "Protect your home from harsh weather with our advanced exterior coatings. Weather-proof, anti-fungal, and beautiful.",
            features: [
                "Advanced Weather Proofing",
                "High Durability Coatings",
                "Anti-Algae Treatment",
                "Pressure Washing Before Paint"
            ]
        },
        {
            icon: <Brush size={32} className="text-purple-500" />,
            title: "Texture Design",
            image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2670&auto=format&fit=crop",
            desc: "Add character to your walls with our exclusive texture designs. From rustic finishes to modern metallic sheens.",
            features: [
                "Royal Play Designs",
                "Metallic & Stucco Finishes",
                "Geometric & Abstract Patterns",
                "Custom Wall Art"
            ]
        },
        {
            icon: <Droplets size={32} className="text-cyan-500" />,
            title: "Waterproofing",
            image: "https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&w=2670&auto=format&fit=crop",
            desc: "Stop leaks before they start. Our specialized waterproofing solutions ensure your home stays dry and safe.",
            features: [
                "Terrace Waterproofing",
                "Bathroom Sealing",
                "Damp Proof Course (DPC)",
                "Crack Injection Repair"
            ]
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            {/* Header */}
            <div className="bg-[#0A192F] relative overflow-hidden">
                <Navbar />
                <div className="relative z-10 py-16 md:py-24 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-extrabold text-white mb-4"
                    >
                        Our Expert Services
                    </motion.h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Comprehensive painting solutions tailored to your needs.
                    </p>
                </div>
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Services List */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 space-y-16 md:space-y-32">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        {/* Image Side */}
                        <div className="flex-1 w-full h-[250px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white font-bold text-xl drop-shadow-md">
                                {service.title} Portfolio
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 space-y-6">
                            <div className="bg-white p-4 rounded-xl shadow-sm w-fit inline-block mb-2">
                                {service.icon}
                            </div>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-[#0A192F]">{service.title}</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="bg-green-100 p-1 rounded-full">
                                            <Check size={16} className="text-green-600" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link to="/book" className="mt-8 px-8 py-3 bg-[#0A192F] text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg inline-block">
                                Book This Service
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default ServicesPage;
