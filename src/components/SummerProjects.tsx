import React from 'react';
import { ExternalLink } from 'lucide-react';

const SummerProjects: React.FC = () => {
  const projects = [
    {
      title: "Hexapod Robot",
      description: "Development of a six-legged walking robot capable of traversing various terrains and obstacles, featuring advanced inverse kinematics and stability control.",
      image: "https://images.pexels.com/photos/8566476/pexels-photo-8566476.jpeg"
    },
    {
      title: "Ball Balancing Bot",
      description: "Creation of a dynamic platform using PID control to balance a ball at any given position, demonstrating precision in control systems and real-time feedback.",
      image: "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg"
    },
    {
      title: "Autonomous Navigation",
      description: "Implementation of SLAM (Simultaneous Localization and Mapping) for autonomous robot navigation in unknown environments using sensor fusion and path planning.",
      image: "https://images.pexels.com/photos/8566437/pexels-photo-8566437.jpeg"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-4">Summer Projects</h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          As secretary, I helped coordinate these cutting-edge robotics projects that pushed the boundaries of our technical capabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gray-700 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.canva.com/design/DAGoGgqEf-U/_TfUcpcd6eD3lqeZmxJ0Gg/view?utm_content=DAGoGgqEf-U&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h28761f692a"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg shadow-md transition-colors duration-300 text-lg"
          >
            View Detailed Project Showcase <ExternalLink size={20} />
          </a>
          <p className="mt-4 text-blue-300 text-sm">
            ✨ Check out our complete summer project documentation with technical details and achievements! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default SummerProjects;