import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaBanner = () => {
    return (
        <section className="bg-[#f2f2f2] relative overflow-hidden py-16 md:py-32">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1574359416556-912803bda90d?q=80&w=2670&auto=format&fit=crop')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 mix-blend-multiply opacity-90" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-white">

                <div className="max-w-2xl text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md"
                    >
                        Ready to Transform Your Space?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-orange-50 text-lg md:text-xl font-medium max-w-lg mx-auto md:mx-0 drop-shadow-sm"
                    >
                        Get a free consultation and personalized quote today. Let's paint your dream home together.
                    </motion.p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            to="/book"
                            className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                        >
                            Book Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <a
                            href="tel:+971501234567"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center gap-2"
                        >
                            Call Us <Phone size={20} />
                        </a>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default CtaBanner;
