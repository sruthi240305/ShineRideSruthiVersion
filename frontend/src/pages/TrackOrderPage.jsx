import React, { useEffect } from 'react';
import OrderTracking from '@/components/OrderTracking';
import Breadcrumbs from '@/components/Breadcrumbs';

const TrackOrderPage = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }, []);
  return (
    <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs 
          items={[
            { label: 'Dashboard', link: '/customer-dashboard' }, 
            { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
            { label: 'Your Orders', link: '/customer-dashboard/yourprofile/orders' }, 
            { label: 'Track Package' }
          ]} 
        />
        
        <div className="mt-8">
          <OrderTracking />
        </div>
      </div>
    </div>
  );
};

export default TrackOrderPage;
