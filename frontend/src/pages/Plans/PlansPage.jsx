import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PlansPage = () => {
    const plans = [
        {
            title: "Standard",
            price: "AED 600",
            duration: "3-4 Days",
            features: ["Tractor Emulsion", "Standard Finish", "Basic Cleaning", "6 Months Warranty"],
            isPopular: false
        },
        {
            title: "Premium",
            price: "AED 900",
            duration: "5-6 Days",
            features: ["Premium Emulsion", "High Sheen Finish", "Texture Included", "1 Year Warranty", "Deep Cleaning"],
            isPopular: true
        },
        {
            title: "Luxury",
            price: "AED 1,250",
            duration: "7-8 Days",
            features: ["Royal Play Designs", "Luxury Finish", "2 Texture Walls", "3 Years Warranty", "Post-Paint Sanitization"],
            isPopular: false
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <div className="bg-[#0A192F] relative overflow-hidden">
                <Navbar />
                <div className="relative z-10 py-16 md:py-24 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-6xl font-extrabold text-white mb-4"
                    >
                        Transparent Pricing Plans
                    </motion.h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                        Choose the perfect package for your home. No hidden costs.
                    </p>
                </div>
            </div>

            {/* Plans Grid */}
            <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -10 }}
                        className={`bg-white rounded-3xl p-8 shadow-xl flex flex-col border transition-all ${plan.isPopular ? 'border-orange-500 ring-4 ring-orange-100 scale-105 relative z-10' : 'border-gray-100'}`}
                    >
                        {plan.isPopular && (
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                                Most Popular
                            </div>
                        )}
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                        <div className="text-4xl font-extrabold text-[#0A192F] mb-1">{plan.price}</div>
                        <p className="text-gray-500 text-sm mb-6">Estimated for typical 1 BR / 2 BR apartments</p>

                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-700">
                                    <Check size={18} className="text-green-500 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Link to="/book" className={`w-full py-4 rounded-xl font-bold transition-colors block text-center ${plan.isPopular ? 'bg-orange-600 text-white hover:bg-orange-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                            Choose {plan.title}
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Comparison Table */}
            <div className="max-w-7xl mx-auto px-6 pb-16 md:pb-24">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0A192F] mb-12">Detailed Comparison</h2>
                <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-100">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100">
                                <th className="p-6 text-gray-500 font-medium uppercase text-sm tracking-wider">Feature</th>
                                <th className="p-6 text-center font-bold text-gray-800">Standard / Refresh</th>
                                <th className="p-6 text-center font-bold text-orange-600">Premium</th>
                                <th className="p-6 text-center font-bold text-purple-600">Luxury / Royal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: "Paint Quality", standard: "Tractor Emulsion", premium: "Premium Emulsion", luxury: "Royal Luxury Emulsion" },
                                { name: "Finish Type", standard: "Matte", premium: "Soft Sheen", luxury: "High Gloss / Silk" },
                                { name: "Coats", standard: "2 Coats", premium: "2 Coats + Primer", luxury: "3 Coats + Putty + Primer" },
                                { name: "Texture Wall", standard: <X size={20} className="text-red-300 mx-auto" />, premium: <Check size={20} className="text-green-500 mx-auto" />, luxury: "2 Walls Included" },
                                { name: "Warranty", standard: "6 Months", premium: "1 Year", luxury: "3 Years" },
                                { name: "Deep Cleaning", standard: <X size={20} className="text-red-300 mx-auto" />, premium: <Check size={20} className="text-green-500 mx-auto" />, luxury: "Professional Deep Clean" },
                            ].map((row, index) => (
                                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                    <td className="p-6 font-medium text-gray-700">{row.name}</td>
                                    <td className="p-6 text-center text-gray-600">{row.standard}</td>
                                    <td className="p-6 text-center text-gray-800 font-semibold bg-orange-50/30">{row.premium}</td>
                                    <td className="p-6 text-center text-gray-800 font-semibold">{row.luxury}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PlansPage;
