import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit3, Trash, Check } from 'lucide-react';

const Plans = () => {
    const [plans, setPlans] = useState([
        { id: 1, name: '1 BR Standard', price: 600, features: ['Tractor Emulsion', 'Basic Prep', '6 Months Warranty'], popular: false },
        { id: 2, name: '2 BR Premium', price: 900, features: ['Premium Emulsion', 'Full Prep', '1 Year Warranty', 'Texture Wall'], popular: true },
        { id: 3, name: '3 BR Luxury', price: 1250, features: ['Royal Play', 'Deep Cleaning', '3 Years Warranty', 'All Walls Texture', 'Sanitization'], popular: false },
        { id: 4, name: 'Villa Custom', price: 2500, features: ['Custom Finishes', 'Dedicated Curator', '5 Years Warranty', 'Exterior Included'], popular: false },
    ]);

    const handlePopularToggle = (id) => {
        setPlans(plans.map(p => p.id === id ? { ...p, popular: !p.popular } : p));
    };

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this plan?')) {
            setPlans(plans.filter(p => p.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-3xl font-bold text-gray-800"
                >
                    Manage Plans
                </motion.h1>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-orange-500/30 flex items-center gap-2 transition-all group">
                    <Plus size={20} className="group-hover:rotate-90 transition-transform" />
                    <span>Create New Plan</span>
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`bg-white rounded-3xl p-8 shadow-xl flex flex-col border transition-all hover:scale-105 duration-300 relative ${plan.popular ? 'border-orange-500 ring-4 ring-orange-100' : 'border-gray-100'}`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                                Most Popular
                            </div>
                        )}

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800">{plan.name}</h3>
                                <p className="text-3xl font-extrabold text-[#0A192F] mt-2">AED {plan.price.toLocaleString()}</p>
                                <p className="text-xs text-gray-400 mt-1">Starting Price</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full">
                                <Edit3 size={20} />
                            </button>
                        </div>

                        <div className="border-t border-gray-100 my-4 pt-4 flex-grow">
                            <h4 className="text-sm uppercase font-bold text-gray-400 mb-2">Features</h4>
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                                        <Check size={16} className="text-green-500 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-3 justify-end mt-8 pt-4 border-t border-gray-100">
                            <button
                                onClick={() => handlePopularToggle(plan.id)}
                                className={`p-2 rounded-lg transition-colors ${plan.popular ? 'text-orange-500 bg-orange-50 hover:bg-orange-100' : 'text-gray-400 bg-gray-50 hover:bg-gray-200'}`}
                                title={plan.popular ? "Remove Popular Tag" : "Mark as Popular"}
                            >
                                <motion.div whileTap={{ scale: 0.9 }}>
                                    ✨
                                </motion.div>
                            </button>
                            <button
                                onClick={() => handleDelete(plan.id)}
                                className="p-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                                title="Delete Plan"
                            >
                                <Trash size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
