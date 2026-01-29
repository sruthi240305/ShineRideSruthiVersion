import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Plus } from 'lucide-react';

const DeliveryAddresses = ({ onAddressSelect }) => {
    const navigate = useNavigate();
    const [selectedAddress, setSelectedAddress] = useState(0);

    const addresses = [
        {
            name: 'Tanya Sri',
            address: '31/8a Anand Illam Thiru Murugan Nagar, Vadavalli, coimbatore, COIMBATORE, TAMIL NADU, 641041, India',
            phone: '9442183769'
        },
        {
            name: 'tanya sri srinivasan',
            address: '24,marutha nagar,bharani street,linganoor,vadavalli, coimbatore-41, COIMBATORE, TAMIL NADU, 641041, India',
            phone: '9952455519'
        }
    ];

    return (
        <div className="bg-black border border-purple-600 rounded-xl p-6">
            <style>{`
                .address-radio {
                    width: 20px;
                    height: 20px;
                    border: 2px solid #9333ea;
                    background: transparent;
                    appearance: none;
                    border-radius: 50%;
                    cursor: pointer;
                    position: relative;
                    flex-shrink: 0;
                    transition: all 0.2s ease;
                }

                .address-radio:checked {
                    border-color: #9333ea;
                }

                .address-radio:checked::after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 10px;
                    height: 10px;
                    background: #9333ea;
                    border-radius: 50%;
                }

                .deliver-button {
                    background: #fff;
                    color: #000;
                    transition: all 0.2s ease;
                }

                .deliver-button:hover {
                    background: #f3f4f6;
                }
            `}</style>

            <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-white">
                    Delivery addresses ({addresses.length})
                </h2>
            </div>

            <div className="space-y-4 mb-6">
                {addresses.map((addr, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border border-purple-600 bg-black cursor-pointer hover:border-purple-500 transition-colors"
                        onClick={() => setSelectedAddress(index)}
                    >
                        <input
                            type="radio"
                            name="address"
                            checked={selectedAddress === index}
                            onChange={() => setSelectedAddress(index)}
                            className="address-radio mt-0.5"
                        />
                        <div className="flex-1">
                            <h3 className="text-white font-semibold mb-2">{addr.name}</h3>
                            <p className="text-sm text-gray-400 mb-2">{addr.address}</p>
                            <p className="text-sm text-gray-400 mb-3">Phone number: {addr.phone}</p>
                            <div className="flex gap-4">
                                <button className="text-sm text-purple-500 hover:text-purple-400 transition-colors">
                                    Edit address
                                </button>
                                <span className="text-gray-600">|</span>
                                <button className="text-sm text-purple-500 hover:text-purple-400 transition-colors">
                                    Add delivery instructions
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={() => navigate('/customer-dashboard/yourprofile/addresses')}
                className="flex items-center gap-2 text-purple-500 hover:text-purple-400 mb-6 transition-colors"
            >
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Add a new delivery address</span>
            </button>

            <button
                onClick={() => onAddressSelect(addresses[selectedAddress])}
                className="deliver-button px-6 py-3 rounded-lg font-medium"
            >
                Deliver to this address
            </button>
        </div>
    );
};

export default DeliveryAddresses;