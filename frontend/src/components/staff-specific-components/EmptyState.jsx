import React from 'react';
import { inbox } from 'lucide-react';

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gradient-to-br from-gray-900 to-black rounded-lg border border-purple-500/30">
      <div className="text-center">
        <p className="text-4xl mb-4">📭</p>
        <h3 className="text-xl font-semibold text-white mb-2">No Services Found</h3>
        <p className="text-purple-300">No services match your current filters. Try adjusting your search criteria.</p>
      </div>
    </div>
  );
};

export default EmptyState;
