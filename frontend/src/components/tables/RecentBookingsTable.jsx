import React from 'react';
import TradesTable from '../TradesTable';

const RecentBookingsTable = () => {
    return (
        <TradesTable
            title="Recent Bookings"
            columns={[
                { header: 'Order ID', accessor: 'id' },
                { header: 'Customer', accessor: 'customer_name' },
                { header: 'Service', accessor: 'service' },
                { header: 'Bay', accessor: 'bay' },
                { header: 'Technician', accessor: 'employee' },
                { header: 'Final Price', accessor: 'final_price' },
                {
                    header: 'Status',
                    render: (row) => (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border ${row.status === 'Completed' ? 'border-green-500 text-green-500' :
                            row.status === 'In Progress' ? 'border-purple-500 text-purple-400' :
                                'border-yellow-500 text-yellow-500'
                            }`}>
                            {row.status}
                        </span>
                    )
                },
            ]}
            data={[
                {
                    id: 'BK-8821',
                    customer_name: 'Sruthi',
                    service: 'Full Detail',
                    bay: 'B-02',
                    employee: 'Elena Moreno',
                    final_price: '₹1199',
                    status: 'In Progress'
                },
                {
                    id: 'BK-8822',
                    customer_name: 'Arun Kumar',
                    service: 'Premium Wash',
                    bay: 'B-01',
                    employee: 'Arun Kumar',
                    final_price: '₹499',
                    status: 'Completed'
                },
            ]}
        />
    );
};

export default RecentBookingsTable;
