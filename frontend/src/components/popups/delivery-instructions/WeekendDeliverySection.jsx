import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const WeekendDeliverySection = ({ weekendDelivery, setWeekendDelivery }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-white/5 text-white"
                style={{ borderRadius: '0.5rem' }}
            >
                <span className="font-bold">Can you receive deliveries at this address on weekends?</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="p-4 grid grid-cols-1 gap-6 bg-white/5">
                    {[{ day: 'Saturdays', key: 'saturday' }, { day: 'Sundays', key: 'sunday' }].map(({ day, key }) => (
                        <div key={day}>
                            <label className="block text-sm font-bold mb-2 text-white">{day}</label>
                            <div className="flex gap-2">
                                {['No', 'Yes'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => setWeekendDelivery(prev => ({ ...prev, [key]: opt }))}
                                        className={`flex-1 py-2 rounded-lg border transition-all ${weekendDelivery[key] === opt ? 'border-white bg-white' : 'border-white/10 bg-transparent hover:border-white/30'
                                            }`}
                                        style={{ color: weekendDelivery[key] === opt ? 'black' : 'white' }}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WeekendDeliverySection;