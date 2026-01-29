import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import '@/components/AccountMain.css';

const YourAddressesCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="account-card"
            onClick={() => navigate('/customer-dashboard/yourprofile/addresses')}
        >
            <div className="account-card-icon-wrap">
                <MapPin size={40} className="account-icon" />
            </div>
            <div className="account-card-info">
                <h3>Your Addresses</h3>
                <p>Edit addresses for orders and gifts</p>
            </div>
        </div>
    );
};

export default YourAddressesCard;