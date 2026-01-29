import React from 'react';
import FAQSection from '@/components/landingpage-components/FAQSection';
import Pricing from '@/components/landingpage-components/Pricing';
import Team from '@/components/landingpage-components/Team';
import Particles from '@/components/landingpage-components/Particles';
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
        <div className="min-h-screen bg-black">
            <div id="about" className="relative w-full min-h-screen">
                <div className="absolute inset-0 w-full z-0 overflow-hidden">
                    <Particles
                        particleColors={['#ffffff', '#3b82f6']}
                        particleCount={300}
                        particleSpread={10}
                        speed={0.1}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        alphaParticles={false}
                        disableRotation={false}
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-4">
                <Breadcrumbs items={[{ label: 'Home' }]} />
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


            <div className="bg-black py-12">
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
