import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditAddressForm from '@/components/forms/EditAddressForm';

const EditAddressPage = () => {
    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'black' }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full">
                    <Breadcrumbs items={[
                        { label: 'Dashboard', link: '/customer-dashboard' },
                        { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                        { label: 'Your Addresses', link: '/customer-dashboard/yourprofile/addresses' },
                        { label: 'Edit Address' }
                    ]} />
                </div>

                <div className="mt-16 mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--active)' }}>Edit address</h1>
                    <p className="text-gray-400">Update your delivery address details below.</p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-xl">
                        <EditAddressForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditAddressPage;
