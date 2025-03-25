import React from 'react';
import { Wallet, TrendingUp } from 'lucide-react';

interface TransparencySectionProps {
  isDarkMode: boolean;
}

export const TransparencySection: React.FC<TransparencySectionProps> = ({ isDarkMode }) => {
  const transactions = [
    {
      id: 1,
      project: 'Smart Traffic System',
      amount: '$250,000',
      date: '2024-03-15',
      phase: 'Implementation',
    },
    {
      id: 2,
      project: 'Public Park Renovation',
      amount: '$180,000',
      date: '2024-03-14',
      phase: 'Planning',
    },
  ];

  return (
    <div className={`col-span-1 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-xl font-bold mb-4">Financial Transparency</h2>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} flex items-center justify-between`}
          >
            <div>
              <h3 className="font-semibold">{tx.project}</h3>
              <p className="text-sm text-gray-500">{tx.phase}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{tx.amount}</p>
              <p className="text-sm text-gray-500">{tx.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};