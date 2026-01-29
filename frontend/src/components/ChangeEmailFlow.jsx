import React, { useState } from 'react';
import { Mail, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';

export default function ChangeEmailFlow() {
  const [step, setStep] = useState(1);
  const [currentEmail] = useState('sruthisrinivasan15@gmail.com');
  const [newEmail, setNewEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState('');

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

    // Proceed to OTP step
    setIsLoading(true);
    setTimeout(() => {
      setVerificationEmail(newEmail);
      setStep(2);
      setIsLoading(false);
    }, 1000);
  };

  const handleVerifyOTP = () => {
    if (!otp.trim()) {
      setError('Please enter the OTP');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Email address verified successfully!');
      // Reset flow
      setStep(1);
      setNewEmail('');
      setOtp('');
      setError('');
    }, 1000);
  };

  const handleResendOTP = () => {
    setError('');
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('OTP has been resent to your email');
    }, 1000);
  };

  const handleBack = () => {
    setStep(1);
    setOtp('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-foundation)] p-6 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Step 1: Change Email */}
        {step === 1 && (
          <div className="bg-[var(--surface)] border border-[var(--secondary)] rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-[var(--surface)]">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-6 h-6 text-white" />
                <span className="text-[var(--muted)] text-sm font-semibold">Step 1 of 2</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Change your email address</h2>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Current Email */}
              <div>
                <label className="block text-[var(--secondary)] font-semibold mb-2">
                  Current email address:
                </label>
                <p className="text-white">{currentEmail}</p>
              </div>

              {/* New Email Input */}
              <div>
                <label className="block text-[var(--secondary)] font-semibold mb-2">
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
                className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
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
        )}

        {/* Step 2: Verify OTP */}
        {step === 2 && (
          <div className="bg-[var(--surface)] border border-[var(--secondary)] rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="px-6 py-4 bg-[var(--surface)]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-white" />
                  <span className="text-[var(--muted)] text-sm font-semibold">Step 2 of 2</span>
                </div>
                <button
                  onClick={handleBack}
                  className="flex items-center gap-1 text-[var(--muted)] hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span className="text-sm">Back</span>
                </button>
              </div>
              <h2 className="text-2xl font-bold text-white">Verify your email address</h2>
            </div>

            {/* Content */}
            <div className="p-6 space-y-5">
              {/* Instructions */}
              <div className="bg-[var(--surface)] border border-[var(--secondary)] rounded-lg p-4">
                <p className="text-white leading-relaxed">
                  Enter the One-Time Password (OTP) we sent you.
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-white font-semibold">{verificationEmail}</p>
                  <button
                    onClick={handleBack}
                    className="text-[var(--primary)] hover:opacity-90 text-sm underline"
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* OTP Input */}
              <div>
                <label htmlFor="otp" className="block text-[var(--secondary)] font-semibold mb-2">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => {
                    setOtp(e.target.value);
                    setError('');
                  }}
                  maxLength={6}
                  className={`w-full px-4 py-3 bg-gray-800 border-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                    error 
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                      : 'border-[var(--secondary)] focus:ring-[var(--primary)] focus:border-[var(--primary)]'
                  }`}
                  placeholder="Enter 6-digit OTP"
                />
                
                {error && (
                  <div className="mt-3 flex items-start gap-2 bg-red-900/30 border border-red-500/50 rounded-lg p-3">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 text-sm">{error}</p>
                  </div>
                )}
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerifyOTP}
                disabled={isLoading}
                className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 focus:outline-none focus:ring-4 focus:ring-black/10 transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    Verifying...
                  </div>
                ) : (
                  'Verify email address'
                )}
              </button>

              {/* Resend OTP Link */}
              <div className="text-center">
                <button
                  onClick={handleResendOTP}
                  disabled={isLoading}
                  className="text-[var(--primary)] hover:opacity-90 font-semibold underline disabled:opacity-50"
                >
                  Resend OTP
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Help Text */}
        <div className="mt-4 text-center">
          <p className="text-[var(--muted)] text-sm">
            Having trouble? Contact customer support
          </p>
        </div>
      </div>
    </div>
  );
}