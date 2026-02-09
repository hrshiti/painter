import React from 'react';
import { motion } from 'framer-motion';
import { Brush, Palette, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const keyFeatures = [
        {
            icon: <Brush size={28} />,
            title: "Our Work",
            description: "Explore our portfolio of transformed homes.",
            buttonText: "View Portfolio",
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            icon: <Palette size={28} />,
            title: "Color Ideas",
            description: "Get expert consultation on trending palettes.",
            buttonText: "Explore Colors",
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            icon: <ShieldCheck size={28} />,
            title: "Quality Promise",
            description: "100% satisfaction guarantee with premium paints.",
            buttonText: "Our Guarantee",
            color: "text-green-600",
            bg: "bg-green-50"
        }
    ];

    const plans = [
        {
            id: "studio-starter",
            title: "Studio Starter",
            description: "Efficient & elegant makeover for studio spaces. Quick & budget-friendly.",
            price: "Starts AED 450",
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2670&auto=format&fit=crop",
            features: ["Standard Finish", "2-3 Days", "Budget Friendly"]
        },
        {
            id: "1br-refresh",
            title: "1 BR Refresh",
            description: "Perfect for compact homes. Includes living, bedroom, kitchen & bath.",
            price: "Starts AED 600",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2670&auto=format&fit=crop",
            features: ["Standard Finish", "3-4 Days", "Wall Cleaning"]
        },
        {
            id: "2br-premium",
            title: "2 BR Premium",
            description: "Our most popular choice. Premium finish with 2 coats + texture wall.",
            price: "Starts AED 900",
            image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2670&auto=format&fit=crop",
            features: ["Premium Emulsion", "5-6 Days", "Texture Included"],
            recommended: true
        },
        {
            id: "3br-luxury",
            title: "3 BR Luxury",
            description: "Luxury experience for larger spaces. Royal play designs included.",
            price: "Starts AED 1,250",
            image: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2668&auto=format&fit=crop",
            features: ["Luxury Finish", "7-8 Days", "Deep Cleaning"]
        },
        {
            id: "villa-custom",
            title: "Villa / Custom",
            description: "End-to-end solutions. Waterproofing & complete exterior makeover.",
            price: "Custom Quote",
            image: "https://images.unsplash.com/photo-1600596542815-6ad4c1277855?q=80&w=2670&auto=format&fit=crop",
            features: ["Interior + Exterior", "Consultation", "Waterproofing"]
        }
    ];

    return (
        <section className="bg-gray-50 pb-16 md:pb-32 relative">
            <div className="max-w-7xl mx-auto px-6">

                {/* Top Floating Cards - Increased Spacing & Better Shadow */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:-mt-20 relative z-20 mb-16 md:mb-32">
                    {keyFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-2xl shadow-xl hover:shadow-2xl p-4 md:p-8 flex flex-col items-center text-center transition-all duration-300 border border-gray-100"
                        >
                            <div className={`mb-3 md:mb-6 p-3 md:p-4 rounded-full ${feature.bg} ${feature.color}`}>
                                {React.cloneElement(feature.icon, { size: 20 })}
                            </div>
                            <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-8 leading-relaxed px-1 md:px-4 hidden md:block">
                                {feature.description}
                            </p>
                            <button className="mt-auto text-xs md:text-sm font-semibold text-[#0A192F] hover:text-orange-600 transition-colors flex items-center gap-2 group">
                                {feature.buttonText}
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Packages</span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A192F] mb-6">Choose Your Painting Plan</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        From quick refreshes to complete makeovers, we have tailored solutions for every home.
                    </p>
                </motion.div>

                {/* Plan Cards with Real Images */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                    {plans.map((plan, index) => (
                        <Link to={`/plan/${plan.id}`} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className={`relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg group h-[250px] md:h-[450px] flex flex-col ${plan.recommended ? 'ring-2 md:ring-4 ring-orange-500 ring-offset-1 md:ring-offset-2' : ''}`}
                            >
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${plan.image})` }}
                                />

                                {/* Dark Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                                {/* Content */}
                                <div className="relative z-10 flex flex-col h-full p-3 md:p-6 text-white">
                                    {plan.recommended && (
                                        <div className="self-end bg-orange-500 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-2 shadow-lg">
                                            POPULAR
                                        </div>
                                    )}

                                    <div className="mt-auto">
                                        <h3 className="text-base md:text-2xl font-bold mb-1 md:mb-2 leading-tight">{plan.title}</h3>
                                        <p className="text-gray-200 text-xs md:text-sm mb-2 md:mb-4 line-clamp-1 md:line-clamp-2 opacity-90">
                                            {plan.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="mb-3 md:mb-6 space-y-1 md:space-y-2 hidden md:block">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                                                    <CheckCircle2 size={14} className="text-orange-400" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-between border-t border-white/20 pt-2 md:pt-4">
                                            <div>
                                                <p className="text-[10px] md:text-xs text-gray-400">Starting at</p>
                                                <p className="text-sm md:text-lg font-bold text-white">{plan.price}</p>
                                            </div>
                                            <div className="bg-white text-black p-1.5 md:p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all transform hover:rotate-45">
                                                <ArrowRight size={14} className="md:w-[18px] md:h-[18px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
