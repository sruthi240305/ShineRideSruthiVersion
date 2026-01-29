import React, { useState } from 'react';
import CampaignsTable from '@/components/tables/CampaignsTable';
import AddActionButton from '@/components/manipulate-buttons/AddActionButton';
import DeleteActionButton from '@/components/manipulate-buttons/DeleteActionButton';
import UpdateActionButton from '@/components/manipulate-buttons/UpdateActionButton';

const CouponsPage = () => {
    const [action, setAction] = useState(null);

    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Coupon Management</h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <AddActionButton label="Create Coupon" onClick={() => setAction('create')} />
                <DeleteActionButton label="Delete Coupon" onClick={() => setAction('delete')} />
                <UpdateActionButton label="Update Coupon" onClick={() => setAction('update')} />
            </div>

            <CampaignsTable />
        </div>
    );
};

export default CouponsPage;