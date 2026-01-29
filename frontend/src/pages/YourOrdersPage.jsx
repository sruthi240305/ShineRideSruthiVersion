import React from 'react';
import OrderCard from '@/components/OrderCard';
import Breadcrumbs from '@/components/Breadcrumbs';

const YourOrdersPage = () => {

  // Sample orders data
  const orders = [
    {
      id: 1,
      orderDate: '18 January 2026',
      total: '904.00',
      shipTo: 'Tanya Sri',
      address: {
        name: 'Tanya Sri',
        line1: '31/8a Anand Illam Thiru Murugan Nagar',
        line2: 'Vadavalli, Coimbatore',
        city: 'COIMBATORE',
        state: 'TAMIL NADU',
        pincode: '641041',
        country: 'India'
      },
      orderNumber: '408-2115049-7476326',
      deliveryStatus: 'Arriving Sunday',
      deliveryNote: 'Jeet Enterprises Car Side Window Door Visor Rain Guard',
      productImage: 'https://via.placeholder.com/80',
      productName: 'Car Side Window Door Visor Rain Guard',
      returnWindow: 'Return window closed',
      primaryAction: 'Get product support',
      actions: ['Track package', 'Leave seller feedback', 'Leave delivery feedback', 'Write a product review'],
      specialActions: []
    },
    {
      id: 2,
      orderDate: '15 January 2026',
      total: '1,299.00',
      shipTo: 'Tanya Sri',
      address: {
        name: 'Tanya Sri',
        line1: '24, Marutha Nagar, Bharani Street',
        line2: 'Linganoor, Vadavalli',
        city: 'COIMBATORE',
        state: 'TAMIL NADU',
        pincode: '641041',
        country: 'India'
      },
      orderNumber: '408-2115049-7476325',
      deliveryStatus: 'Delivered',
      deliveryNote: 'Package delivered on 17 January 2026',
      productImage: 'https://via.placeholder.com/80',
      productName: 'Car Floor Mats Premium Quality',
      returnWindow: 'Return window closed',
      primaryAction: 'Get product support',
      actions: ['Track package', 'Leave seller feedback', 'Leave delivery feedback', 'Write a product review'],
      specialActions: []
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          items={[
            { label: 'Dashboard', link: '/customer-dashboard' },
            { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
            { label: 'Your Orders', link: '/customer-dashboard/yourprofile/orders' },
            { label: 'Orders' }
          ]}
        />

        <div className="mt-8 mb-12">
          {orders.length > 0 ? (
            <div>
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p style={{ color: 'var(--muted)' }}>No orders found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YourOrdersPage;
