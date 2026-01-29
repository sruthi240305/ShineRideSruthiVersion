import React, { useState } from 'react';
import WashBaysTable from '@/components/tables/WashBaysTable';
import AddActionButton from '@/components/manipulate-buttons/AddActionButton';
import DeleteActionButton from '@/components/manipulate-buttons/DeleteActionButton';
import UpdateActionButton from '@/components/manipulate-buttons/UpdateActionButton';

const WashBaysPage = () => {
    const [action, setAction] = useState(null);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Wash Bay Management</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <AddActionButton label="Add Wash Bay" onClick={() => setAction('create')} />
                <DeleteActionButton label="Delete Wash Bay" onClick={() => setAction('delete')} />
                <UpdateActionButton label="Update Wash Bay" onClick={() => setAction('update')} />
            </div>
            <WashBaysTable />
        </div>
    );
};

export default WashBaysPage;
