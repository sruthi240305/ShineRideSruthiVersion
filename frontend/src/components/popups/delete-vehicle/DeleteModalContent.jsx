import React from 'react';
import { Trash2, AlertCircle } from 'lucide-react';

const DeleteModalContent = ({ vehicle }) => {
    return (
        <div className="p-8 text-center">
            {/* Warning Icon with Glow Effect */}
            <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>
                <div className="relative w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
                    <Trash2 size={40} className="text-red-500" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-black">
                    <AlertCircle size={14} className="text-white" />
                </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">Delete Vehicle?</h3>

            <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-sm text-[var(--secondary)] mb-1">Vehicle to be removed:</p>
                <p className="text-lg font-semibold text-white">
                    {vehicle?.make} {vehicle?.model}
                </p>
                {vehicle?.license && (
                    <p className="text-xs font-mono text-purple-400 mt-1">{vehicle.license}</p>
                )}
            </div>

            <p className="text-[var(--secondary)] leading-relaxed">
                This action will permanently remove this vehicle from your account. You'll need to re-add it manually later if needed.
            </p>
        </div>
    );
};

export default DeleteModalContent;
