import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { AlertTriangle, CheckCircle, Clock, DollarSign, Users, Activity, FileCheck } from 'lucide-react';
import WardProfile from './WardProfile';
import IssueManagement from './IssueManagement';

const projectData = [
  { name: 'Road Construction', completed: 65, pending: 35 },
  { name: 'Bridge Repair', completed: 80, pending: 20 },
  { name: 'Sewage System', completed: 45, pending: 55 },
  { name: 'Street Lighting', completed: 90, pending: 10 },
];

const issueData = [
  { name: 'Pending Ward', value: 25, color: '#f59e0b' },
  { name: 'Pending Govt', value: 30, color: '#3b82f6' },
  { name: 'Approved', value: 35, color: '#10b981' },
  { name: 'Rejected', value: 10, color: '#ef4444' },
];

const WardDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ward' | 'govt'>('ward');

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <WardProfile />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Projects"
          value="24"
          icon={<Activity className="text-blue-900" />}
          trend="+12%"
        />
        <StatCard
          title="Pending Verification"
          value="8"
          icon={<FileCheck className="text-orange-500" />}
          trend="+3"
        />
        <StatCard
          title="Approved Issues"
          value="16"
          icon={<CheckCircle className="text-green-500" />}
          trend="+5"
        />
        <StatCard
          title="Fund Utilization"
          value="₹4.2Cr"
          icon={<DollarSign className="text-purple-500" />}
          trend="+18%"
        />
      </div>

      <div className="mb-8">
        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'ward'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('ward')}
          >
            Ward Dashboard
          </button>
        </div>
        <IssueManagement />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Project Progress</h3>
          <BarChart width={500} height={300} data={projectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="completed" fill="#1E3A8A" />
            <Bar dataKey="pending" fill="#00E5FF" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Issue Status Distribution</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={issueData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {issueData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
}> = ({ title, value, icon, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-center justify-between mb-4">
      <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
      <span className="text-green-500 text-sm">{trend}</span>
    </div>
    <h3 className="text-gray-600 text-sm">{title}</h3>
    <p className="text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

export default WardDashboard;