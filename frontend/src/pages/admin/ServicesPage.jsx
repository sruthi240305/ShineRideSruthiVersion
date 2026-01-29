import React, { useState } from 'react';
import ServicesTable from '@/components/tables/ServicesTable';
import AddActionButton from '@/components/manipulate-buttons/AddActionButton';
import DeleteActionButton from '@/components/manipulate-buttons/DeleteActionButton';
import UpdateActionButton from '@/components/manipulate-buttons/UpdateActionButton';

const ServicesPage = () => {
    const [action, setAction] = useState(null);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Service Management</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <AddActionButton label="Add Service" onClick={() => setAction('create')} />
                <DeleteActionButton label="Delete Service" onClick={() => setAction('delete')} />
                <UpdateActionButton label="Update Service" onClick={() => setAction('update')} />
            </div>

            <ServicesTable />
        </div>
    );
};

export default ServicesPage;