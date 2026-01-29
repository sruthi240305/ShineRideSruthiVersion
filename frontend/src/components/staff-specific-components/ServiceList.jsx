import React from 'react';
import ServiceTimer from './ServiceTimer';

export default function ServiceList({ services, onServiceComplete, onServiceStatusChange }) {
  return (
    <div className="p-5 space-y-3">
      {services.map((service) => (
        <ServiceTimer
          key={service.id}
          service={service}
          onComplete={() => onServiceComplete(service.id)}
          onStatusChange={(status) => onServiceStatusChange(service.id, status)}
        />
      ))}
    </div>
  );
}