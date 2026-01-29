import React from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import EditVehicleForm from '@/components/forms/VehicleFroms/EditVehicleForm';

const EditVehiclePage = () => {
    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'black' }}>
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="w-full">
                    <Breadcrumbs items={[
                        { label: 'Dashboard', link: '/customer-dashboard' },
                        { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                        { label: 'Garage', link: '/customer-dashboard/yourprofile/garage' },
                        { label: 'Edit Vehicle' }
                    ]} />
                </div>

                <div className="mt-16 mb-12 text-center">
                    <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--active)' }}>Edit Vehicle</h1>
                    <p className="text-gray-400">Update your vehicle details to maintain accurate records.</p>
                </div>

                <div className="w-full flex justify-center">
                    <div className="w-full max-w-xl">
                        <EditVehicleForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditVehiclePage;
