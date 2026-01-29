import React, { useState } from 'react';
import { Phone, Save } from 'lucide-react';

export default function ChangePhone() {
    const [phone, setPhone] = useState('+919150985987');
    const [isSaving, setIsSaving] = useState(false);

    const handleSaveChanges = () => {
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Phone saved:', phone);
            setIsSaving(false);
            alert('Mobile number updated successfully!');
        }, 1000);
    };

    return (
        <div className="min-h-screen pt-24 px-6 text-white flex items-center justify-center" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="mb-6 flex items-center gap-3">
                    <Phone className="w-7 h-7" style={{ color: 'var(--active)' }} />
                    <h1 className="text-3xl font-bold text-white">Change Mobile Number</h1>
                </div>

                {/* Main Card */}
                <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--secondary)' }}>
                    <div className="p-8">
                        {/* Info Box */}
                        <div className="rounded-lg p-5 mb-6" style={{ border: '1px solid var(--secondary)', backgroundColor: 'transparent' }}>
                            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                                If you want to change the mobile number associated with your SHINE RIDE customer account, you may do so below. Be sure to click the{' '}
                                <span className="font-bold" style={{ color: 'var(--active)' }}>Save Changes</span> button when you are done.
                            </p>
                        </div>

                        {/* Input Section */}
                        <div className="space-y-4">
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block font-semibold mb-2.5 text-sm"
                                    style={{ color: 'white' }}
                                >
                                    New mobile number
                                </label>
                                <input
                                    id="phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full max-w-md px-4 py-3 rounded-lg transition-all"
                                    style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--secondary)' }}
                                    placeholder="Enter your mobile number"
                                />
                            </div>

                            {/* Save Button */}
                            <button
                                onClick={handleSaveChanges}
                                disabled={isSaving || !phone.trim()}
                                className="mt-6 px-8 py-3 font-bold rounded-lg focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                style={{ backgroundColor: 'var(--active)', color: 'var(--active-text)', border: '1px solid var(--secondary)' }}
                            >
                                {isSaving ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        <Save className="w-5 h-5" />
                                        Save changes
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="h-1" style={{ backgroundColor: 'var(--secondary)' }}></div>
                </div>

                {/* Help Text */}
                <div className="mt-4 text-center">
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        Changes will be reflected across all your SHINE RIDE services
                    </p>
                </div>
            </div>
        </div>
    );
}
