import React, { useState } from 'react';

export default function StaffDashboardDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  const INITIAL_CARS = [
    {
      id: 1,
      customerName: "Rajesh Kumar",
      phoneNumber: "+91 98765 43210",
      carModel: "Honda City",
      registrationNumber: "TN 01 AB 1234",
      serviceType: "Full Service",
      scheduledTime: "09:00 AM",
      estimatedDuration: 120,
      status: "pending",
      priority: "high"
    },
    {
      id: 2,
      customerName: "Priya Sharma",
      phoneNumber: "+91 98765 43211",
      carModel: "Maruti Swift",
      registrationNumber: "TN 02 CD 5678",
      serviceType: "Oil Change",
      scheduledTime: "10:30 AM",
      estimatedDuration: 45,
      status: "in-progress",
      priority: "medium"
    },
    {
      id: 3,
      customerName: "Arun Vijay",
      phoneNumber: "+91 98765 43212",
      carModel: "Hyundai Creta",
      registrationNumber: "TN 03 EF 9012",
      serviceType: "Tire Service",
      scheduledTime: "11:00 AM",
      estimatedDuration: 60,
      status: "pending",
      priority: "medium"
    },
    {
      id: 4,
      customerName: "Lakshmi Devi",
      phoneNumber: "+91 98765 43213",
      carModel: "Tata Nexon",
      registrationNumber: "TN 04 GH 3456",
      serviceType: "Full Service",
      scheduledTime: "02:00 PM",
      estimatedDuration: 150,
      status: "pending",
      priority: "high"
    }
  ];

  const stats = {
    total: INITIAL_CARS.length,
    pending: INITIAL_CARS.filter(car => car.status === 'pending').length,
    inProgress: INITIAL_CARS.filter(car => car.status === 'in-progress').length,
    completed: INITIAL_CARS.filter(car => car.status === 'completed').length,
    highPriority: INITIAL_CARS.filter(car => car.priority === 'high').length
  };

  const filteredCars = INITIAL_CARS.filter(car => {
    const matchesSearch =
      car.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || car.status === statusFilter;
    const matchesPriority = priorityFilter === 'all' || car.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', padding: '40px 24px', color: '#ffffff', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: '#ffffff' }}>Service Dashboard</h1>
        <p style={{ color: '#888888', fontSize: '16px' }}>Manage vehicle services and repairs</p>
      </div>

      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>Total Services</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#a855f7' }}>{stats.total}</p>
        </div>
        <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>Pending</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#fbbf24' }}>{stats.pending}</p>
        </div>
        <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>In Progress</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#60a5fa' }}>{stats.inProgress}</p>
        </div>
        <div style={{ backgroundColor: '#1a1a2e', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>High Priority</p>
          <p style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444' }}>{stats.highPriority}</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ backgroundColor: '#1a1a2e', padding: '16px', borderRadius: '8px', border: '1px solid #333', marginBottom: '32px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Search by name, model, or registration..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              minWidth: '200px',
              backgroundColor: '#0a0a0a',
              border: '1px solid #333',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              outline: 'none'
            }}
          />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid #333',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              outline: 'none'
            }}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid #333',
              color: '#fff',
              padding: '8px 12px',
              borderRadius: '6px',
              outline: 'none'
            }}
          >
            <option value="all">All Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>

      {/* Service Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <div key={car.id} style={{
              backgroundColor: '#1a1a2e',
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>
                  {car.customerName} - {car.carModel}
                </h3>
                <p style={{ color: '#888', fontSize: '14px', marginBottom: '4px' }}>{car.registrationNumber}</p>
                <p style={{ color: '#888', fontSize: '14px' }}>{car.serviceType} • {car.scheduledTime}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{
                  display: 'inline-block',
                  backgroundColor: car.status === 'pending' ? '#fbbf24' : car.status === 'in-progress' ? '#60a5fa' : '#10b981',
                  color: '#000',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '8px'
                }}>
                  {car.status}
                </span>
                <br />
                <span style={{
                  display: 'inline-block',
                  backgroundColor: car.priority === 'high' ? '#ef4444' : car.priority === 'medium' ? '#f59e0b' : '#10b981',
                  color: '#fff',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}>
                  {car.priority.toUpperCase()}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div style={{
            backgroundColor: '#1a1a2e',
            border: '1px solid #333',
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '18px', color: '#888' }}>No services found</p>
          </div>
        )}
      </div>
    </div>
  );
}
