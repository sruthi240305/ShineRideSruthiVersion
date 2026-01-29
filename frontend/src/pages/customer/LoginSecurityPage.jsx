import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import NameCard from '@/components/security-components/NameCard';
import EmailCard from '@/components/security-components/EmailCard';
import PhoneCard from '@/components/security-components/PhoneCard';
import PasswordCard from '@/components/security-components/PasswordCard';
import SecurityTips from '@/components/security-components/SecurityTips';

export default function LoginSecurityPage() {
    const [settings] = useState({
        name: 'Sruthi',
        email: 'sruthisrinivasan15@gmail.com',
        phone: '+919150985987',
        password: '••••••••••'
    });

    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-4xl mx-auto">
                <Breadcrumbs items={[
                    { label: 'Dashboard', link: '/customer-dashboard' },
                    { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                    { label: 'Login & Security' }
                ]} />

                <div className="mb-8 flex items-center gap-3 mt-6">
                    <Shield className="w-8 h-8 text-white" />
                    <h1 className="text-3xl font-semibold" style={{ color: 'var(--active)' }}>Login and Security</h1>
                </div>

                <div className="space-y-4">
                    <NameCard name={settings.name} />
                    <EmailCard email={settings.email} />
                    <PhoneCard phone={settings.phone} />
                    <PasswordCard password={settings.password} />
                </div>

                <SecurityTips />
            </div>
        </div>
    );
}
