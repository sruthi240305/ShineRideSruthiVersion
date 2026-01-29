import React from 'react';
import CouponBanner from '@/components/CouponBanner';

const CustomerDashboard = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-foundation)]">
            <div className="pt-16">
                <CouponBanner />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-6 px-0 max-w-[1600px] mx-auto">
            </div>
            
        </div>
    );
};

export default CustomerDashboard;
