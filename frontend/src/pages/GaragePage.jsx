import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import TradesTable from '@/components/TradesTable';
import AddVehicleCard from '@/components/AddVehicleCard';
import DeleteVehicleModal from '@/components/popups/delete-vehicle/DeleteVehicleModal';

const initialVehicles = [
    { id: 1, make: 'Toyota', model: 'Camry', year: '2022', license: 'KA-01-AB-1234', color: 'Silver' },
    { id: 2, make: 'Honda', model: 'City', year: '2021', license: 'KA-05-XY-9876', color: 'White' },
];

const GaragePage = () => {
    const navigate = useNavigate();
    const [vehicles, setVehicles] = useState(initialVehicles);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [vehicleToDelete, setVehicleToDelete] = useState(null);

    React.useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('temp_vehicles') || '[]');
        if (stored.length > 0) {
            setVehicles([...initialVehicles, ...stored]);
        }
    }, []);

    const handleAddVehicle = () => {
        navigate("/customer-dashboard/yourprofile/garage/add-vehicle");
    };

    const handleEditVehicle = (vehicle) => {
        navigate("/customer-dashboard/yourprofile/garage/edit-vehicle", { state: { vehicle } });
    };

    const triggerDelete = (vehicle) => {
        setVehicleToDelete(vehicle);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = (id) => {
        const updatedVehicles = vehicles.filter(v => v.id !== id);
        setVehicles(updatedVehicles);

        // Also update localStorage for temporary vehicles
        const stored = JSON.parse(localStorage.getItem('temp_vehicles') || '[]');
        const updatedStored = stored.filter(v => v.id !== id);
        localStorage.setItem('temp_vehicles', JSON.stringify(updatedStored));

        setIsDeleteModalOpen(false);
        setVehicleToDelete(null);
    };

    return (
        <div className="min-h-screen pt-24 px-6 max-w-7xl mx-auto text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <Breadcrumbs items={[
                { label: 'Dashboard', link: '/customer-dashboard' },
                { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                { label: 'Garage' }
            ]} />

            <div className="mt-6 flex justify-center">
                <AddVehicleCard onClick={handleAddVehicle} />
            </div>

            <div className="mt-10">
                <TradesTable
                    hideHeader
                    hidePagination
                    data={vehicles.map(v => ({
                        id: v.id,
                        make: v.make,
                        model: v.model,
                        license: v.license || v.amount || 'KA-XX-XXXX',
                    }))}
                    columns={[
                        {
                            header: 'Make',
                            render: (row) => (
                                <p className="font-semibold text-white">{row.make}</p>
                            )
                        },
                        {
                            header: 'Model',
                            render: (row) => (
                                <p className="text-white opacity-80">{row.model}</p>
                            )
                        },
                        {
                            header: 'License Plate',
                            render: (row) => (
                                <p className="text-[var(--secondary)]">{row.license}</p>
                            )
                        },
                        {
                            header: 'Actions',
                            render: (row) => (
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => handleEditVehicle(row)}
                                        className="text-sm font-medium hover:underline"
                                        style={{ color: 'var(--active)' }}
                                    >
                                        Edit
                                    </button>
                                    <span className="opacity-20 text-white">|</span>
                                    <button
                                        onClick={() => triggerDelete(row)}
                                        className="text-sm font-medium hover:underline text-red-500"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )
                        }
                    ]}
                />
            </div>

            <DeleteVehicleModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                vehicle={vehicleToDelete}
            />
        </div>
    );
};

export default GaragePage;
