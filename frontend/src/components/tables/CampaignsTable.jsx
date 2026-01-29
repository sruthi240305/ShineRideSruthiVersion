import React from 'react';
import TradesTable from '../TradesTable';

const CampaignsTable = () => {
    return (
        <TradesTable
            title="Campaigns"
            columns={[
                { header: 'ID', accessor: 'id' },
                {
                    header: 'Code',
                    render: (row) => <span className="font-mono font-bold tracking-widest text-purple-400">{row.coupon_code}</span>
                },
                { header: 'Value', accessor: 'discount_value' },
                { header: 'Type', accessor: 'discount_type' },
                { header: 'Min Order', accessor: 'min_order_amount' },
                { header: 'Limit', accessor: 'usage_limit' },
                { header: 'Used', accessor: 'used_count' },
                {
                    header: 'Status',
                    render: (row) => (
                        <span className={`px-2 py-0.5 rounded-full text-[10px] border ${row.is_active ? 'border-green-500 text-green-500' : 'border-zinc-700 text-zinc-700'
                            }`}>
                            {row.is_active ? 'Active' : 'Expired'}
                        </span>
                    )
                },
            ]}
            data={[
                {
                    id: 1,
                    coupon_code: 'SAVE20',
                    discount_type: 'Percentage',
                    discount_value: '20%',
                    min_order_amount: '₹500',
                    max_discount_amount: '₹200',
                    usage_limit: 500,
                    used_count: 148,
                    is_active: true,
                    valid_until: '2026-12-31'
                },
                {
                    id: 2,
                    coupon_code: 'WASH50',
                    discount_type: 'Fixed',
                    discount_value: '₹50',
                    min_order_amount: '₹200',
                    max_discount_amount: '₹50',
                    usage_limit: 100,
                    used_count: 100,
                    is_active: false,
                    valid_until: '2025-12-31'
                },
            ]}
        />
    );
};

export default CampaignsTable;
