import React from 'react';
import { Plus } from 'lucide-react';

export default function AddAddressCard({ onClick }) {
    return (
        <div
            onClick={onClick}
            className="rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-colors"
            style={{ border: '2px dashed var(--secondary)', minHeight: '280px', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--hover)';
                e.currentTarget.style.borderColor = 'var(--active)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'var(--secondary)';
            }}
        >
            <div className="mb-3" style={{ color: 'var(--active)', lineHeight: 1 }}>
                <Plus size={56} />
            </div>
            <div className="text-lg font-medium" style={{ color: 'var(--secondary)' }}>Add address</div>
        </div>
    );
}
