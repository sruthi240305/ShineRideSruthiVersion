import React from 'react';
import { Phone } from 'lucide-react';
import AddressCardActions from './AddressCardActions';

export default function AddressCard({ address, onEdit, onRemove, onSetDefault, onAddInstructions, isHighlighted }) {
    return (
        <div
            className={`rounded-2xl relative transition-all ${isHighlighted ? 'highlight-pulse' : ''}`}
            style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid #a855f7',
                padding: '24px'
            }}
        >
            {address.isDefault && (
                <>
                    <div className="mb-2 flex items-center gap-2">
                        <span className="text-xs font-semibold text-white">Default:</span>
                        <span className="text-xs font-bold text-white">SHINE RIDE</span>
                    </div>
                    <div className="h-[1px] w-full mb-4" style={{ backgroundColor: '#a855f7', opacity: 0.3 }}></div>
                </>
            )}

            <div className="text-xl font-semibold mb-4 text-white">
                {address.name}
            </div>

            <div className="text-sm mb-5 text-white" style={{ lineHeight: 1.7 }}>
                {address.addressLine1}<br />
                {address.addressLine2}<br />
                {address.city}, {address.state} {address.pincode}<br />
                {address.country}
            </div>

            <div className="text-sm mb-6 flex items-center gap-2 text-white">
                <Phone size={18} />
                Phone number: {address.phone}
            </div>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    onAddInstructions(address);
                }}
                className="text-sm mb-5 hover:underline text-white"
                style={{ background: 'transparent', border: 'none' }}
            >
                Add delivery instructions
            </button>

            <AddressCardActions
                address={address}
                onEdit={onEdit}
                onRemove={onRemove}
                onSetDefault={onSetDefault}
            />
        </div>
    );
}