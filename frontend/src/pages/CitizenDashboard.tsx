import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, FileCheck, BarChart3, MessageSquare } from 'lucide-react';

const CitizenDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, Citizen
          </h1>
          <button
            className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <AlertTriangle className="w-5 h-5 mr-2" />
            Report New Issue
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-primary">
                <AlertTriangle size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">5</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Active Reports
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Issues you've reported
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-secondary">
                <FileCheck size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">12</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Resolved Issues
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Successfully completed
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-accent">
                <BarChart3 size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">8</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Projects Voted
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Your participation
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="text-primary">
                <MessageSquare size={24} />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">3</span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              Active Discussions
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Ongoing conversations
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Reports
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        Road Maintenance Required
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Reported 2 days ago
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-yellow-800 bg-yellow-100 rounded-full">
                    In Progress
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Upcoming Projects
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <FileCheck className="w-5 h-5 text-secondary mr-3" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                        Smart Traffic System
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Starting next week
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                    Approved
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default CitizenDashboard;