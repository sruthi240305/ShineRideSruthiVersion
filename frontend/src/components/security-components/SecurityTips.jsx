import React from 'react';
import { Shield } from 'lucide-react';

export default function SecurityTips() {
    return (
        <div className="mt-8 p-6 bg-[var(--surface)] border rounded-xl" style={{ borderColor: '#a855f7' }}>
            <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div>
                    <h3 className="text-white font-semibold mb-2">Security Tips</h3>
                    <ul className="text-gray-400 text-sm space-y-1 list-disc list-inside">
                        <li>Enable 2-step verification for enhanced security</li>
                        <li>Use a strong, unique password for your account</li>
                        <li>Set up a passkey for quick and secure sign-in</li>
                        <li>Keep your mobile number up to date for account recovery</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}