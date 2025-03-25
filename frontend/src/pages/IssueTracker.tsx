import React from 'react';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

interface IssueTrackerProps {
  isDarkMode: boolean;
}

export const IssueTracker: React.FC<IssueTrackerProps> = ({ isDarkMode }) => {
  const issues = [
    {
      id: 1,
      title: 'Road maintenance delayed',
      status: 'pending',
      estimatedTime: '48 hours',
      date: '2024-03-15',
    },
    {
      id: 2,
      title: 'Street light malfunction',
      status: 'in-progress',
      estimatedTime: '24 hours',
      date: '2024-03-14',
    },
    {
      id: 3,
      title: 'Drainage system blocked',
      status: 'resolved',
      estimatedTime: '0 hours',
      date: '2024-03-13',
    },
  ];

  return (
    <div className={`col-span-1 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-xl font-bold mb-4">Issue Tracker</h2>
      <div className="space-y-4">
        {issues.map((issue) => (
          <div key={issue.id} className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{issue.title}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                issue.status === 'pending' ? 'bg-yellow-200 text-yellow-800' :
                issue.status === 'in-progress' ? 'bg-blue-200 text-blue-800' :
                'bg-green-200 text-green-800'
              }`}>
                {issue.status}
              </span>
            </div>
            <div className="flex items-center text-sm gap-2">
              <Clock className="w-4 h-4" />
              <span>Est. Resolution: {issue.estimatedTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};