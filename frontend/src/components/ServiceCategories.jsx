import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCategories = () => {
    const services = [
        {
            id: 1,
            title: "Luxury Interior",
            subtitle: "Living & Bedroom",
            description: "Transform your indoor spaces with velvet touch, royal play, and premium matte finishes.",
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2600&auto=format&fit=crop",
            colSpan: "md:col-span-2",
            height: "h-80"
        },
        {
            id: 2,
            title: "Exterior Protection",
            subtitle: "Weather Proof",
            description: "Long-lasting protection against rain, dust, and sun with high-performance exterior emulsions.",
            image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop",
            colSpan: "md:col-span-1",
            height: "h-80"
        },
        {
            id: 3,
            title: "Texture & Stencils",
            subtitle: "Artistic Walls",
            description: "Add depth and character to your feature walls with our signature textures.",
            image: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2574&auto=format&fit=crop",
            colSpan: "md:col-span-1",
            height: "h-80"
        },
        {
            id: 4,
            title: "Waterproofing",
            subtitle: "Leakage Solutions",
            description: "Advanced nanotechnology waterproofing for roof and bathroom leakage.",
            image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&w=2670&auto=format&fit=crop",
            colSpan: "md:col-span-2",
            height: "h-80"
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <span className="text-orange-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0A192F] leading-tight">
                            Complete Home <br /> Painting Services
                        </h2>
                    </div>
                    <Link to="/services" className="hidden md:flex items-center gap-2 group text-[#0A192F] font-semibold border-b-2 border-[#0A192F] pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                        View All Services <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer col-span-1 ${service.colSpan} h-40 md:${service.height}`}
                        >
                            {/* Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-opacity" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 text-white transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="bg-orange-600 text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full mb-1 md:mb-3 inline-block uppercase tracking-wide">
                                    {service.subtitle}
                                </span>
                                <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-2 group-hover:text-orange-100 transition-colors">{service.title}</h3>
                                <p className="text-gray-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 hidden md:block">
                                    {service.description}
                                </p>

                                <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-300 md:translate-x-4 group-hover:translate-x-0">
                                    <div className="bg-white text-black p-1.5 md:p-3 rounded-full hover:bg-orange-500 hover:text-white">
                                        <ArrowUpRight size={14} className="md:w-[20px] md:h-[20px]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="text-[#0A192F] font-semibold border-b-2 border-[#0A192F] pb-1">VIEW ALL SERVICES</button>
                </div>
            </div>
        </section>
    );
};

export default ServiceCategories;
