import React from 'react';
import TradesTable from '../TradesTable';

const ServicesTable = () => {
    return (
        <TradesTable
            title="Services"
            columns={[
                { header: 'ID', accessor: 'id' },
                { header: 'Service Name', accessor: 'service_name' },
                { header: 'Category', accessor: 'service_category' },
                { header: 'Price', accessor: 'base_price' },
                { header: 'Duration', accessor: 'duration_minutes' },
                {
                    header: 'Status',
                    render: (row) => (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border ${row.is_active ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'
                            }`}>
                            {row.is_active ? 'Active' : 'Inactive'}
                        </span>
                    )
                },
                { header: 'Created', accessor: 'created_at' },
            ]}
            data={[
                {
                    id: 1,
                    service_name: 'Premium Exterior Wash',
                    service_category: 'Wash',
                    base_price: '₹499',
                    duration_minutes: '30 mins',
                    is_active: true,
                    created_at: '2026-01-20'
                },
                {
                    id: 2,
                    service_name: 'Complete Interior Cleaning',
                    service_category: 'Detail',
                    base_price: '₹1299',
                    duration_minutes: '90 mins',
                    is_active: true,
                    created_at: '2026-01-24'
                },
            ]}
        />
    );
};

export default ServicesTable;
