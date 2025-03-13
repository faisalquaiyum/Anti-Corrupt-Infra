import React from 'react';
import { Filter, MapPin, Tag } from 'lucide-react';

interface ProjectFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function ProjectFilters({ onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex items-center space-x-2">
          <Filter className="w-5 h-5 text-gray-500" />
          <select 
            className="form-select rounded-md border-gray-300 dark:border-gray-600 
              dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange({ status: e.target.value })}
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="delayed">Delayed</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <Tag className="w-5 h-5 text-gray-500" />
          <select 
            className="form-select rounded-md border-gray-300 dark:border-gray-600 
              dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange({ category: e.target.value })}
          >
            <option value="">All Categories</option>
            <option value="roads">Roads</option>
            <option value="sanitation">Sanitation</option>
            <option value="electricity">Electricity</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search by location..."
            className="form-input rounded-md border-gray-300 dark:border-gray-600 
              dark:bg-gray-700 dark:text-white focus:border-blue-500 focus:ring-blue-500"
            onChange={(e) => onFilterChange({ location: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}