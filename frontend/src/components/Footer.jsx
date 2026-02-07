import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0A192F] text-white pt-24 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Info */}
                <div>
                    <Link to="/" className="text-2xl font-bold uppercase mb-6 block text-white drop-shadow-sm">
                        AL-FYKRA<br /> <span className="text-sm font-normal text-orange-400">PAINTERS</span>
                    </Link>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        We bring life to your walls with vibrant colors and professional finishes. Your trusted partner for home transformation.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-orange-500">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-orange-500">
                            <Twitter size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-orange-500">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-orange-500">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-orange-400">Quick Links</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link to="/" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Home</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors hover:pl-2 duration-300 block">About Us</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Services</Link></li>
                        <li><Link to="/plans" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Pricing Plans</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-orange-400">Our Services</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><Link to="/services" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Interior Painting</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Exterior Protection</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Texture Designs</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Waterproofing</Link></li>
                        <li><Link to="/services" className="hover:text-white transition-colors hover:pl-2 duration-300 block">Custom Stencils</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-bold mb-6 text-orange-400">Contact Us</h4>
                    <ul className="space-y-6 text-gray-400">
                        <li className="flex items-start gap-4">
                            <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                            <span>123, Paint Avenue, Color City,<br /> Maharashtra, India - 400001</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Phone className="text-orange-500 flex-shrink-0" size={20} />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <Mail className="text-orange-500 flex-shrink-0" size={20} />
                            <span>hello@alfykra.com</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Al-Fykra Painters. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
