import React from 'react';
import { Minus } from 'lucide-react';

const DeleteActionButton = ({ label, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="h-40 border-2 border-dashed border-[var(--secondary)] rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:bg-[var(--hover)] transition-colors group"
        >
            <div className="w-12 h-12 rounded-full bg-[var(--surface)] flex items-center justify-center mb-3 transition-colors text-[var(--active)]">
                <Minus size={24} />
            </div>
            <span className="text-sm font-medium text-[var(--secondary)] group-hover:text-white">{label}</span>
        </div>
    );
};

export default DeleteActionButton;