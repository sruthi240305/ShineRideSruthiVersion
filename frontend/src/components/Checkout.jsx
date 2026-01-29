import { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "Jarrod Gusikowski",
  });

  const subtotal = 7.45;
  const shipping = 10.0;
  const total = (subtotal + shipping).toFixed(2);

  return (
    <div className="min-h-screen bg-[#02122F] flex items-start justify-center p-8 text-white">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Payment */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment</h2>
          <p className="text-sm text-gray-400 mb-6">
            All transactions are secure and encrypted.
          </p>

          {/* Payment Method */}
          <div className="mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-orange-500"
              />
              Credit Card
              <div className="flex items-center gap-1 ml-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="Mastercard" className="h-4" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" className="h-4" />
              </div>
            </label>
          </div>

          {paymentMethod === "card" && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.number}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, number: e.target.value })
                }
                className="w-full p-3 rounded-md bg-[#23354D] border border-gray-700 placeholder-gray-400"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Expiration date (DD/MM/YY)"
                  value={cardDetails.expiry}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, expiry: e.target.value })
                  }
                  className="flex-1 p-3 rounded-md bg-[#23354D] border border-gray-700 placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Security Code"
                  value={cardDetails.cvv}
                  onChange={(e) =>
                    setCardDetails({ ...cardDetails, cvv: e.target.value })
                  }
                  className="flex-1 p-3 rounded-md bg-[#23354D] border border-gray-700 placeholder-gray-400"
                />
              </div>
              <input
                type="text"
                placeholder="Name on Card"
                value={cardDetails.name}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, name: e.target.value })
                }
                className="w-full p-3 rounded-md bg-[#23354D] border border-gray-700 placeholder-gray-400"
              />
            </div>
          )}

          <div className="mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="accent-orange-500"
              />
              Paypal
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="Paypal"
                className="h-5 ml-2"
              />
            </label>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="bg-[#23354D] p-6 rounded-xl space-y-4">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/30/01/05/car-2691414_1280.png"
              alt="Product"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <p>Portable Car Tire Detail Neck With Seal Cover</p>
              <p className="text-gray-400 text-sm">
                High Density Soft Bristles For Tire Shine and Wax Application
              </p>
            </div>
            <p className="ml-auto font-semibold">$7.45</p>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Discount Code"
              className="flex-1 p-2 rounded-md bg-[#02122F] border border-gray-700 placeholder-gray-400"
            />
            <button className="bg-orange-500 px-4 rounded-md">Apply</button>
          </div>

          <div className="border-t border-gray-700 pt-4 space-y-2 text-gray-200">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-white">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
