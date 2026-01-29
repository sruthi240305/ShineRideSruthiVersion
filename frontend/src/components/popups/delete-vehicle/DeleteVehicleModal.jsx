import React from 'react';
import DeleteModalContent from './DeleteModalContent';
import DeleteModalFooter from './DeleteModalFooter';
import { X } from 'lucide-react';

const DeleteVehicleModal = ({ isOpen, onClose, onConfirm, vehicle }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-300"
            onClick={handleOverlayClick}
        >
            <div
                className="w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border animate-in zoom-in-95 duration-200"
                style={{ backgroundColor: '#000000', borderColor: 'var(--secondary)' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    <h2 className="text-xl font-bold text-white">Confirmation Required</h2>
                    <button
                        onClick={onClose}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors text-white"
                        aria-label="Close modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Content Section */}
                <DeleteModalContent vehicle={vehicle} />

                {/* Footer Section */}
                <DeleteModalFooter
                    onCancel={onClose}
                    onConfirm={() => onConfirm(vehicle?.id)}
                />
            </div>
        </div>
    );
};

export default DeleteVehicleModal;
