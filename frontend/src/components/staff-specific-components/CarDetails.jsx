import React from 'react';
import { Phone, Clock } from 'lucide-react';

export default function CarDetails({ car }) {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                    <p className="text-purple-300 text-sm">Customer</p>
                    <p className="text-white font-semibold">{car.customerName}</p>
                </div>
                <div>
                    <p className="text-purple-300 text-sm">Phone</p>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-purple-400" />
                        <p className="text-white font-semibold">{car.phoneNumber}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span className="text-purple-300 text-sm">Scheduled: {car.scheduledTime}</span>
                </div>
                <span className="text-purple-300 text-sm">Duration: {car.estimatedDuration} mins</span>
            </div>
        </>
    );
}