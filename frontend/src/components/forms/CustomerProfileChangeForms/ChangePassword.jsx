import React, { useState } from 'react';
import { Lock, Save } from 'lucide-react';

export default function ChangePassword() {
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPasswordData(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = () => {
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert("New passwords do not match!");
            return;
        }
        setIsSaving(true);
        // Simulate API call
        setTimeout(() => {
            console.log('Password saved');
            setIsSaving(false);
            alert('Password updated successfully!');
        }, 1000);
    };

    return (
        <div className="min-h-screen pt-24 px-6 text-white flex items-center justify-center" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="w-full max-w-2xl">
                {/* Header */}
                <div className="mb-6 flex items-center gap-3">
                    <Lock className="w-7 h-7" style={{ color: 'var(--active)' }} />
                    <h1 className="text-3xl font-bold text-white">Change Password</h1>
                </div>

                {/* Main Card */}
                <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--secondary)' }}>
                    <div className="p-8">
                        {/* Info Box */}
                        <div className="rounded-lg p-5 mb-6" style={{ border: '1px solid var(--secondary)', backgroundColor: 'transparent' }}>
                            <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                                To change your password, enter your current password and your new password twice for confirmation. Be sure to click the{' '}
                                <span className="font-bold" style={{ color: 'var(--active)' }}>Save Changes</span> button when you are done.
                            </p>
                        </div>

                        {/* Input Section */}
                        <div className="space-y-4">
                            <div>
                                <label className="block font-semibold mb-2.5 text-sm" style={{ color: 'white' }}>Current password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={passwordData.currentPassword}
                                    onChange={handleChange}
                                    className="w-full max-w-md px-4 py-3 rounded-lg transition-all"
                                    style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--secondary)' }}
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2.5 text-sm" style={{ color: 'white' }}>New password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handleChange}
                                    className="w-full max-w-md px-4 py-3 rounded-lg transition-all"
                                    style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--secondary)' }}
                                />
                            </div>

                            <div>
                                <label className="block font-semibold mb-2.5 text-sm" style={{ color: 'white' }}>Confirm new password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full max-w-md px-4 py-3 rounded-lg transition-all"
                                    style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid var(--secondary)' }}
                                />
                            </div>

                            <button
                                onClick={handleSaveChanges}
                                disabled={isSaving || !passwordData.newPassword.trim()}
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
