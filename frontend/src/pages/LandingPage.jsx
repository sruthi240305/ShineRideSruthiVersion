import React from 'react';
import FAQSection from '@/components/landingpage-components/FAQSection';
import Pricing from '@/components/landingpage-components/Pricing';
import Team from '@/components/landingpage-components/Team';
import heroBg from '@/assets/hero-bg.png';
import Footer from '@/components/landingpage-components/Footer';
import StatsSection from '@/components/landingpage-components/StatsSection';
import Divider from '@/components/landingpage-components/Divider';
import Breadcrumbs from '@/components/Breadcrumbs';

import { RatingBadge } from '@/components/foundations/rating-badge';
const ratings = [
    {
        title: "Trusted by 5,000+ Users",
        subtitle: "Leading Waste Management Platform",
        rating: 5,
    },
    {
        title: "4.9/5 Average Rating",
        subtitle: "Across 1,000+ reviews",
        rating: 5,
    },
    {
        title: "99.9% Uptime",
        subtitle: "Reliable and scalable",
        rating: 5,
    },
];
const LandingPage = () => {
    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F6CE71' }}>
            <div id="about" className="relative w-full min-h-screen flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                    <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F6CE71]"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight" style={{ color: '#C40C0C', fontFamily: 'Satisfy, cursive' }}>
                        Revolutionize Your Cleanup
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-medium" style={{ color: '#1a1a1a' }}>
                        The most advanced platform for sustainable waste management.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="px-8 py-4 text-lg font-bold rounded-full shadow-lg transform transition hover:scale-105"
                            style={{ backgroundColor: '#C40C0C', color: '#F6CE71' }}>
                            Get Started
                        </button>
                        <button className="px-8 py-4 text-lg font-bold rounded-full shadow-lg transform transition hover:scale-105"
                            style={{ backgroundColor: '#FF6500', color: '#1a1a1a' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>



            {/* IMPACT */}
            <Divider label="STATISTICS" />
            <div id="impact">
                <StatsSection />
            </div>

            {/* PRICING */}
            <Divider label="PRICING" />
            <div id="pricing">
                <Pricing />
            </div>

            {/* TEAM */}
            <Divider label="OUR TEAM" />
            <div id="team">
                <Team title="Leadership team" />
            </div>

            {/* FAQ */}
            <Divider label="FAQ" />
            <div id="faq">
                <FAQSection />
            </div>


            <div className="py-12" style={{ backgroundColor: '#F6CE71' }}>
                <div className="flex flex-row flex-wrap items-center justify-center gap-8 mb-12 max-w-7xl mx-auto px-6">
                    {ratings.map((item, index) => (
                        <RatingBadge
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>

            <Divider />
            <Footer />
        </div>
    );
};

export default LandingPage;
