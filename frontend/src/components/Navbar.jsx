import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-removebg-preview.png';

const Navbar = () => {
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Plans', path: '/plans' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
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

            {/* Mobile Menu Toggle (Simplified) */}
            <div className="md:hidden text-white cursor-pointer z-50">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            </div>
        </nav>
    );
};

export default Navbar;
