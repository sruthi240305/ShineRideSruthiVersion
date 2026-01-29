import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import AddVehicleForm from '@/components/forms/VehicleFroms/AddVehicleForm';

const AddVehiclePage = () => {
    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'black' }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full">
                    <Breadcrumbs items={[
                        { label: 'Dashboard', link: '/customer-dashboard' },
                        { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                        { label: 'Garage', link: '/customer-dashboard/yourprofile/garage' },
                        { label: 'Add Vehicle' }
                    ]} />
                </div>

                <div className="mt-16 mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--active)' }}>Add a New Vehicle</h1>
                    <p className="text-gray-400">Complete the form below to register your vehicle for premium services.</p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-xl">
                        <AddVehicleForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVehiclePage;
