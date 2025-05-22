import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const ApplySection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    experience: '',
    motivation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="apply" className="py-16 md:py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Apply Now</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Join our team and help shape the future of the Robotics Club!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold">Application Deadline</h3>
            </div>
            <p className="text-gray-300">May 15, 2025</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold">Term Period</h3>
            </div>
            <p className="text-gray-300">August 2025 - May 2026</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-blue-400" size={24} />
              <h3 className="text-xl font-bold">Time Commitment</h3>
            </div>
            <p className="text-gray-300">5-7 hours per week</p>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-800/30 p-8 rounded-xl shadow-lg">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="year" className="block text-sm font-medium text-gray-300 mb-2">Year of Study</label>
              <select
                id="year"
                name="year"
                required
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                value={formData.year}
                onChange={handleChange}
              >
                <option value="">Select year</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
                <option value="4">Fourth Year</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">Previous Experience</label>
              <textarea
                id="experience"
                name="experience"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Tell us about any relevant experience..."
                value={formData.experience}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-300 mb-2">Motivation</label>
              <textarea
                id="motivation"
                name="motivation"
                rows={4}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Why do you want to be the Robotics Club Secretary?"
                value={formData.motivation}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
        
        <div className="mt-8 text-center">
          <p className="text-gray-300">
            Questions? Contact me at <a href="mailto:sandeep.kumar@university.edu" className="text-blue-400 hover:text-blue-300">sandeep.kumar@university.edu</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplySection;