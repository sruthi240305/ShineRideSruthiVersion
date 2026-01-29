import React, { useState } from 'react';
import EmployeesTable from '@/components/tables/EmployeesTable';
import AddActionButton from '@/components/manipulate-buttons/AddActionButton';
import DeleteActionButton from '@/components/manipulate-buttons/DeleteActionButton';
import UpdateActionButton from '@/components/manipulate-buttons/UpdateActionButton';

const EmployeesPage = () => {
    const [action, setAction] = useState(null);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Employee Management</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <AddActionButton label="Add Employee" onClick={() => setAction('create')} />
                <DeleteActionButton label="Delete Employee" onClick={() => setAction('delete')} />
                <UpdateActionButton label="Update Employee" onClick={() => setAction('update')} />
            </div>

            <EmployeesTable />
        </div>
    );
};

export default EmployeesPage;