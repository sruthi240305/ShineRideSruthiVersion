import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package } from 'lucide-react';
import '@/components/AccountMain.css';

const YourOrdersCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="account-card"
            onClick={() => navigate('/customer-dashboard/yourprofile/orders')}
        >
            <div className="account-card-icon-wrap">
                <Package size={40} className="account-icon" />
            </div>
            <div className="account-card-info">
                <h3>Your Orders</h3>
                <p>Track, return, or buy things again</p>
            </div>
        </div>
    );
};

export default YourOrdersCard;