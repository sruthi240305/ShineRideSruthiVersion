import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const InstructionsSection = ({ instructions, setInstructions }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="rounded-lg overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-white/5 text-white"
                style={{ borderRadius: '0.5rem' }}
            >
                <span className="font-bold">Do we need additional instructions to deliver to this address?</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && (
                <div className="p-4 bg-white/5">
                    <label className="block text-sm font-bold mb-2 text-white">Delivery instructions</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        placeholder="Provide details such as building description, a nearby landmark, or other navigation instructions."
                        className="w-full h-32 p-3 bg-black/40 border border-white/20 rounded-lg focus:outline-none focus:border-white text-white"
                    />
                </div>
            )}
        </div>
    );
};

export default InstructionsSection;