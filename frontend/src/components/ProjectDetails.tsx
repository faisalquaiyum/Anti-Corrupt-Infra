import React from 'react';
import {
  Calendar,
  CircleDollarSign,
  Clock,
  FileText,
  Image as ImageIcon,
  AlertTriangle,
  Users,
  ChevronRight,
  Flag,
  CheckCircle2,
  AlertCircle,
  ThumbsUp,
} from 'lucide-react';
import type { Project, ProjectPhase } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

function PhaseTimeline({ phases }: { phases: ProjectPhase[] }) {
  return (
    <div className="relative">
      {phases.map((phase, index) => (
        <div key={phase.id} className="mb-8 flex items-start">
          <div className="flex items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center
              ${phase.status === 'completed' ? 'bg-green-500' :
                phase.status === 'ongoing' ? 'bg-blue-500' : 'bg-gray-300'}
            `}>
              {phase.status === 'completed' ? (
                <CheckCircle2 className="w-5 h-5 text-white" />
              ) : phase.status === 'ongoing' ? (
                <Clock className="w-5 h-5 text-white" />
              ) : (
                <ChevronRight className="w-5 h-5 text-white" />
              )}
            </div>
            {index < phases.length - 1 && (
              <div className="h-full w-0.5 bg-gray-300 absolute ml-4" />
            )}
          </div>
          <div className="ml-4">
            <h4 className="text-lg font-semibold">{phase.name}</h4>
            <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
            <div className="mt-2 flex items-center space-x-4 text-sm">
              <span>{new Date(phase.startDate).toLocaleDateString()}</span>
              <span>→</span>
              <span>{new Date(phase.endDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Project Overview */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Start Date</p>
                  <p className="font-medium">{new Date(project.startDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Expected Completion</p>
                  <p className="font-medium">{new Date(project.expectedCompletionDate).toLocaleDateString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CircleDollarSign className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Total Budget</p>
                  <p className="font-medium">${project.budget.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Flag className="w-5 h-5 text-blue-500" />
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium capitalize">{project.category}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Progress and AI Insights */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Progress & AI Insights</h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>Overall Progress</span>
                  <span>{project.completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${project.completionPercentage}%` }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <p className="font-medium">AI Risk Assessment</p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      {project.aiInsights.riskFactors.map((factor, index) => (
                        <li key={index}>{factor}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Project Timeline</h3>
            <PhaseTimeline phases={project.phases} />
          </section>

          {/* Officials and Contractors */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Project Officials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.officials.map(official => (
                <div key={official.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={official.imageUrl}
                      alt={official.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{official.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{official.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Financial Tracking */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Financial Tracking</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Hash
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {project.transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {new Date(transaction.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        ${transaction.amount.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {transaction.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono">
                        {transaction.hash}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Media Gallery */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Media Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.media.map(item => (
                <div key={item.id} className="relative group">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      {item.type === 'video' ? (
                        <ImageIcon className="w-8 h-8 text-gray-400" />
                      ) : (
                        <FileText className="w-8 h-8 text-gray-400" />
                      )}
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-lg flex items-center justify-center">
                    <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Issues and Reports */}
          <section>
            <h3 className="text-xl font-semibold mb-4">Issues & Reports</h3>
            <div className="space-y-4">
              {project.issues.map(issue => (
                <div key={issue.id} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-1" />
                      <div>
                        <h4 className="font-medium">{issue.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{issue.description}</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Reported on {new Date(issue.dateReported).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm
                      ${issue.status === 'resolved' ? 'bg-green-100 text-green-800' :
                        issue.status === 'investigating' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'}`}>
                      {issue.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}