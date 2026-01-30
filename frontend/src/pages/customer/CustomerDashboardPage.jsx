import React, { useState } from 'react';
import ScrollVelocity from '@/components/ScrollVelocity';
import { useNavigate } from 'react-router-dom';
import CouponBanner from '@/components/CouponBanner';

const CustomerDashboardPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[var(--bg-foundation)] text-white relative">
            <div className="pt-16">
                <CouponBanner />
            </div>
            <div className="pt-8 px-6 max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--active)' }}>
                    Customer Dashboard
                </h1>

                


            </div>
        </div>
    );
};

export default CustomerDashboardPage;
