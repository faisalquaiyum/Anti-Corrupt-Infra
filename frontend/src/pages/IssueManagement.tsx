import React, { useState } from 'react';
import { AlertTriangle, CheckCircle, Clock, ArrowUpCircle, Send, Ban, FileCheck } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

interface Issue {
  id: string;
  title: string;
  description: string;
  location: string;
  priority: 'high' | 'medium' | 'low';
  status: 'pending_ward' | 'rejected_ward' | 'pending_govt' | 'rejected_govt' | 'approved' | 'in_progress' | 'completed';
  type: 'citizen' | 'ward';
  submittedBy: string;
  submittedDate: string;
  verifiedBy?: string;
  verificationDate?: string;
  estimatedCost: {
    ai: number;
    wardParshad?: number;
    approved?: number;
  };
  fundStatus?: {
    approved?: number;
    released?: number;
    phases: Array<{
      amount: number;
      date: string;
      status: 'pending' | 'released' | 'utilized';
    }>;
  };
  rejectionReason?: string;
}

const IssueManagement: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([
    {
      id: '1',
      title: 'Road Repair in Sector 7',
      description: 'Multiple potholes need immediate attention',
      location: 'Main Road, Sector 7',
      priority: 'high',
      status: 'pending_ward',
      type: 'citizen',
      submittedBy: 'Rahul Sharma (Citizen)',
      submittedDate: '2024-03-15',
      estimatedCost: {
        ai: 250000,
      }
    },
    {
      id: '2',
      title: 'Street Light Installation',
      description: 'New LED lights needed in residential area',
      location: 'Block B, Sector 7',
      priority: 'medium',
      status: 'pending_govt',
      type: 'ward',
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
      id: '3',
      title: 'Drainage System Upgrade',
      description: 'Upgrade required to prevent waterlogging',
      location: 'Sector 7 Market',
      priority: 'high',
      status: 'approved',
      type: 'citizen',
      submittedBy: 'Priya Verma (Citizen)',
      submittedDate: '2024-03-10',
      verifiedBy: 'Rajesh Kumar (Ward Parshad)',
      verificationDate: '2024-03-12',
      estimatedCost: {
        ai: 450000,
        wardParshad: 500000,
        approved: 475000
      },
      fundStatus: {
        approved: 475000,
        released: 200000,
        phases: [
          {
            amount: 200000,
            date: '2024-03-20',
            status: 'released'
          },
          {
            amount: 275000,
            date: '2024-04-15',
            status: 'pending'
          }
        ]
      }
    }
  ]);

  const handleVerifyIssue = (issueId: string) => {
    setIssues(issues.map(issue => {
      if (issue.id === issueId) {
        return {
          ...issue,
          status: 'pending_govt',
          verifiedBy: 'Rajesh Kumar (Ward Parshad)',
          verificationDate: new Date().toISOString().split('T')[0],
          estimatedCost: {
            ...issue.estimatedCost,
            wardParshad: Math.round(issue.estimatedCost.ai * 1.1) // Example: Ward estimates 10% higher than AI
          }
        };
      }
      return issue;
    }));
  };

  const handleRejectIssue = (issueId: string, level: 'ward' | 'govt') => {
    setIssues(issues.map(issue => {
      if (issue.id === issueId) {
        return {
          ...issue,
          status: level === 'ward' ? 'rejected_ward' : 'rejected_govt',
          rejectionReason: 'Not feasible at this time' // In real app, this would be from a form
        };
      }
      return issue;
    }));
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    return colors[priority as keyof typeof colors];
  };

  const getStatusInfo = (status: string) => {
    const statusMap = {
      pending_ward: {
        label: 'Pending Ward Verification',
        icon: <Clock className="text-yellow-500" />,
        class: 'bg-yellow-100 text-yellow-800'
      },
      rejected_ward: {
        label: 'Rejected by Ward',
        icon: <Ban className="text-red-500" />,
        class: 'bg-red-100 text-red-800'
      },
      pending_govt: {
        label: 'Pending Government Approval',
        icon: <Clock className="text-blue-500" />,
        class: 'bg-blue-100 text-blue-800'
      },
      rejected_govt: {
        label: 'Rejected by Government',
        icon: <Ban className="text-red-500" />,
        class: 'bg-red-100 text-red-800'
      },
      approved: {
        label: 'Approved',
        icon: <CheckCircle className="text-green-500" />,
        class: 'bg-green-100 text-green-800'
      },
      in_progress: {
        label: 'In Progress',
        icon: <ArrowUpCircle className="text-blue-500" />,
        class: 'bg-blue-100 text-blue-800'
      },
      completed: {
        label: 'Completed',
        icon: <CheckCircle className="text-green-500" />,
        class: 'bg-green-100 text-green-800'
      }
    };
    return statusMap[status as keyof typeof statusMap];
  };
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Issue Management</h2>
        <button
         onClick={() => navigate('/report-issue')}
         className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          Raise New Issue
        </button>
      </div>

      <div className="grid gap-6">
        {issues.map((issue) => (
          <div key={issue.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-3">
                  <h3 className="text-xl font-semibold text-gray-800">{issue.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${getPriorityColor(issue.priority)}`}>
                    {issue.priority.toUpperCase()}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${getStatusInfo(issue.status).class}`}>
                    {getStatusInfo(issue.status).label}
                  </span>
                </div>
                <p className="text-gray-600 mt-2">{issue.description}</p>
              </div>
              {issue.type === 'citizen' && issue.status === 'pending_ward' && (
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleVerifyIssue(issue.id)}
                    className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    <FileCheck size={16} />
                    <span>Verify & Forward</span>
                  </button>
                  <button
                    onClick={() => handleRejectIssue(issue.id, 'ward')}
                    className="flex items-center space-x-1 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    <Ban size={16} />
                    <span>Reject</span>
                  </button>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-semibold">{issue.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Submitted By</p>
                <p className="font-semibold">{issue.submittedBy}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date</p>
                <p className="font-semibold">{issue.submittedDate}</p>
              </div>
            </div>

            {issue.verifiedBy && (
              <div className="mb-4 p-3 bg-blue-50 rounded">
                <p className="text-sm text-gray-600">Verified By</p>
                <p className="font-semibold">{issue.verifiedBy}</p>
                <p className="text-sm text-gray-600">on {issue.verificationDate}</p>
              </div>
            )}

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-3">Cost Estimation</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-gray-600">AI Estimated</p>
                  <p className="font-semibold">₹{issue.estimatedCost.ai.toLocaleString()}</p>
                </div>
                {issue.estimatedCost.wardParshad && (
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Ward Parshad Estimated</p>
                    <p className="font-semibold">₹{issue.estimatedCost.wardParshad.toLocaleString()}</p>
                  </div>
                )}
                {issue.estimatedCost.approved && (
                  <div className="bg-green-50 p-3 rounded">
                    <p className="text-sm text-gray-600">Government Approved</p>
                    <p className="font-semibold">₹{issue.estimatedCost.approved.toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>

            {issue.fundStatus && issue.fundStatus.phases.length > 0 && (
              <div className="border-t mt-4 pt-4">
                <h4 className="font-semibold mb-3">Fund Release Status</h4>
                <div className="space-y-2">
                  {issue.fundStatus.phases.map((phase, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                      <div>
                        <p className="text-sm text-gray-600">Phase {index + 1}</p>
                        <p className="font-semibold">₹{phase.amount.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-sm ${
                          phase.status === 'released' ? 'bg-green-100 text-green-800' :
                          phase.status === 'utilized' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {phase.status.toUpperCase()}
                        </span>
                        {getStatusInfo(phase.status === 'released' ? 'approved' : 'pending_govt').icon}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {issue.rejectionReason && (
              <div className="border-t mt-4 pt-4">
                <h4 className="font-semibold mb-2 text-red-600">Rejection Reason</h4>
                <p className="text-gray-700">{issue.rejectionReason}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssueManagement;