import { AlertTriangle, Building2, Wallet, PlusCircle } from 'lucide-react';
import { ProjectCard } from './ProjectCard';
import { IssueTracker } from './IssueTracker';
import { ComplaintSection } from './ComplainSection';
import { TransparencySection } from './TransparencySection';
import { PerformanceMetrics } from './PerformanceMetrics';
import ReportIssue from './ReportIssue';
import { useNavigate } from 'react-router-dom';


interface CitizenDashboardProps {
  isDarkMode: boolean;
}

const CitizenDashboard = ({ isDarkMode }: CitizenDashboardProps) => {
  const navigate = useNavigate();
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard Overview</h2>
          <button
            onClick={() => navigate('/report-issue')} // Temporary placeholder logic
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"
          >
            <PlusCircle className="w-5 h-5" />
            Report New Issue
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Quick Stats */}
          <div className="col-span-full grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-8 h-8 text-orange-500" />
                <div>
                  <h3 className="text-lg font-semibold">Active Issues</h3>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center gap-4">
                <Building2 className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-lg font-semibold">Ongoing Projects</h3>
                  <p className="text-2xl font-bold">8</p>
                </div>
              </div>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center gap-4">
                <Wallet className="w-8 h-8 text-green-500" />
                <div>
                  <h3 className="text-lg font-semibold">Budget Allocated</h3>
                  <p className="text-2xl font-bold">$2.4M</p>
                </div>
              </div>
            </div>
          </div>

          {/* Components */}
          <IssueTracker isDarkMode={isDarkMode} />
          <ProjectCard isDarkMode={isDarkMode} />
          <ComplaintSection isDarkMode={isDarkMode} />
          <TransparencySection isDarkMode={isDarkMode} />
          <PerformanceMetrics isDarkMode={isDarkMode} />
        </div>
      </main>
    </div>
  );
};

export default CitizenDashboard;
