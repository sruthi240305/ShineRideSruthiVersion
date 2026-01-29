import React from 'react';
import { AlertCircle } from 'lucide-react';

export default function InstructionsPanel({ instructions }) {
  if (!instructions) return null;

  return (
    <div className="mt-3 flex items-start gap-2 p-3 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
      <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-yellow-300 text-sm font-semibold mb-1">Special Instructions:</p>
        <p className="text-yellow-200 text-sm">{instructions}</p>
      </div>
    </div>
  );
}