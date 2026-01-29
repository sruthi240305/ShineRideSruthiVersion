import React, { useState } from 'react';
import { User, Phone, MapPin, Home, Landmark, Building, Map } from 'lucide-react';

export default function AddressForm() {
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Country/Region</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 transition-focus focus-within:border-[var(--active)]">
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
              placeholder="First and Last name"
              className="w-full bg-transparent py-3.5 outline-none text-white placeholder:text-gray-600"
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
              placeholder="10-digit mobile number"
              className="w-full bg-transparent py-3.5 outline-none text-white placeholder:text-gray-600"
            />
          </div>
          <p className="text-[10px] uppercase tracking-tighter mt-1.5 opacity-40 ml-1" style={{ color: 'white' }}>Used to assist delivery</p>
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
                placeholder="6 digits"
                className="w-full bg-transparent py-3.5 outline-none text-white placeholder:text-gray-600"
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
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Address Line 1</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <Building size={18} style={{ color: 'var(--active)' }} />
            <input
              type="text"
              name="flatHouse"
              value={formData.flatHouse}
              onChange={handleChange}
              placeholder="Flat, House no., Building"
              className="w-full bg-transparent py-3.5 outline-none text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-3 text-sm tracking-wide uppercase opacity-70" style={{ color: 'white' }}>Address Line 2</label>
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-4 focus-within:border-[var(--active)]">
            <Home size={18} style={{ color: 'var(--active)' }} />
            <input
              type="text"
              name="areaStreet"
              value={formData.areaStreet}
              onChange={handleChange}
              placeholder="Area, Street, Sector"
              className="w-full bg-transparent py-3.5 outline-none text-white placeholder:text-gray-600"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 py-2">
          <input
            type="checkbox"
            name="isDefault"
            id="isDefault"
            checked={formData.isDefault}
            onChange={handleChange}
            className="w-5 h-5 cursor-pointer rounded border-white/10 bg-white/5"
            style={{ accentColor: 'var(--active)' }}
          />
          <label htmlFor="isDefault" className="text-sm cursor-pointer opacity-70 hover:opacity-100 transition-opacity" style={{ color: 'white' }}>
            Make this my default address
          </label>
        </div>

        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="w-full max-w-xs py-4 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--active)]/20"
            style={{ backgroundColor: 'var(--active)', color: 'var(--active-text)' }}
          >
            Save Address
          </button>
        </div>
      </form>
    </div>
  );
}
