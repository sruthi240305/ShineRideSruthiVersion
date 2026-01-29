import React from 'react';
import { Car } from 'lucide-react';

export default function CarHeader({ car }) {
  const getPriorityBadge = () => {
    const colors = {
      low: 'bg-green-900/30 border-green-500/50 text-green-400',
      medium: 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400',
      high: 'bg-red-900/30 border-red-500/50 text-red-400'
    };
    return colors[car.priority];
  };

  const getStatusBadge = () => {
    const colors = {
      pending: 'bg-gray-700 text-gray-300',
      'in-progress': 'bg-purple-600 text-white',
      completed: 'bg-green-600 text-white'
    };
    return colors[car.status];
  };

  return (
    <div className="flex items-start justify-between mb-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center">
          <Car className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold text-lg">{car.carModel}</h3>
          <p className="text-purple-300 text-sm">{car.registrationNumber}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityBadge()}`}>
          {car.priority.toUpperCase()}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge()}`}>
          {car.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>
    </div>
  );
}