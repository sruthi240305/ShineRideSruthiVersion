import React from 'react';
import { Filter } from 'lucide-react';
import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';

export default function FilterBar({ 
  searchTerm, 
  setSearchTerm, 
  statusFilter, 
  setStatusFilter, 
  priorityFilter, 
  setPriorityFilter 
}) {
  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' }
  ];

  const priorityOptions = [
    { value: 'all', label: 'All Priority' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black border border-purple-500/30 rounded-xl p-4 mb-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-400" />
          <FilterDropdown
            value={statusFilter}
            onChange={setStatusFilter}
            options={statusOptions}
            label="Status Filter"
          />
        </div>

        <FilterDropdown
          value={priorityFilter}
          onChange={setPriorityFilter}
          options={priorityOptions}
          label="Priority Filter"
        />
      </div>
    </div>
  );
}