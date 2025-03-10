import React from 'react';
import { motion } from 'framer-motion';

const ReportIssue = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Report an Issue
        </h1>
        {/* Report form will be implemented later */}
      </motion.div>
    </div>
  );
};

export default ReportIssue;