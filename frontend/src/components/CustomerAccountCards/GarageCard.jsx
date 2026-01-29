import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Car } from 'lucide-react';
import '@/components/AccountMain.css';

const GarageCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="account-card"
            onClick={() => navigate('/customer-dashboard/yourprofile/garage')}
        >
            <div className="account-card-icon-wrap">
                <Car size={40} className="account-icon" />
            </div>
            <div className="account-card-info">
                <h3>Garage</h3>
                <p>Add and manage your vehicles</p>
            </div>
        </div>
    );
};

export default GarageCard;