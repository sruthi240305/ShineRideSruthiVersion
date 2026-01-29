import React from 'react';
import { X, AlertCircle } from 'lucide-react';

const DefaultAddressEdit = ({ isOpen, onClose, address, onChooseNewAddress }) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[110] flex items-start justify-center bg-black/80 backdrop-blur-sm p-4 pt-24"
      onClick={handleOverlayClick}
    >
      <div
        className="w-full max-w-md rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
        style={{ backgroundColor: '#000000', border: '1px solid var(--secondary)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
          <h2 className="text-xl font-bold text-white">Edit failed</h2>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors text-white">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Address Details */}
          <div className="text-sm space-y-1 text-white opacity-90">
            <p className="font-bold text-lg mb-2">{address?.name}</p>
            <p>{address?.addressLine1}</p>
            <p>{address?.addressLine2}</p>
            <p>{address?.city}, {address?.state} {address?.pincode}</p>
            <p>{address?.country}</p>
            <p>Phone number: {address?.phone}</p>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <AlertCircle className="text-red-500 w-6 h-6" />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#ff4d4d' }}>
                This address is used as your residential address for digital purchases. To edit this address, first set a different residential address for your digital purchases.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 flex flex-col sm:flex-row justify-end gap-3 bg-white/5 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-white"
          >
            Cancel
          </button>
          <button
            onClick={onChooseNewAddress}
            className="px-6 py-2.5 rounded-full font-bold shadow-lg transform hover:scale-105 active:scale-95 transition-all"
            style={{ backgroundColor: 'white', color: 'black' }}
          >
            Choose new address
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultAddressEdit;