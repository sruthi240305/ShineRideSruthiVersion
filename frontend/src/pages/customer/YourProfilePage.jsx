import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import YourOrdersCard from '@/components/CustomerAccountCards/YourOrdersCard';
import LoginSecurityCard from '@/components/CustomerAccountCards/LoginSecurityCard';
import GarageCard from '@/components/CustomerAccountCards/GarageCard';
import YourAddressesCard from '@/components/CustomerAccountCards/YourAddressesCard';

import '@/components/AccountMain.css';

export default function YourProfilePage() {
    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-7xl mx-auto">
                <Breadcrumbs items={[
                    { label: 'Dashboard', link: '/customer-dashboard' },
                    { label: 'Your Profile' }
                ]} />
                <h1 className="text-3xl font-semibold mt-6 mb-8" style={{ color: 'var(--active)' }}>Your Account</h1>

                <div className="account-grid">
                    <YourOrdersCard />
                    <LoginSecurityCard />
                    <GarageCard />
                    <YourAddressesCard />

                </div>
            </div>
        </div>
    );
}
