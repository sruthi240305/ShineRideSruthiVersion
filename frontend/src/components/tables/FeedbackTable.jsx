import React from 'react';
import TradesTable from '../TradesTable';

const FeedbackTable = () => {
    return (
        <TradesTable
            title="Customer Feedback"
            columns={[
                { header: 'ID', accessor: 'id' },
                {
                    header: 'Customer',
                    render: (row) => (
                        <div>
                            <div className="font-medium text-white">{row.customer}</div>
                            <div className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">{row.booking_id}</div>
                        </div>
                    )
                },
                {
                    header: 'Rating',
                    render: (row) => <span className="text-yellow-400 font-bold">{row.rating} ★</span>
                },
                { header: 'Technician', accessor: 'employee' },
                { header: 'Date', accessor: 'date' },
            ]}
            data={[
                {
                    id: 1,
                    customer: 'Tanya',
                    booking_id: 'BK-8821',
                    employee: 'Elena Moreno',
                    rating: 5,
                    date: '2026-01-25'
                },
                {
                    id: 2,
                    customer: 'Sri',
                    booking_id: 'BK-8822',
                    employee: 'Arun Kumar',
                    rating: 2,
                    date: '2026-01-24'
                },
            ]}
        />
    );
};

export default FeedbackTable;
