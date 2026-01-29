import React, { useState } from 'react';
import CustomersTable from '@/components/tables/CustomersTable';
import AddActionButton from '@/components/manipulate-buttons/AddActionButton';
import DeleteActionButton from '@/components/manipulate-buttons/DeleteActionButton';
import UpdateActionButton from '@/components/manipulate-buttons/UpdateActionButton';

const CustomersPage = () => {
    const [action, setAction] = useState(null);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Customer Management</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <AddActionButton label="Add Customer" onClick={() => setAction('create')} />
                <DeleteActionButton label="Delete Customer" onClick={() => setAction('delete')} />
                <UpdateActionButton label="Update Profile" onClick={() => setAction('update')} />
            </div>

            <CustomersTable />
        </div>
    );
};

export default CustomersPage;