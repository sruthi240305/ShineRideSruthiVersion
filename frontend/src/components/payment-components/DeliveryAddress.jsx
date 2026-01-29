import React from 'react';
import { MapPin } from 'lucide-react';

const DeliveryAddress = ({ address, onChangeClick }) => {
    return (
        <div className="bg-black border border-purple-600 px-6 py-4 rounded-xl text-white">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                        <h3 className="text-base font-semibold mb-1">Delivering to {address?.name}</h3>
                        <p className="text-sm text-gray-400">
                            {address?.address}
                        </p>
                        <button className="text-sm text-purple-500 hover:text-purple-400 mt-2 transition-colors">
                            Add delivery instructions
                        </button>
                    </div>
                </div>
                <button
                    onClick={onChangeClick}
                    className="text-sm text-purple-500 hover:text-purple-400 font-medium transition-colors"
                >
                    Change
                </button>
            </div>
        </div>
    );
};

export default DeliveryAddress;