import React from 'react';

const PaymentSummary = () => {
    return (
        <div className="bg-black p-6 rounded-xl text-white space-y-4 mt-20 border border-[#a855f7]">
            <h2 className="text-xl font-semibold mb-6">Payment Summary</h2>

            <div className="text-sm text-gray-300 space-y-2">
                <div className="flex justify-between">
                    <span>Order No</span>
                    <span>11458523</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax</span>
                    <span>20%</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax Amount</span>
                    <span>$123.28</span>
                </div>
            </div>

            <hr className="border-purple-700" />

            <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>$576.32</span>
            </div>
        </div>
    );
};

export default PaymentSummary;
