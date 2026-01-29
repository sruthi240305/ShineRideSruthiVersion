import React from 'react';
import ScheduleTable from '@/components/tables/ScheduleTable';

const SchedulePage = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6" style={{ color: 'var(--active)' }}>Operational Schedule</h1>
            <ScheduleTable />
        </div>
    );
};

export default SchedulePage;
