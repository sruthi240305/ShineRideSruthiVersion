import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, ShieldCheck, Zap, MapPin, CreditCard, Wallet, Headphones, Car, Gift } from 'lucide-react';
import './AccountMain.css';
import Breadcrumbs from '@/components/Breadcrumbs';

const accountOptions = [
  {
    id: 'orders',
    title: 'Your Orders',
    description: 'Track, return, or buy things again',
    icon: <Package size={40} className="account-icon" />,
    path: '/customer-dashboard/yourprofile/orders'
  },
  {
    id: 'security',
    title: 'Login & security',
    description: 'Edit login, name, and mobile number',
    icon: <ShieldCheck size={40} className="account-icon" />,
    path: '/customer-dashboard/yourprofile/login-security'
  },

  {
    id: 'garage',
    title: 'Garage',
    description: 'Add and manage your vehicles',
    icon: <Car size={40} className="account-icon" />,
    path: '/customer-dashboard/yourprofile/garage'
  },

  {
    id: 'addresses',
    title: 'Your Addresses',
    description: 'Edit addresses for orders and gifts',
    icon: <MapPin size={40} className="account-icon" />,
    path: '/customer-dashboard/yourprofile/addresses'
  },
];

const AccountMain = () => {
  const navigate = useNavigate();

  return (
    <div className="account-main-hub">
      <Breadcrumbs items={[{ label: 'Dashboard', link: '/customer-dashboard' }, { label: 'Your Profile' }]} />
      <h1 className="account-main-title">Your Account</h1>
      <div className="account-grid">
        {accountOptions.map((option) => (
          <div
            key={option.id}
            className="account-card"
            onClick={() => option.path !== '#' && navigate(option.path)}
          >
            <div className="account-card-icon-wrap">
              {option.icon}
            </div>
            <div className="account-card-info">
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountMain;
