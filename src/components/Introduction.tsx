import React from 'react';

const Introduction: React.FC = () => {
  return (
    <section id="intro" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg" 
                alt="Sandeep Kumar - Robotics Club Secretary" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
                <div className="text-white p-4 text-center w-full">
                  <h2 className="text-xl font-bold">Sandeep Kumar</h2>
                  <p className="text-sm opacity-90">Current Secretary</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Meet Your Robotics Club Secretary</h1>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Hello! I'm Sandeep Kumar, the current secretary of the Robotics Club. I've had the 
              privilege of serving our innovative community for the past year, coordinating exciting projects
              and ensuring smooth operations of all club activities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As my term comes to an end, we're looking for a passionate and organized individual to take 
              on this rewarding role and continue building our robotics community.
            </p>
            <a 
              href="#apply" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
            >
              Learn About the Position
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;