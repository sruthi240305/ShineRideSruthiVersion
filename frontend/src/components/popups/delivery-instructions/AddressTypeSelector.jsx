import React from 'react';

const addressTypeInfo = {
    House: 'Independent house, villa, or builder floor (6 AM - 11 PM delivery)',
    Apartment: 'Apartment complex or gated community',
    Business: 'Office, shop, or commercial establishment (10 AM - 6 PM delivery)',
    Other: 'Other location types'
};

const AddressTypeSelector = ({ addressType, setAddressType }) => {
    return (
        <div>
            <label className="block text-sm font-bold mb-3 text-white">Address Type</label>
            <div className="grid grid-cols-2 gap-2">
                {Object.keys(addressTypeInfo).map(type => (
                    <button
                        key={type}
                        onClick={() => setAddressType(type)}
                        className={`py-2 px-4 rounded-full text-sm font-semibold border-2 transition-all ${addressType === type ? 'border-white shadow-lg' : 'border-white/20 hover:border-white/40'
                            }`}
                        style={{
                            backgroundColor: addressType === type ? 'white' : 'rgba(255,255,255,0.1)',
                            color: addressType === type ? 'black' : 'white'
                        }}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <p className="mt-2 text-xs opacity-70 text-white">{addressTypeInfo[addressType]}</p>
        </div>
    );
};

export default AddressTypeSelector;