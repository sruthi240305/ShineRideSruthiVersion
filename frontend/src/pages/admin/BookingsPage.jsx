import RecentBookingsTable from '@/components/tables/RecentBookingsTable';

const BookingsPage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Booking Management</h1>
            <RecentBookingsTable />
        </div>
    );
};

export default BookingsPage;
