import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Ruler, PaintBucket, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

const Process = () => {
    const steps = [
        {
            id: "01",
            icon: <Calendar size={32} />,
            title: "Book Consultation",
            description: "Schedule a free site visit online. Our experts will connect with you to understand your vision.",
            image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2669&auto=format&fit=crop"
        },
        {
            id: "02",
            icon: <Ruler size={32} />,
            title: "Measurement & Quote",
            description: "We use laser tools for accurate measurements and provide an instant, transparent quotation.",
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
        },
        {
            id: "03",
            icon: <PaintBucket size={32} />,
            title: "Dust-Free Painting",
            description: "Our trained professionals cover furniture, mask floors, and paint using automated tools.",
            image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop"
        },
        {
            id: "04",
            icon: <Smile size={32} />,
            title: "Final Handover",
            description: "We clean up the site, remove masking tapes, and hand over your refreshed home to you.",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
        }
    ];

    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-16 md:py-24 bg-[#0A192F] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-3 block"
                    >
                        Seamless Experience
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold mb-6"
                    >
                        How We Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        A hassle-free painting journey from booking to handover in 4 simple steps.
                    </motion.p>
                </div>

                {/* Content Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Interactive Steps List */}
                    <div className="flex flex-col gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeStep === index
                                    ? 'bg-white/10 border-orange-500 border-l-4'
                                    : 'bg-white/5 border-white/5 hover:bg-white/10'
                                    }`}
                                onMouseEnter={() => setActiveStep(index)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`mt-1 p-2 rounded-lg ${activeStep === index ? 'text-orange-500 bg-orange-500/20' : 'text-gray-500 bg-gray-800'}`}>
                                        {step.icon}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`text-sm font-bold opacity-50 ${activeStep === index ? 'text-orange-400' : 'text-gray-500'}`}>0{index + 1}</span>
                                            <h3 className={`text-xl font-bold ${activeStep === index ? 'text-white' : 'text-gray-300'}`}>{step.title}</h3>
                                        </div>
                                        <p className={`text-sm leading-relaxed ${activeStep === index ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Changing Image Display */}
                    <div className="relative h-[300px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeStep === index ? 1 : 0 }}
                                transition={{ duration: 0.6 }}
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${step.image})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <h3 className="text-3xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-white/80">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link to="/book" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20 inline-flex items-center gap-2">
                        Start Your Project <Smile size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Process;
