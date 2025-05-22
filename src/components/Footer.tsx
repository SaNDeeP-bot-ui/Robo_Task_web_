import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Robotics Club</h3>
            <p className="text-gray-400 text-sm mt-1">Building the future, one robot at a time</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <a href="#intro" className="text-gray-300 hover:text-white transition-colors">Introduction</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Summer Projects</a>
            <a href="#position" className="text-gray-300 hover:text-white transition-colors">Position Details</a>
            <a href="#apply" className="text-gray-300 hover:text-white transition-colors">Apply Now</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} University Robotics Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;