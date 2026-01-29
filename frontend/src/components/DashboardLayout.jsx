import React from 'react';
import { Outlet } from 'react-router-dom';
import StaggeredMenu from './Navigation/StaggeredMenu';
import { useAuth } from '@/hooks/useAuth';

const DashboardLayout = () => {
    const { user } = useAuth();

    const adminMenuItems = [
        { label: 'Bookings', link: '/admin-dashboard?tab=bookings', ariaLabel: 'Bookings' },
        { label: 'Employees', link: '/admin-dashboard?tab=employees', ariaLabel: 'Employees' },
        { label: 'Services', link: '/admin-dashboard?tab=services', ariaLabel: 'Services' },
        { label: 'Wash Bays', link: '/admin-dashboard?tab=washbays', ariaLabel: 'Wash Bays' },
        { label: 'Coupons', link: '/admin-dashboard?tab=coupons', ariaLabel: 'Coupons' },
        { label: 'Customers', link: '/admin-dashboard?tab=customers', ariaLabel: 'Customers' },
        { label: 'Feedback', link: '/admin-dashboard?tab=feedback', ariaLabel: 'Feedback' },
        { label: 'Schedule', link: '/admin-dashboard?tab=schedule', ariaLabel: 'Schedule' },
        {
            label: 'Logout',
            link: '/',
            ariaLabel: 'Logout',
            action: () => {
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
    ];

    const staffMenuItems = [
        { label: 'Dashboard', link: '/staff-dashboard', ariaLabel: 'Staff Dashboard' },
        {
            label: 'Logout',
            link: '/',
            ariaLabel: 'Logout',
            action: () => {
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
    ];

    const defaultMenuItems = [
        { label: 'Home', link: '/', ariaLabel: 'Home' },
        { label: 'Services', link: '/customer-dashboard/services', ariaLabel: 'Services' },
        { label: 'Your Profile', link: '/customer-dashboard/yourprofile', ariaLabel: 'Your Profile' },
        {
            label: 'Logout',
            link: '/',
            ariaLabel: 'Logout',
            action: () => {
                localStorage.removeItem('user');
                window.location.href = '/';
            }
        }
    ];

    const dashboardMenuItems = user?.role === 'admin'
        ? adminMenuItems
        : user?.role === 'staff'
            ? staffMenuItems
            : defaultMenuItems;

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#000000' }}>
            <StaggeredMenu
                isFixed
                items={dashboardMenuItems}
                displayItemNumbering={false}
                colors={['#000000', '#0a0a0a', '#1e1033']}
                accentColor="#a855f7"
                menuButtonColor="#ffffff"
            />
            <div style={{ width: '100%', minHeight: '100vh' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
