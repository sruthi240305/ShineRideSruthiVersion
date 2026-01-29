import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-purple-400" />
      <input
        type="text"
        placeholder="Search by customer name, car model, or registration..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all"
      />
    </div>
  );
}