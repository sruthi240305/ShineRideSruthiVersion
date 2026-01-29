import React, { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useNavigate, useLocation } from 'react-router-dom';
import AddAddressCard from '@/components/AddressManagerCards/AddAddressCard';
import AddressCard from '@/components/AddressManagerCards/AddressCard';
import DeliveryInstructionsModal from '@/components/popups/delivery-instructions/DeliveryInstructionsModal';
import DefaultAddressEdit from '@/components/popups/DefaultAddressEdit';

const initialAddresses = [
    {
        id: 1,
        name: 'Tanya Sri',
        addressLine1: '31/8a Anand Illam Thiru Murugan Nagar, Vadavalli',
        addressLine2: 'coimbatore',
        city: 'COIMBATORE',
        state: 'TAMIL NADU',
        pincode: '641041',
        country: 'India',
        phone: '9442183769',
        isDefault: true
    },
    {
        id: 2,
        name: 'tanya sri srinivasan',
        addressLine1: '24,marutha nagar,bharani street,linganoor,vadavalli',
        addressLine2: 'coimbatore-41',
        city: 'COIMBATORE',
        state: 'TAMIL NADU',
        pincode: '641041',
        country: 'India',
        phone: '9952455519',
        isDefault: false
    }
];

export default function YourAddressPage() {
    const [addresses, setAddresses] = useState(initialAddresses);
    const navigate = useNavigate();
    const [deliveryModalOpen, setDeliveryModalOpen] = useState(false);
    const [addressForInstructions, setAddressForInstructions] = useState(null);
    const [isDefaultModalOpen, setIsDefaultModalOpen] = useState(false);
    const [addressForDefaultModal, setAddressForDefaultModal] = useState(null);
    const location = useLocation();
    const highlightId = new URLSearchParams(location.search).get('highlight');

    React.useEffect(() => {
        if (highlightId && addresses.length > 0) {
            const addr = addresses.find(a => a.id.toString() === highlightId);
            if (addr) {
                // Short timeout to ensure renders are settled
                setTimeout(() => {
                    setAddressForInstructions(addr);
                    setDeliveryModalOpen(true);
                }, 500);
            }
        }
    }, [highlightId, addresses]);

    const handleSetDefault = (id) => {
        setAddresses(addresses.map(addr => ({ ...addr, isDefault: addr.id === id })));
    };

    const handleRemove = (address) => {
        if (address.isDefault) {
            setAddressForDefaultModal(address);
            setIsDefaultModalOpen(true);
        } else {
            setAddresses(addresses.filter(addr => addr.id !== address.id));
        }
    };

    const handleEdit = (address) => {
        if (address.isDefault) {
            setAddressForDefaultModal(address);
            setIsDefaultModalOpen(true);
        } else {
            navigate(`/customer-dashboard/yourprofile/addresses/${address.id}/edit`, { state: { address } });
        }
    };

    return (
        <div className="min-h-screen pt-24 px-6 text-white" style={{ backgroundColor: 'var(--bg-foundation)' }}>
            <div className="max-w-7xl mx-auto">
                <Breadcrumbs items={[
                    { label: 'Dashboard', link: '/customer-dashboard' },
                    { label: 'Your Profile', link: '/customer-dashboard/yourprofile' },
                    { label: 'Your Addresses' }
                ]} />
                <h1 className="text-3xl font-semibold mt-6 mb-8" style={{ color: 'var(--active)' }}>Your Addresses</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: '24px' }}>
                    <AddAddressCard onClick={() => navigate('/customer-dashboard/yourprofile/addresses/add')} />

                    {addresses.map((address) => (
                        <AddressCard
                            key={address.id}
                            address={address}
                            onEdit={handleEdit}
                            onRemove={handleRemove}
                            onSetDefault={handleSetDefault}
                            isHighlighted={highlightId === address.id.toString()}
                            onAddInstructions={(addr) => {
                                setAddressForInstructions(addr);
                                setDeliveryModalOpen(true);
                            }}
                        />
                    ))}
                </div>

                <DeliveryInstructionsModal
                    isOpen={deliveryModalOpen}
                    onClose={() => setDeliveryModalOpen(false)}
                    userName={addressForInstructions?.name}
                    address={addressForInstructions ?
                        `${addressForInstructions.addressLine1}, ${addressForInstructions.addressLine2}, ${addressForInstructions.city}, ${addressForInstructions.state} ${addressForInstructions.pincode}` : ''
                    }
                    onSave={(data) => {
                        console.log('Instructions saved:', addressForInstructions?.id, data);
                        setDeliveryModalOpen(false);
                    }}
                />

                <DefaultAddressEdit
                    isOpen={isDefaultModalOpen}
                    onClose={() => setIsDefaultModalOpen(false)}
                    address={addressForDefaultModal}
                    onChooseNewAddress={() => {
                        setIsDefaultModalOpen(false);
                        navigate('/customer-dashboard/yourprofile/addresses/add');
                    }}
                />
            </div>
        </div>
    );
}
