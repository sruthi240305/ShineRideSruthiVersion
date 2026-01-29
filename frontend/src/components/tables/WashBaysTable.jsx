import React from 'react';
import TradesTable from '../TradesTable';

const WashBaysTable = () => {
    return (
        <TradesTable
            title="Wash Bays"
            columns={[
                { header: 'ID', accessor: 'id' },
                { header: 'Bay Name', accessor: 'bay_name' },
                { header: 'Number', accessor: 'bay_number' },
                {
                    header: 'Status',
                    render: (row) => (
                        <span className={`px-3 py-1 rounded-full text-xs border ${row.status === 'Active' ? 'border-green-500 text-green-500' :
                            row.status === 'Inactive' ? 'border-zinc-500 text-zinc-500' :
                                'border-red-500 text-red-500'
                            }`}>
                            {row.status}
                        </span>
                    )
                },
                { header: 'Capacity', accessor: 'daily_capacity' },
                { header: 'Bookings', accessor: 'current_bookings' },
                { header: 'Type', accessor: 'bay_type' },
                { header: 'Created', accessor: 'created_at' },
            ]}
            data={[
                {
                    id: 1,
                    bay_name: 'Bay 1',
                    bay_number: 'B-01',
                    status: 'Active',
                    daily_capacity: 25,
                    current_bookings: 12,
                    bay_type: 'Premium',
                    created_at: '2026-01-20'
                },
                {
                    id: 2,
                    bay_name: 'Bay 2',
                    bay_number: 'B-02',
                    status: 'Maintenance',
                    daily_capacity: 20,
                    current_bookings: 5,
                    bay_type: 'Standard',
                    created_at: '2026-01-22'
                },
            ]}
        />
    );
};

export default WashBaysTable;
