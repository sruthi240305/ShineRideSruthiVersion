import React, { useState } from 'react';
import TradesTable from '../TradesTable';
import { Check } from 'lucide-react';

const ScheduleTable = () => {
    const [scheduleData, setScheduleData] = useState([
        {
            id: 1,
            car_name: 'Tesla Model 3 - Black',
            delivery_type: 'Home Delivery',
            services: ['Exterior Wash', 'Interior Vacuum', 'Ceramic Coating', 'Tire Shine'],
            priority: 'Premium',
            plan: 'Annual Elite',
            completions: [true, true, false, false]
        },
        {
            id: 2,
            car_name: 'BMW M4 - Alpine White',
            delivery_type: 'Customer Pickup',
            services: ['Full Detail', 'Engine Bay Clean', 'Leather Conditioning', 'Glass Polish'],
            priority: 'VIP',
            plan: 'Monthly Pro',
            completions: [true, false, false, false]
        },
        {
            id: 3,
            car_name: 'Audi Q7 - Phantom Black',
            delivery_type: 'Home Delivery',
            services: ['Basic Wash', 'Dashboard Polish', 'N/A', 'N/A'],
            priority: 'Standard',
            plan: 'One Time',
            completions: [true, true, false, false]
        }
    ]);

    const handleToggleComplete = (rowId, serviceIndex) => {
        setScheduleData(prev => prev.map(row => {
            if (row.id === rowId) {
                const newCompletions = [...row.completions];
                newCompletions[serviceIndex] = !newCompletions[serviceIndex];
                return { ...row, completions: newCompletions };
            }
            return row;
        }));
    };

    const columns = [
        {
            header: 'Car Details',
            render: (row) => (
                <div className="flex flex-col">
                    <span className="font-bold text-white text-base">{row.car_name}</span>
                    <span className="text-xs" style={{ color: 'var(--secondary)' }}>{row.delivery_type}</span>
                </div>
            )
        },
        {
            header: 'Customer Priority',
            render: (row) => (
                <div className="flex flex-col">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md w-fit mb-1 ${row.priority === 'VIP' ? 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20' :
                            row.priority === 'Premium' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                                'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                        {row.priority}
                    </span>
                    <span className="text-sm font-medium text-white">{row.plan}</span>
                </div>
            )
        },
        // Generate 4 columns for services as specified
        ...[0, 1, 2, 3].map(index => ({
            header: `Service ${index + 1}`,
            render: (row) => {
                const serviceName = row.services[index] || 'No Service';
                const isCompleted = row.completions[index];
                const isNoService = serviceName === 'N/A' || serviceName === 'No Service';

                return (
                    <div className="flex flex-col items-center gap-3">
                        <span className={`text-[11px] font-medium text-center truncate w-24 px-1 ${isNoService ? 'opacity-20' : 'text-gray-300'
                            }`} title={serviceName}>
                            {serviceName}
                        </span>
                        <button
                            onClick={() => !isNoService && handleToggleComplete(row.id, index)}
                            disabled={isNoService}
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative group ${isNoService
                                    ? 'bg-transparent border border-white/5 opacity-10 cursor-not-allowed'
                                    : isCompleted
                                        ? 'bg-green-500/20 text-green-500 border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.2)]'
                                        : 'bg-[var(--hover)] text-[var(--secondary)] border-2 border-white/5 hover:border-purple-500/50 hover:text-purple-400'
                                }`}
                        >
                            {isCompleted ? <Check size={18} strokeWidth={3} /> : <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-purple-500/50 transition-colors" />}
                        </button>
                    </div>
                );
            }
        }))
    ];

    return (
        <div className="p-4">
            <TradesTable
                title="Garage Service Schedule"
                data={scheduleData}
                columns={columns}
                hidePagination={false}
            />
        </div>
    );
};

export default ScheduleTable;
