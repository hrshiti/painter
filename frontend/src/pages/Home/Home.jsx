import React from 'react';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import ServiceCategories from '../../components/ServiceCategories';
import Process from '../../components/Process';
import Testimonials from '../../components/Testimonials';
import CtaBanner from '../../components/CtaBanner';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <ServiceCategories />
            <Process />
            <Testimonials />
            <CtaBanner />
            <Footer />
        </div>
    );
};

export default Home;
