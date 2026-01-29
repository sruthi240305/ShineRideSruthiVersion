import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function EmailCard({ email }) {
    const navigate = useNavigate();

    return (
        <div className="border rounded-xl p-6 transition-all" style={{ backgroundColor: 'var(--surface)', borderColor: '#a855f7' }}>
            <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-white">Email</h3>
                    </div>
                    <p className="text-white text-base mb-2">{email}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <button
                        onClick={() => navigate('/customer-dashboard/yourprofile/change-email')}
                        className="px-6 py-2.5 font-semibold rounded-lg transition-all whitespace-nowrap border-2 text-white"
                        style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}