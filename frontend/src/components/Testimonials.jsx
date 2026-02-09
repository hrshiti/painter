import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: "Ahmed Al-Sayed",
            location: "Dubai Marina",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=2574&auto=format&fit=crop",
            rating: 5,
            text: "Al-Fykra transformed our 1BR apartment completely! The painters were professional, on time, and the dust-free process was a game changer. Highly recommended!"
        },
        {
            id: 2,
            name: "Sarah Williams",
            location: "Palm Jumeirah",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
            rating: 5,
            text: "I loved the color consultation service. They helped me choose a pastel theme that looks absolutely stunning. The finishing is flawless."
        },
        {
            id: 3,
            name: "Mohammed Bin Tariq",
            location: "Downtown Dubai",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
            rating: 4,
            text: "Great value for money. The transparent pricing plan meant no hidden shocks later. The team finished the job 2 days ahead of schedule."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-extrabold text-[#0A192F] mb-6"
                    >
                        Stories of Happy Homes
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative group"
                        >
                            <div className="absolute top-8 right-8 text-orange-100 group-hover:text-orange-200 transition-colors">
                                <Quote size={48} fill="currentColor" />
                            </div>

                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-orange-50"
                                />
                                <div>
                                    <h4 className="font-bold text-lg text-[#0A192F]">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.location}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4 text-orange-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-gray-300"} />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed relative z-10">
                                "{review.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
