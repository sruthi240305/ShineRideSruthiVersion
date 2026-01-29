import React, { useState } from 'react';
import { Mail, AlertCircle } from 'lucide-react';

export default function ChangeEmailAddress() {
  const [currentEmail] = useState('sruthisrinivasan15@gmail.com');
  const [newEmail, setNewEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeEmail = () => {
    setError('');
    
    // Validation
    if (!newEmail.trim()) {
      setError('Please enter a new email address');
      return;
    }
    
    if (newEmail === currentEmail) {
      setError('You cannot use the email address you have entered, because it is the same as your current email address.');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    // Proceed with email change
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Email change request submitted successfully!');
      setNewEmail('');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-foundation)] p-6 flex items-center justify-center">
      <div className="w-full max-w-xl">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Mail className="w-7 h-7 text-white" />
          <h1 className="text-3xl font-bold text-white">Change your email address</h1>
        </div>

        {/* Main Card */}
          <div className="bg-[var(--surface)] border border-[var(--secondary)] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 space-y-6">
            {/* Current Email */}
            <div>
              <label className="block text-[var(--secondary)] font-semibold mb-2">
                Current email address:
              </label>
              <p className="text-white text-lg">{currentEmail}</p>
            </div>

            {/* New Email Input */}
            <div>
              <label htmlFor="newEmail" className="block text-purple-200 font-semibold mb-2">
                New email address
              </label>
              <input
                id="newEmail"
                type="email"
                value={newEmail}
                onChange={(e) => {
                  setNewEmail(e.target.value);
                  setError('');
                }}
                className={`w-full px-4 py-3 bg-gray-800 border-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                  error 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-[var(--secondary)] focus:ring-[var(--primary)] focus:border-[var(--primary)]'
                }`}
                placeholder="Enter new email address"
              />
              
              {/* Error Message */}
              {error && (
                <div className="mt-3 flex items-start gap-2 bg-red-900/30 border border-red-500/50 rounded-lg p-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              onClick={handleChangeEmail}
              disabled={isLoading}
              className="w-full py-3.5 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                'Change email address'
              )}
            </button>
          </div>


        </div>

        {/* Help Text */}
        <div className="mt-4 text-center">
          <p className="text-[var(--muted)] text-sm">
            A verification code will be sent to your new email address
          </p>
        </div>
      </div>
    </div>
  );
}
