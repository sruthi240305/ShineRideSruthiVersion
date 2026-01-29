import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronDown, ChevronRight, MapPin, CreditCard, FileText } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function OrderDetailsPage() {
    const { id } = useParams();

    // Mock data matching the image
    const order = {
        orderNumber: '408-2115049-7476326',
        orderDate: '18 January 2026',
        shipTo: {
            name: 'Tanya Sri',
            addressLine1: '31/8a Anand Illam Thiru Murugan Nagar, Vadavalli',
            addressLine2: 'coimbatore',
            city: 'COIMBATORE',
            state: 'TAMIL NADU',
            pincode: '641041',
            country: 'India'
        },
        paymentMethod: 'BHIM UPI',
        summary: {
            subtotal: 899.00,
            shipping: 0.00,
            fee: 5.00,
            total: 904.00,
            grandTotal: 904.00
        },
        status: 'Arriving Sunday',
        product: {
            image: 'https://m.media-amazon.com/images/I/61m71z2D0UL._SX679_.jpg', // Using a real-looking placeholder URL
            title: 'Jeet Enterprises Car Side Window Door Visor Rain Guard ABS Flexible Plastic Non Breakable for Ritz',
            soldBy: 'Jeet Brothers Enterprises',
            price: 899.00
        }
    };

    const [showAddressDropdown, setShowAddressDropdown] = React.useState(false);

    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-5xl mx-auto">
                <Breadcrumbs
                    items={[
                        { label: 'Dashboard', link: '/customer-dashboard' },
                        { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                        { label: 'Your Orders', link: '/customer-dashboard/yourprofile/orders' },
                        { label: 'Order Details' }
                    ]}
                />

                <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Order Details</h1>
                        <div className="flex flex-wrap items-center gap-x-4 border-b border-white/10 pb-4 text-sm opacity-80">
                            <span>Order placed {order.orderDate}</span>
                            <span className="opacity-40">|</span>
                            <span>Order number {order.orderNumber}</span>
                        </div>
                    </div>
                    <div className="pb-4">
                        <button className="flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: 'var(--active)' }}>
                            Invoice <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                {/* Info Box */}
                <div className="mt-6 rounded-xl overflow-hidden border border-white/10" style={{ backgroundColor: 'white' }}>
                    <div className="p-6 grid md:grid-cols-3 gap-8 text-black">
                        {/* Ship To */}
                        <div className="relative">
                            <h3 className="font-bold mb-1 text-sm uppercase opacity-70">Ship to</h3>
                            <button
                                onClick={() => setShowAddressDropdown(!showAddressDropdown)}
                                className="font-bold text-sm flex items-center gap-1 transition-colors hover:text-purple-700"
                                style={{ color: '#000' }}
                            >
                                {order.shipTo.name} <ChevronDown size={14} className={`transition-transform duration-200 ${showAddressDropdown ? 'rotate-180' : ''}`} />
                            </button>

                            {showAddressDropdown && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-black/10 rounded-lg shadow-xl z-10 p-4 animate-in fade-in zoom-in duration-150">
                                    <div className="text-sm space-y-1">
                                        <p className="font-bold">{order.shipTo.name}</p>
                                        <p>{order.shipTo.addressLine1}</p>
                                        <p>{order.shipTo.addressLine2}</p>
                                        <p>{order.shipTo.city}, {order.shipTo.state} {order.shipTo.pincode}</p>
                                        <p>{order.shipTo.country}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Payment Method */}
                        <div>
                            <h3 className="font-bold mb-3 text-sm uppercase opacity-70">Payment method</h3>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="font-semibold">{order.paymentMethod}</span>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div>
                            <h3 className="font-bold mb-3 text-sm uppercase opacity-70">Order Summary</h3>
                            <div className="text-sm space-y-2">
                                <div className="flex justify-between">
                                    <span>Item(s) Subtotal:</span>
                                    <span>₹{order.summary.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping:</span>
                                    <span>₹{order.summary.shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Marketplace Fee:</span>
                                    <span>₹{order.summary.fee.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Total:</span>
                                    <span>₹{order.summary.total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between font-bold pt-2 border-t border-black/10">
                                    <span>Grand Total:</span>
                                    <span>₹{order.summary.grandTotal.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Area */}
                <div className="mt-6 rounded-xl border border-white/10 p-6 flex flex-col md:flex-row gap-8" style={{ backgroundColor: 'var(--surface)' }}>
                    <div className="flex-1">
                        <h2 className="text-xl font-bold mb-6">{order.status}</h2>

                        <div className="flex gap-6">
                            <div className="bg-white p-2 rounded-lg w-32 h-32 flex-shrink-0 flex items-center justify-center">
                                <img src={order.product.image} alt="Product" className="max-w-full max-h-full object-contain" />
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold leading-relaxed" style={{ color: 'var(--active)' }}>
                                    {order.product.title}
                                </p>
                                <p className="text-xs opacity-70">Sold by: {order.product.soldBy}</p>
                                <p className="font-bold">₹{order.product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="w-full md:w-64 space-y-2">
                        <Link
                            to="/customer-dashboard/yourprofile/orders/track"
                            className="block w-full text-center py-2.5 rounded-full font-bold shadow-md transition-transform active:scale-95"
                            style={{ backgroundColor: '#FFD814', color: 'black' }}
                        >
                            Track package
                        </Link>
                        <button className="block w-full text-center py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/5">
                            Request cancellation
                        </button>
                        <button className="block w-full text-center py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/5">
                            Return or replace items
                        </button>
                        <button className="block w-full text-center py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/5">
                            Share gift receipt
                        </button>
                        <button className="block w-full text-center py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/5">
                            Leave seller feedback
                        </button>
                        <button className="block w-full text-center py-2 border border-white/20 rounded-full text-xs font-semibold hover:bg-white/5">
                            Write a product review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
