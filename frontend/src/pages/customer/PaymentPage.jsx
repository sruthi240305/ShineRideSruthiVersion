import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import PaymentForm from '@/components/payment-components/PaymentForm';
import PaymentSummary from '@/components/payment-components/PaymentSummary';
import DeliveryAddress from '@/components/payment-components/DeliveryAddress';
import DeliveryAddresses from '@/components/payment-components/DeliveryAddresses';

export default function PaymentPage() {
    const [isChangingAddress, setIsChangingAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState({
        name: 'Tanya Sri',
        address: '31/8a Anand Illam Thiru Murugan Nagar, Vadavalli, coimbatore, COIMBATORE, TAMIL NADU, 641041, India'
    });

    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-7xl mx-auto">
                <Breadcrumbs items={[
                    { label: 'Dashboard', link: '/customer-dashboard' },
                    { label: 'Payment' }
                ]} />

                <h1 className="text-3xl font-semibold mt-6 mb-8" style={{ color: 'var(--active)' }}>Payment</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Form - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <div className="space-y-6">
                            {isChangingAddress ? (
                                <DeliveryAddresses onAddressSelect={(addr) => {
                                    if (addr) setSelectedAddress(addr);
                                    setIsChangingAddress(false);
                                }} />
                            ) : (
                                <DeliveryAddress
                                    address={selectedAddress}
                                    onChangeClick={() => setIsChangingAddress(true)}
                                />
                            )}
                            <PaymentForm />
                        </div>
                    </div>

                    {/* Payment Summary - Takes 1 column */}
                    <div className="lg:col-span-1">
                        <PaymentSummary />
                    </div>
                </div>
            </div>
        </div>
    );
}
