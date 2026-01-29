import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AddressTypeSelector from './AddressTypeSelector';
import WeekendDeliverySection from './WeekendDeliverySection';
import InstructionsSection from './InstructionsSection';

const DeliveryInstructionsModal = ({ isOpen, onClose, onSave, userName, address }) => {
    const [addressType, setAddressType] = useState('House');
    const [weekendDelivery, setWeekendDelivery] = useState({ saturday: 'No', sunday: 'No' });
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ addressType, weekendDelivery, instructions });
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/80 p-4 pt-24"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <div
                className="w-full max-w-lg rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200 delivery-instructions-modal"
                style={{ backgroundColor: '#000000', border: '1px solid var(--popup-accent)' }}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <h2 className="text-xl font-bold text-white">Add delivery instructions</h2>
                    <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {/* Address Info */}
                    <div>
                        <h3 className="font-bold text-lg text-white">{userName || 'Tanya Sri'}</h3>
                        <p className="text-sm opacity-80 text-white">
                            {address || '31/8a Anand Illam Thiru Murugan Nagar, Vadavalli, coimbatore, COIMBATORE, TAMIL NADU, 641041, IN'}
                        </p>
                    </div>

                    <AddressTypeSelector addressType={addressType} setAddressType={setAddressType} />
                    <WeekendDeliverySection weekendDelivery={weekendDelivery} setWeekendDelivery={setWeekendDelivery} />
                    <InstructionsSection instructions={instructions} setInstructions={setInstructions} />

                    <p className="text-xs italic text-center opacity-60 text-white">
                        Your instructions help us deliver your packages to your expectations and will be used when possible.
                    </p>
                </div>

                {/* Footer */}
                <div className="p-4 flex justify-end bg-white/5 border-t border-white/10">
                    <button
                        onClick={handleSave}
                        className="px-6 py-2 rounded-full font-bold shadow-lg"
                        style={{ backgroundColor: 'white', color: 'black' }}
                    >
                        Save instructions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeliveryInstructionsModal;