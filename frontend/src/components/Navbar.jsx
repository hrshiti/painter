import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo-removebg-preview.png';

const Navbar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Plans', path: '/plans' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="flex justify-between items-center px-6 py-6 max-w-7xl mx-auto relative z-50 w-full">
                {/* Logo Section */}
                <div className="flex items-center gap-2 z-50">
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="Al-Fykra Logo" className="w-14 h-14 md:w-16 md:h-16 object-contain" />
                        <span className="text-xl font-bold tracking-tight uppercase hidden lg:block text-white drop-shadow-md leading-tight">
                            AL-FYKRA<br />
                            <span className="text-xs font-normal tracking-wider opacity-90">PAINTERS</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation - Centered Floating Pill */}
                <div className="hidden md:flex absolute left-1/2 top-6 transform -translate-x-1/2 gap-1 bg-white/10 backdrop-blur-md px-2 py-2 rounded-full border border-white/20 shadow-2xl z-40">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${location.pathname === link.path
                                ? 'bg-white text-[#0A192F] shadow-sm font-bold'
                                : 'text-white hover:bg-white/20'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block z-50">
                    <Link to="/book" className="bg-orange-600 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-0.5">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white cursor-pointer z-50 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-[#0A192F] z-40 flex flex-col pt-32 px-8 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`text-2xl font-bold block ${location.pathname === link.path
                                                ? 'text-orange-500'
                                                : 'text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8"
                            >
                                <Link
                                    to="/book"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center bg-orange-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg"
                                >
                                    Book Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
