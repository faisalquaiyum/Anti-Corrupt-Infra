import React, { useState } from 'react';
import { MessageSquare, AlertTriangle } from 'lucide-react';

interface ComplaintSectionProps {
  isDarkMode: boolean;
}

export const ComplaintSection: React.FC<ComplaintSectionProps> = ({ isDarkMode }) => {
  const [complaint, setComplaint] = useState('');

  return (
    <div className={`col-span-1 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-xl font-bold mb-4">File a Complaint</h2>
      <div className="space-y-4">
        <textarea
          className={`w-full p-3 rounded-lg ${
            isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-50'
          } border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
          rows={4}
          placeholder="Describe your complaint..."
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" />
            Submit Complaint
          </button>
        </div>
      </div>
    </div>
  );
};