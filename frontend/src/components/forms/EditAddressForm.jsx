import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { User, Phone, MapPin, Home, Landmark, Building, Map } from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function EditAddressForm() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const address = location.state?.address || null;

  const [formData, setFormData] = useState({
    country: 'India',
    fullName: '',
    mobile: '',
    pincode: '',
    flatHouse: '',
    areaStreet: '',
    landmark: '',
    townCity: '',
    state: '',
    isDefault: false,
    deliveryInstructions: ''
  });

  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (address) {
      setFormData({
        country: address.country || 'India',
        fullName: address.name || '',
        mobile: address.phone || '',
        pincode: address.pincode || '',
        flatHouse: address.addressLine1 || '',
        areaStreet: address.addressLine2 || '',
        landmark: '',
        townCity: address.city || '',
        state: address.state || '',
        isDefault: !!address.isDefault,
        deliveryInstructions: ''
      });
    }
  }, [address]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated address:', { id, ...formData });
    navigate('/customer-dashboard/yourprofile/addresses');
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Country/Region</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <Map size={18} style={{ color: 'var(--active)' }} />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-transparent py-3.5 outline-none text-white appearance-none"
            >
              <option value="India" className="bg-black">India</option>
              <option value="USA" className="bg-black">USA</option>
              <option value="UK" className="bg-black">UK</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Full name</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <User size={18} style={{ color: 'var(--active)' }} />
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-transparent py-3.5 outline-none text-white"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Mobile number</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <Phone size={18} style={{ color: 'var(--active)' }} />
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="w-full bg-transparent py-3.5 outline-none text-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Pincode</label>
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
              <MapPin size={18} style={{ color: 'var(--active)' }} />
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full bg-transparent py-3.5 outline-none text-white"
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Town/City</label>
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
              <MapPin size={18} style={{ color: 'var(--active)' }} />
              <input
                type="text"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                className="w-full bg-transparent py-3.5 outline-none text-white"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Flat/House No.</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <Building size={18} style={{ color: 'var(--active)' }} />
            <input
              type="text"
              name="flatHouse"
              value={formData.flatHouse}
              onChange={handleChange}
              className="w-full bg-transparent py-3.5 outline-none text-white"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Area/Street</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <Home size={18} style={{ color: 'var(--active)' }} />
            <input
              type="text"
              name="areaStreet"
              value={formData.areaStreet}
              onChange={handleChange}
              className="w-full bg-transparent py-3.5 outline-none text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isDefault"
            id="isDefaultEdit"
            checked={formData.isDefault}
            onChange={handleChange}
            className="w-5 h-5 cursor-pointer rounded border-white/10 bg-white/5"
            style={{ accentColor: 'var(--active)' }}
          />
          <label htmlFor="isDefaultEdit" className="text-sm cursor-pointer opacity-70 hover:opacity-100 transition-opacity" style={{ color: 'white' }}>
            Make this my default address
          </label>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="w-full max-w-xs py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--active)]/20"
            style={{ backgroundColor: 'var(--active)', color: 'var(--active-text)' }}
          >
            Update Address
          </button>
        </div>
      </form>
    </div>
  );
}
