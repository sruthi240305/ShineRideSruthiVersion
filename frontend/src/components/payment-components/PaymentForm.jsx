import React, { useState } from 'react';
import { CreditCard } from 'lucide-react';

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const [name, setName] = useState('');

    const formatCardNumber = (value) => {
        const cleaned = value.replace(/\s/g, '');
        const formatted = cleaned.match(/.{1,4}/g);
        return formatted ? formatted.join(' ') : cleaned;
    };

    const formatExpiry = (value) => {
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
            return cleaned.substring(0, 2) + ' / ' + cleaned.substring(2, 4);
        }
        return cleaned;
    };

    return (
        <div className="w-full">
            <style>{`
        * {
          box-sizing: border-box;
        }

        .payment-input {
          background: #000;
          border: 1px solid #9333ea;
          color: #fff;
          transition: all 0.2s ease;
        }

        .payment-input:focus {
          outline: none;
          border-color: #a855f7;
        }

        .payment-input::placeholder {
          color: #555;
        }

        .payment-button {
          background: #fff;
          color: #000;
          transition: all 0.2s ease;
        }

        .payment-button:hover {
          background: #f3f4f6;
        }
      `}</style>

            <div className="w-full max-w-3xl bg-black border border-purple-600 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-8">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-semibold text-white">Payment Details</h2>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="col-span-2">
                        <label className="block text-sm text-white mb-2">Full Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="payment-input w-full px-4 py-3 rounded-lg"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Card Number */}
                    <div className="col-span-2">
                        <label className="block text-sm text-white mb-2">Card Number</label>
                        <input
                            type="text"
                            value={cardNumber}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\s/g, '');
                                if (value.length <= 16 && /^\d*$/.test(value)) {
                                    setCardNumber(formatCardNumber(value));
                                }
                            }}
                            className="payment-input w-full px-4 py-3 rounded-lg"
                            placeholder="1234 5678 9012 3456"
                            maxLength="19"
                        />
                    </div>

                    {/* CVV */}
                    <div>
                        <label className="block text-sm text-white mb-2">CVV</label>
                        <input
                            type="text"
                            value={cvv}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= 3 && /^\d*$/.test(value)) {
                                    setCvv(value);
                                }
                            }}
                            className="payment-input w-full px-4 py-3 rounded-lg"
                            placeholder="123"
                            maxLength="3"
                        />
                    </div>

                    {/* Expiry */}
                    <div>
                        <label className="block text-sm text-white mb-2">Expiry</label>
                        <input
                            type="text"
                            value={expiry}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '');
                                if (value.length <= 4) {
                                    setExpiry(formatExpiry(value));
                                }
                            }}
                            className="payment-input w-full px-4 py-3 rounded-lg"
                            placeholder="MM / YY"
                            maxLength="7"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 mt-4">
                        <button className="payment-button w-full py-3 rounded-lg font-medium">
                            Complete Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentForm;