import BookingsPage from './admin/BookingsPage';
import EmployeesPage from './admin/EmployeesPage';
import ServicesPage from './admin/ServicesPage';
import WashBaysPage from './admin/WashBaysPage';
import CouponsPage from './admin/CouponsPage';
import CustomersPage from './admin/CustomersPage';
import FeedbackPage from './admin/FeedbackPage';
import SchedulePage from './admin/SchedulePage';
import AdminDashboardPage from './admin/AdminDashboardPage';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '@/components/Breadcrumbs';

const tabs = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'bookings', label: 'Recent Bookings' },
    { key: 'employees', label: 'Employees' },
    { key: 'services', label: 'Services' },
    { key: 'washbays', label: 'Wash Bays' },
    { key: 'coupons', label: 'Coupons & Campaigns' },
    { key: 'customers', label: 'Customers' },
    { key: 'feedback', label: 'Customer Feedback' },
    { key: 'schedule', label: 'Service Schedule' },
];

const AdminPage = () => {
    const [searchParams] = useSearchParams();
    const currentParam = searchParams.get('tab');
    const activeTabKey = tabs.some(tab => tab.key === currentParam) ? currentParam : 'dashboard';
    const activeTabLabel = tabs.find(tab => tab.key === activeTabKey)?.label;

    const breadcrumbItems = [
        { label: 'Admin Dashboard', link: activeTabKey !== 'dashboard' ? '/admin-dashboard' : null },
        ...(activeTabKey !== 'dashboard' ? [{ label: activeTabLabel }] : [])
    ];

    return (
        <div className="min-h-screen pt-24 px-6">
            <div className="mb-6">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {activeTabKey === 'dashboard' && <AdminDashboardPage />}
            {activeTabKey === 'bookings' && <BookingsPage />}
            {activeTabKey === 'employees' && <EmployeesPage />}
            {activeTabKey === 'services' && <ServicesPage />}
            {activeTabKey === 'washbays' && <WashBaysPage />}
            {activeTabKey === 'coupons' && <CouponsPage />}
            {activeTabKey === 'customers' && <CustomersPage />}
            {activeTabKey === 'feedback' && <FeedbackPage />}
            {activeTabKey === 'schedule' && <SchedulePage />}
        </div>
    );
};

export default AdminPage;
