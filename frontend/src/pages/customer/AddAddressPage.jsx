import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AddressForm from '@/components/forms/AddressForm';

const AddAddressPage = () => {
    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'black' }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full">
                    <Breadcrumbs items={[
                        { label: 'Dashboard', link: '/customer-dashboard' },
                        { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                        { label: 'Your Addresses', link: '/customer-dashboard/yourprofile/addresses' },
                        { label: 'Add Address' }
                    ]} />
                </div>

                <div className="mt-16 mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--active)' }}>Add a new address</h1>
                    <p className="text-gray-400">Please provide the details for your new delivery address.</p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-xl">
                        <AddressForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAddressPage;
