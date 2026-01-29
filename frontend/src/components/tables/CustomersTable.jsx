import React from 'react';
import TradesTable from '../TradesTable';

const CustomersTable = () => {
    return (
        <TradesTable
            title="Customer Database"
            columns={[
                { header: 'ID', accessor: 'id' },
                { header: 'Name', accessor: 'customer_name' },
                { header: 'Email', accessor: 'email' },
                { header: 'Phone', accessor: 'phone' },
                { header: 'Bookings', accessor: 'total_bookings' },
                { header: 'Total Spent', accessor: 'total_spent' },
                { header: 'Reg. Date', accessor: 'registration_date' },
            ]}
            data={[
                {
                    id: 'CUST-1029',
                    customer_name: 'Sruthi',
                    email: 'sruthi@example.com',
                    phone: '+91 99887 76655',
                    total_bookings: 12,
                    total_spent: '₹8,450',
                    registration_date: '2025-10-12'
                },
                {
                    id: 'CUST-1030',
                    customer_name: 'Arun Kumar',
                    email: 'arun@example.com',
                    phone: '+91 99887 76644',
                    total_bookings: 5,
                    total_spent: '₹3,200',
                    registration_date: '2025-11-20'
                },
            ]}
        />
    );
};

export default CustomersTable;
