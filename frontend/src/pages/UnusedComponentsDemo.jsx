import React from 'react';
import AddVehicleCard from '@/components/AddVehicleCard';
import ChangeEmailFlow from '@/components/ChangeEmailFlow';
import Checkout from '@/components/Checkout';
import CustomerSupportForm from '@/components/forms/CustomerSupportForm';
import ScrollVelocity from '@/components/ScrollVelocity';

export default function UnusedComponentsDemo() {
    return (
        <div className="min-h-screen bg-[var(--bg-foundation)] p-10 text-white space-y-16">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl font-bold text-white mb-4">Unused Components Gallery</h1>
                <p className="text-[var(--secondary)]">
                    This page displays components that appear to be currently unused in the main application flow.
                </p>
            </div>

            <Section title="AddVehicleCard" path="src/components/AddVehicleCard.jsx">
                <div className="flex justify-center">
                    <div className="max-w-md w-full">
                        <AddVehicleCard />
                    </div>
                </div>
            </Section>

            <Section title="ScrollVelocity" path="src/components/ScrollVelocity.jsx">
                <div className="py-10 border border-[#27272a] rounded-xl overflow-hidden">
                    <ScrollVelocity
                        texts={['React Bits', 'Scroll Down']}
                        velocity={50}
                        className="text-4xl font-bold"
                    />
                </div>
            </Section>

            <Section title="Checkout" path="src/components/Checkout.jsx">
                <div className="max-w-4xl mx-auto">
                    <Checkout />
                </div>
            </Section>

            <Section title="CustomerSupportForm" path="src/components/forms/CustomerSupportForm.jsx">
                <div className="max-w-2xl mx-auto">
                    <CustomerSupportForm />
                </div>
            </Section>

            <Section title="ChangeEmailFlow" path="src/components/ChangeEmailFlow.jsx">
                <div className="max-w-xl mx-auto">
                    <ChangeEmailFlow />
                </div>
            </Section>
        </div>
    );
}

function Section({ title, path, children }) {
    return (
        <div className="border border-[#27272a] rounded-3xl p-8 bg-[#121212]">
            <div className="mb-8 border-b border-[#27272a] pb-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    {title}
                    <span className="text-xs font-normal text-[#a1a1aa] bg-[#27272a] px-2 py-1 rounded-md font-mono">
                        {path}
                    </span>
                </h2>
            </div>
            <div className="bg-black/50 p-6 rounded-2xl border border-[#27272a]/50 border-dashed">
                {children}
            </div>
        </div>
    );
}
