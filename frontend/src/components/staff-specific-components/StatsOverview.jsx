import React from 'react';
import { Car, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import StatCard from './StatCard';

export default function StatsOverview({ cars }) {
  const stats = [
    {
      icon: Car,
      label: "Total Cars",
      value: cars.length,
      bgColor: "from-purple-600 to-purple-500"
    },
    {
      icon: Clock,
      label: "In Progress",
      value: cars.filter(car => car.status === 'in-progress').length,
      bgColor: "from-blue-600 to-blue-500"
    },
    {
      icon: CheckCircle,
      label: "Completed",
      value: cars.filter(car => car.status === 'completed').length,
      bgColor: "from-green-600 to-green-500"
    },
    {
      icon: AlertCircle,
      label: "Pending",
      value: cars.filter(car => car.status === 'pending').length,
      bgColor: "from-yellow-600 to-yellow-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}