import React from 'react';
import { TrendingUp, Clock } from 'lucide-react';

interface PerformanceMetricsProps {
  isDarkMode: boolean;
}

export const PerformanceMetrics: React.FC<PerformanceMetricsProps> = ({ isDarkMode }) => {
  return (
    <div className={`col-span-1 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-xl font-bold mb-4">Performance Metrics</h2>
      <div className="space-y-4">
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className="font-semibold mb-2">Issue Resolution Time</h3>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-500" />
            <span>Average: 36 hours</span>
          </div>
        </div>
        <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <h3 className="font-semibold mb-2">Project Completion Rate</h3>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-500" />
            <span>85% on schedule</span>
          </div>
        </div>
      </div>
    </div>
  );
};