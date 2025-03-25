import React from 'react';
import { Building2, ChevronUp } from 'lucide-react';

interface ProjectCardProps {
  isDarkMode: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Smart Traffic System',
      budget: '$1.2M',
      progress: 75,
      votes: 156,
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 2,
      title: 'Public Park Renovation',
      budget: '$800K',
      progress: 45,
      votes: 89,
      image: 'https://images.unsplash.com/photo-1596140096558-9f52a3a8f7d2?auto=format&fit=crop&q=80&w=500',
    },
  ];

  return (
    <div className={`col-span-1 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <h2 className="text-xl font-bold mb-4">Ongoing Projects</h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Budget: {project.budget}</span>
                <span className="text-sm">Progress: {project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <button className="flex items-center gap-2 text-sm text-primary hover:text-blue-600">
                <ChevronUp className="w-4 h-4" />
                <span>Upvote ({project.votes})</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};