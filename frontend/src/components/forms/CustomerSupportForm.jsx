import React, { useState } from 'react';
import { Phone, MessageSquare } from 'lucide-react';

const CustomerSupportForm = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('services');
  const [selectedService, setSelectedService] = useState(null);
  const [issueType, setIssueType] = useState('');
  const [issueDetails, setIssueDetails] = useState('');
  const [contactMethod, setContactMethod] = useState('phone');
  const [language, setLanguage] = useState('English');

  const categories = [
    { id: 'services', label: 'Car Wash Services' },
    { id: 'membership', label: 'Membership & Packages' },
    { id: 'billing', label: 'Billing & Payments' },
    { id: 'account', label: 'Account Issues' }
  ];

  const services = [
    { id: 1, name: 'Exterior Wash', date: '28 January 2026', status: 'Completed' },
    { id: 2, name: 'Interior Detailing', date: '25 January 2026', status: 'Completed' },
    { id: 3, name: 'Premium Package', date: '22 January 2026', status: 'Completed' }
  ];

  const issueTypes = [
    'Service Quality',
    'Booking Issue',
    'Payment Problem',
    'Cancellation Request',
    'Refund Status',
    'Other'
  ];

  const handleSubmit = () => {
    console.log({
      category: selectedCategory,
      service: selectedService,
      issueType,
      issueDetails,
      contactMethod,
      language
    });
    // Handle form submission
  };

  return (
    <div className="w-full space-y-6" style={{ backgroundColor: 'var(--bg-foundation)', color: 'var(--text)' }}>
      {/* Step 1: Select Category */}
      <div className="space-y-4" style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--secondary)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            1
          </div>
          <h3 className="text-lg font-semibold">What can we help you with?</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                backgroundColor: selectedCategory === cat.id ? 'var(--primary)' : 'var(--background)',
                color: selectedCategory === cat.id ? 'white' : 'var(--text)',
                border: selectedCategory === cat.id ? 'none' : '1px solid var(--secondary)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {selectedCategory === 'services' && (
          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium mb-2">Select a service:</label>
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className="p-3 rounded-lg cursor-pointer transition-all" style={{
                  backgroundColor: selectedService === service.id ? 'var(--background)' : 'transparent',
                  border: selectedService === service.id ? `2px solid var(--primary)` : `1px solid var(--secondary)`,
                  color: 'var(--text)'
                }}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{service.date}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                    {service.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Step 2: Tell us more about your issue */}
      <div className="space-y-4" style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--secondary)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            2
          </div>
          <h3 className="text-lg font-semibold">Tell us more about your issue</h3>
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-2">Select an issue:</label>
            <select
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all" style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--secondary)',
                border: '1px solid var(--secondary)',
                color: 'var(--text)'
              }}
            >
              <option value="">Choose an issue...</option>
              {issueTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Additional details:</label>
            <textarea
              value={issueDetails}
              onChange={(e) => setIssueDetails(e.target.value)}
              placeholder="Please describe your issue..."
              rows="4"
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all" style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--secondary)',
                border: '1px solid var(--secondary)',
                color: 'var(--text)'
              }}
            />
          </div>
        </div>

        <div className="p-3 rounded-lg" style={{ backgroundColor: 'var(--background)' }}>
          <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>Did You Know?</p>
          <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
            Most car wash issues are resolved within 1-2 business days. You can check your request status anytime from your account.
          </p>
        </div>
      </div>

      {/* Step 3: How would you like to contact us? */}
      <div className="space-y-4" style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: '12px', border: '1px solid var(--secondary)' }}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
            3
          </div>
          <h3 className="text-lg font-semibold">How would you like to contact us?</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Recommended - Phone */}
          <div className="space-y-3">
            <h4 className="font-medium" style={{ color: 'var(--primary)' }}>Recommended</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Average Wait: less than 1 minute</p>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2" style={{
                backgroundColor: 'var(--background)',
                borderColor: 'var(--secondary)',
                border: '1px solid var(--secondary)',
                color: 'var(--text)'
              }}
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Tamil">Tamil</option>
              <option value="Telugu">Telugu</option>
            </select>

            <button
              onClick={() => {
                setContactMethod('phone');
                handleSubmit();
              }}
              className="w-full px-6 py-3 rounded-[50px] font-medium transition-all flex items-center justify-center gap-2" style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid var(--secondary)'
              }}
            >
              <Phone size={18} />
              Call Me
            </button>

            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              Customers who choose phone support resolve issues quickly!
            </p>
          </div>

          {/* Chat Option */}
          <div className="space-y-3">
            <h4 className="font-medium" style={{ color: 'var(--primary)' }}>Alternative</h4>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Average Wait: 2-5 minutes</p>

            <button
              onClick={() => {
                setContactMethod('chat');
                handleSubmit();
              }}
              className="w-full px-6 py-3 rounded-[50px] font-medium transition-all flex items-center justify-center gap-2" style={{
                backgroundColor: 'white',
                border: '1px solid var(--secondary)',
                color: 'black'
              }}
            >
              <MessageSquare size={18} />
              Start Chat
            </button>

            <p className="text-xs" style={{ color: 'var(--muted)' }}>
              Chat with our team for text-based support
            </p>
          </div>
        </div>
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="w-full px-4 py-2 rounded-[50px] transition-all" style={{
            backgroundColor: 'var(--surface)',
            color: 'var(--text)',
            border: '1px solid var(--secondary)'
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default CustomerSupportForm;
