import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export default function OrderCard({ order }) {
  const [showInvoice, setShowInvoice] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900/50 border rounded-lg p-6 mb-4" style={{ backgroundColor: 'var(--surface)', borderColor: '#a855f7' }}>
      {/* Order Header */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 pb-4 border-b" style={{ borderColor: '#a855f7', opacity: 0.3 }}>
        <div>
          <p className="text-xs uppercase" style={{ color: 'var(--muted)' }}>Order Placed</p>
          <p className="text-sm text-white">{order.orderDate}</p>
        </div>
        <div>
          <p className="text-xs uppercase" style={{ color: 'var(--muted)' }}>Total</p>
          <p className="text-sm text-white">₹{order.total}</p>
        </div>
        <div className="relative">
          <p className="text-xs uppercase" style={{ color: 'var(--muted)' }}>Ship To</p>
          <button
            onClick={() => setShowAddress(!showAddress)}
            className="text-sm hover:text-purple-300 flex items-center gap-1 transition-colors"
            style={{ color: 'var(--active)' }}
          >
            {order.shipTo} <ChevronDown size={14} className={`transition-transform duration-200 ${showAddress ? 'rotate-180' : ''}`} />
          </button>

          {/* Address Dropdown */}
          {showAddress && order.address && (
            <div
              className="absolute left-0 mt-2 w-72 rounded-xl shadow-2xl z-50 p-4 border animate-in fade-in slide-in-from-top-2"
              style={{ backgroundColor: 'var(--surface)', borderColor: 'var(--secondary)', backdropFilter: 'blur(10px)' }}
            >
              <div className="text-sm space-y-1">
                <p className="font-bold text-white mb-1">{order.address.name}</p>
                <p className="text-[var(--muted)]">{order.address.line1}</p>
                <p className="text-[var(--muted)]">{order.address.line2}</p>
                <p className="text-[var(--muted)]">{order.address.city}, {order.address.state} {order.address.pincode}</p>
                <p className="text-[var(--muted)]">{order.address.country}</p>
              </div>
            </div>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs" style={{ color: 'var(--muted)' }}>ORDER # {order.orderNumber}</p>
          <div className="flex gap-3 justify-end mt-1">
            <button
              onClick={() => navigate(`/customer-dashboard/yourprofile/orders/${order.id}/details`)}
              className="text-sm hover:text-purple-300"
              style={{ color: 'var(--active)' }}
            >
              View order details
            </button>
            <button
              onClick={() => setShowInvoice(!showInvoice)}
              className="text-sm hover:text-purple-300 flex items-center gap-1"
              style={{ color: 'var(--active)' }}
            >
              Invoice <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content with Delivery Status on Left and Actions on Right */}
      <div className="flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex-1">
          {/* Delivery Status */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--active)' }}>
              {order.deliveryStatus}
            </h3>
            {order.deliveryNote && (
              <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>{order.deliveryNote}</p>
            )}
          </div>

          {/* Product Info */}
          <div className="flex gap-4">
            <img
              src={order.productImage}
              alt={order.productName}
              className="w-20 h-20 object-contain bg-white rounded"
            />
            <div className="flex-1">
              <h4 className="text-sm hover:text-purple-200 cursor-pointer mb-1" style={{ color: 'var(--active)' }}>
                {order.productName}
              </h4>
              {order.returnWindow && (
                <p className="text-xs" style={{ color: 'var(--muted)' }}>{order.returnWindow}</p>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons on the Right */}
        <div className="flex flex-col gap-2 md:min-w-[220px] justify-start">
          {order.primaryAction && (
            <button
              onClick={() => navigate('/customer-dashboard/yourprofile/support')}
              className="w-full px-6 py-2 rounded-full font-medium transition hover:opacity-90"
              style={{ backgroundColor: '#a855f7', color: 'white' }}
            >
              {order.primaryAction}
            </button>
          )}

          {order.actions && order.actions.map((action, index) => (
            <button
              key={index}
              onClick={() => {
                if (action === 'Track package') navigate('/customer-dashboard/yourprofile/orders/track');
                if (action === 'Write a product review') navigate('/customer-dashboard/yourprofile/writereview');
              }}
              className="w-full px-4 py-2 rounded-full text-sm transition hover:opacity-90" style={{ backgroundColor: '#a855f7', color: 'white' }}
            >
              {action}
            </button>
          ))}

          {/* Special Buttons */}
          {order.specialActions && order.specialActions.length > 0 && (
            <div className="flex flex-col gap-2 mt-2">
              {order.specialActions.map((action, index) => (
                <button
                  key={index}
                  className="px-4 py-1.5 rounded-full text-sm font-medium transition hover:opacity-90 flex items-center justify-center gap-2" style={{ backgroundColor: '#a855f7', color: 'white' }}
                >
                  {action.icon && <span>{action.icon}</span>}
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}