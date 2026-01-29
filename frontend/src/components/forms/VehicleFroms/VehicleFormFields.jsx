import React from 'react';
import { CarFront, Settings2, Hash } from 'lucide-react';

export default function VehicleFormFields({ formData, onChange }) {
    return (
        <div className="space-y-5">
            <div>
                <label className="block text-sm font-medium mb-2.5 opacity-90 text-white">Vehicle Make</label>
                <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                        <CarFront size={19} className="text-white" />
                    </div>
                    <input
                        type="text"
                        name="make"
                        value={formData.make}
                        onChange={onChange}
                        placeholder="e.g. Toyota, Honda, Tesla"
                        className="w-full pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                        style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--secondary)' }}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2.5 opacity-90 text-white">Vehicle Model</label>
                <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                        <Settings2 size={19} className="text-white" />
                    </div>
                    <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={onChange}
                        placeholder="e.g. Camry, Civic, Model 3"
                        className="w-full pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                        style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--secondary)' }}
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2.5 opacity-90 text-white">License Plate</label>
                <div className="relative group">
                    <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
                        <Hash size={19} className="text-white" />
                    </div>
                    <input
                        type="text"
                        name="licensePlate"
                        value={formData.licensePlate}
                        onChange={onChange}
                        placeholder="e.g. KA-01-AB-1234"
                        className="w-full pl-11 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/20 text-white"
                        style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid var(--secondary)' }}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
                <input
                    type="checkbox"
                    name="isDefault"
                    checked={formData.isDefault}
                    onChange={onChange}
                    className="w-4 h-4 cursor-pointer"
                    style={{ accentColor: 'var(--active)' }}
                />
                <label className="text-sm font-medium cursor-pointer text-white">Set as primary vehicle</label>
            </div>
        </div>
    );
}