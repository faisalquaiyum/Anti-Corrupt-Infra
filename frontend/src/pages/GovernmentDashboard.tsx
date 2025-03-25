import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { CheckCircle, Clock, DollarSign, FileCheck, Ban } from 'lucide-react';

const projectData = [
  { name: 'Ward 1', approved: 65, pending: 35 },
  { name: 'Ward 2', approved: 80, pending: 20 },
  { name: 'Ward 3', approved: 45, pending: 55 },
  { name: 'Ward 4', approved: 90, pending: 10 },
];

const issueData = [
  { name: 'Pending Approval', value: 30, color: '#3b82f6' },
  { name: 'Approved', value: 45, color: '#10b981' },
  { name: 'Rejected', value: 25, color: '#ef4444' },
];

interface PendingIssue {
  id: string;
  title: string;
  description: string;
  location: string;
  ward: string;
  priority: 'high' | 'medium' | 'low';
  submittedBy: string;
  submittedDate: string;
  verifiedBy: string;
  verificationDate: string;
  estimatedCost: {
    ai: number;
    wardParshad: number;
  };
}

const GovernmentPortal: React.FC = () => {
  const [pendingIssues] = useState<PendingIssue[]>([
    {
      id: '1',
      title: 'Street Light Installation',
      description: 'New LED lights needed in residential area',
      location: 'Block B, Sector 7',
      ward: 'Ward 7',
      priority: 'medium',
      submittedBy: 'Ward Office',
      submittedDate: '2024-03-18',
      verifiedBy: 'Rajesh Kumar (Ward Parshad)',
      verificationDate: '2024-03-19',
      estimatedCost: {
        ai: 150000,
        wardParshad: 180000,
      }
    },
    {
      id: '2',
      title: 'Drainage System Upgrade',
      description: 'Major drainage system upgrade needed',
      location: 'Sector 4 Market',
      ward: 'Ward 4',
      priority: 'high',
      submittedBy: 'Ward Office',
      submittedDate: '2024-03-20',
      verifiedBy: 'Amit Singh (Ward Parshad)',
      verificationDate: '2024-03-21',
      estimatedCost: {
        ai: 450000,
        wardParshad: 500000,
      }
    }
  ]);

  const handleApproveIssue = (issueId: string) => {
    // Implementation for approving issue and allocating funds
  };

  const handleRejectIssue = (issueId: string) => {
    // Implementation for rejecting issue
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Government Portal</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          title="Total Requests"
          value="156"
          icon={<FileCheck className="text-blue-900" />}
          trend="+12%"
        />
        <StatCard
          title="Pending Approval"
          value="28"
          icon={<Clock className="text-orange-500" />}
          trend="+8"
        />
        <StatCard
          title="Approved Projects"
          value="89"
          icon={<CheckCircle className="text-green-500" />}
          trend="+15"
        />
        <StatCard
          title="Total Fund Allocated"
          value="₹12.8Cr"
          icon={<DollarSign className="text-purple-500" />}
          trend="+18%"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Ward-wise Project Status</h3>
          <BarChart width={500} height={300} data={projectData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="approved" fill="#10b981" />
            <Bar dataKey="pending" fill="#3b82f6" />
          </BarChart>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Request Status Distribution</h3>
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

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Pending Approvals</h2>
        <div className="space-y-6">
          {pendingIssues.map((issue) => (
            <div key={issue.id} className="border-b pb-6 last:border-b-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{issue.title}</h3>
                  <p className="text-gray-600">{issue.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleApproveIssue(issue.id)}
                    className="flex items-center space-x-1 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    <CheckCircle size={16} />
                    <span>Approve & Allocate Funds</span>
                  </button>
                  <button
                    onClick={() => handleRejectIssue(issue.id)}
                    className="flex items-center space-x-1 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    <Ban size={16} />
                    <span>Reject</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-600">Ward</p>
                  <p className="font-semibold">{issue.ward}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="font-semibold">{issue.location}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Priority</p>
                  <p className="font-semibold">{issue.priority.toUpperCase()}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-gray-600">AI Estimated Cost</p>
                  <p className="font-semibold">₹{issue.estimatedCost.ai.toLocaleString()}</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-gray-600">Ward Parshad Estimated Cost</p>
                  <p className="font-semibold">₹{issue.estimatedCost.wardParshad.toLocaleString()}</p>
                </div>
              </div>
            </div>
          ))}
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

export default GovernmentPortal;