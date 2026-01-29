import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleFormFields from './VehicleFormFields';

export default function AddVehicleForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        make: '',
        model: '',
        licensePlate: '',
        isDefault: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const vehicles = JSON.parse(localStorage.getItem('temp_vehicles') || '[]');
        const newVehicle = {
            id: Date.now(),
            make: formData.make,
            model: formData.model,
            license: formData.licensePlate,
            year: '2026',
            color: 'N/A'
        };
        localStorage.setItem('temp_vehicles', JSON.stringify([...vehicles, newVehicle]));
        navigate('/customer-dashboard/yourprofile/garage');
    };

    return (
        <div className="w-full flex flex-col items-center">
            <form onSubmit={handleSubmit} className="space-y-8 w-full max-w-lg">
                <VehicleFormFields formData={formData} onChange={handleChange} />

                <div className="flex justify-center pt-6">
                    <button
                        type="submit"
                        className="w-full py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--active)]/20"
                        style={{ backgroundColor: 'var(--active)', color: 'var(--active-text)' }}
                    >
                        Add Vehicle
                    </button>
                </div>
            </form>
        </div>
    );
}