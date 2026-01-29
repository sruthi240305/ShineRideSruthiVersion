import React from 'react';

export default function StatCard({ icon: Icon, label, value, bgColor }) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-xl p-5 hover:border-purple-500/50 transition-all">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-purple-300 text-sm font-medium mb-1">{label}</p>
          <p className="text-white text-3xl font-bold">{value}</p>
        </div>
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${bgColor} flex items-center justify-center shadow-lg`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );
}