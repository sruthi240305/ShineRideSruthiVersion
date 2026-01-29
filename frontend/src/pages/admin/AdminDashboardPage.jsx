import React from 'react';
import RecentBookingsTable from '@/components/tables/RecentBookingsTable';
import EmployeesTable from '@/components/tables/EmployeesTable';
import ServicesTable from '@/components/tables/ServicesTable';
import WashBaysTable from '@/components/tables/WashBaysTable';
import CampaignsTable from '@/components/tables/CampaignsTable';
import CustomersTable from '@/components/tables/CustomersTable';
import FeedbackTable from '@/components/tables/FeedbackTable';

const AdminDashboardPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Admin Dashboard</h1>

            {/* Bookings Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Recent Bookings</h2>
                <RecentBookingsTable />
            </div>

            {/* Customers Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Customers</h2>
                <CustomersTable />
            </div>

            {/* Employees Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Employees</h2>
                <EmployeesTable />
            </div>

            {/* Services Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Services</h2>
                <ServicesTable />
            </div>

            {/* Wash Bays Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Wash Bays</h2>
                <WashBaysTable />
            </div>

            {/* Coupons Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Coupons & Campaigns</h2>
                <CampaignsTable />
            </div>

            {/* Feedback Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--active)' }}>Customer Feedback</h2>
                <FeedbackTable />
            </div>
        </div>
    );
};

export default AdminDashboardPage;
