import React from 'react';

const DeleteModalFooter = ({ onCancel, onConfirm }) => {
    return (
        <div className="p-6 flex gap-4 bg-white/[0.02] border-t border-white/5">
            <button
                onClick={onCancel}
                className="flex-1 py-4 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all text-white active:scale-95"
            >
                Keep Vehicle
            </button>
            <button
                onClick={onConfirm}
                className="flex-1 py-4 rounded-2xl font-bold transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] active:scale-95 group relative overflow-hidden"
                style={{ backgroundColor: '#ef4444' }}
            >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10 text-white">Delete Forever</span>
            </button>
        </div>
    );
};

export default DeleteModalFooter;
