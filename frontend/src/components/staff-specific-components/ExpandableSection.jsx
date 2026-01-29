import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ExpandableSection({ title, count, total, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-3 flex items-center justify-between bg-gray-800/50 hover:bg-gray-800 transition-all"
      >
        <span className="text-white font-semibold">
          {title} ({count}/{total})
        </span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-purple-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-purple-400" />
        )}
      </button>

      {isExpanded && children}
    </div>
  );
}