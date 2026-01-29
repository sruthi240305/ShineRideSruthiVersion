import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import '@/components/AccountMain.css';

const LoginSecurityCard = () => {
    const navigate = useNavigate();

    return (
        <div
            className="account-card"
            onClick={() => navigate('/customer-dashboard/yourprofile/login-security')}
        >
            <div className="account-card-icon-wrap">
                <ShieldCheck size={40} className="account-icon" />
            </div>
            <div className="account-card-info">
                <h3>Login & security</h3>
                <p>Edit login, name, and mobile number</p>
            </div>
        </div>
    );
};

export default LoginSecurityCard;