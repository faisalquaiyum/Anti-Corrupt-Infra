import React, { useState } from 'react';
import { Camera, MapPin, Upload, Clock, Shield, Send } from 'lucide-react';

interface IssueReport {
  type: string;
  description: string;
  urgency: string;
  location: string;
  images: FileList | null;
}

function ReportIssue() {
  
  const [formData, setFormData] = useState<IssueReport>({
    type: '',
    description: '',
    urgency: 'medium',
    location: '',
    images: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const issueTypes = [
    'Potholes',
    'Broken Roads',
    'Drainage Issues',
    'Street Lights',
    'Bridge Damage',
    'Traffic Signals',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate AI verification and blockchain submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert('Issue reported successfully! Your report has been verified and recorded.');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, images: e.target.files });
    }
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData({ ...formData, location: `${latitude}, ${longitude}` });
      });
    }
  };

  return (
    <div className={`min-h-screen dark:'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-primary dark:text-blue-400">
              Report an Infrastructure Issue
            </h1>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 space-y-6">
              {/* Issue Type */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-white">Issue Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700  text-gray-400 focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select an issue type</option>
                  {issueTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  required
                  placeholder="Please describe the issue in detail..."
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white text-gray-700">Location</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter location or use GPS"
                    required
                  />
                  <button
                    type="button"
                    onClick={getLocation}
                    className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg flex items-center gap-2"
                  >
                    <MapPin size={20} />
                    <span className="hidden sm:inline">Get Location</span>
                  </button>
                </div>
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white text-gray-700">Urgency Level</label>
                <div className="flex gap-4">
                  {['low', 'medium', 'high'].map((level) => (
                    <label key={level} className="flex items-center dark:text-gray-400 text-gray-700">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="mr-2"
                      />
                      <span className="capitalize">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-white text-gray-700">Upload Images/Videos</label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 dark:text-gray-400 rounded-lg p-6 text-center">
                  <input
                    type="file"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center gap-2"
                  >
                    <Upload className="w-8 h-8 text-primary" />
                    <span>Click to upload or drag and drop</span>
                    <span className="text-sm text-gray-500">
                      Support for images and videos
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-white dark:bg-gray-800 p-4 dark:text-gray-400 rounded-lg shadow flex items-center gap-3">
                <Camera className="text-primary " />
                <span>AI-powered verification</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg  dark:text-gray-400 shadow flex items-center gap-3">
                <Shield className="text-primary" />
                <span>Blockchain-backed security</span>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg dark:text-gray-400 shadow flex items-center gap-3">
                <Clock className="text-primary" />
                <span>Real-time updates</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 text-white rounded-lg flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-gray-400'
                  : 'bg-primary hover:bg-primary/90'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Submit Report</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReportIssue;