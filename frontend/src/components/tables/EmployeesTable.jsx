import React from 'react';
import TradesTable from '../TradesTable';

const EmployeesTable = () => {
    return (
        <TradesTable
            title="Employees"
            columns={[
                { header: 'ID', accessor: 'id' },
                {
                    header: 'Employee',
                    render: (row) => (
                        <div>
                            <div className="font-medium">{row.employee_name}</div>
                            <div className="text-xs text-[var(--secondary)]">{row.email}</div>
                        </div>
                    )
                },
                { header: 'Role', accessor: 'role' },
                { header: 'Bay', accessor: 'assigned_bay_id' },
                { header: 'Shift', accessor: 'shift_timing' },
                {
                    header: 'Rating',
                    render: (row) => <span className="text-yellow-400">★ {row.rating}</span>
                },
                {
                    header: 'Status',
                    render: (row) => (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border ${row.status === 'Active' ? 'border-green-500 text-green-500' : 'border-yellow-500 text-yellow-500'
                            }`}>
                            {row.status}
                        </span>
                    )
                },
            ]}
            data={[
                {
                    id: 1,
                    employee_name: 'Elena Moreno',
                    email: 'elena@shineride.com',
                    phone: '+91 99887 76655',
                    role: 'Washer',
                    assigned_bay_id: 'B-01',
                    hourly_rate: '₹450/hr',
                    shift_timing: '09:00 AM - 06:00 PM',
                    rating: 4.8,
                    total_services_completed: 452,
                    status: 'Active',
                    hire_date: '2025-01-10'
                },
                {
                    id: 2,
                    employee_name: 'Daniel Lee',
                    email: 'daniel@shineride.com',
                    phone: '+91 99887 76644',
                    role: 'Manager',
                    assigned_bay_id: 'Admin',
                    hourly_rate: '₹85,000/mo',
                    shift_timing: '10:00 AM - 07:00 PM',
                    rating: 4.9,
                    total_services_completed: 120,
                    status: 'Active',
                    hire_date: '2024-11-15'
                },
            ]}
        />
    );
};

export default EmployeesTable;
