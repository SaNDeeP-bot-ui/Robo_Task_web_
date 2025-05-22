import React from 'react';
import { ClipboardCheck, Clock, Users, Calendar } from 'lucide-react';

const PositionDetails: React.FC = () => {
  const responsibilities = [
    {
      icon: <ClipboardCheck className="text-blue-600" />,
      title: "Administrative Duties",
      description: "Maintain club records, meeting minutes, and handle correspondence with university administration and external partners."
    },
    {
      icon: <Calendar className="text-blue-600" />,
      title: "Event Planning",
      description: "Coordinate club events, workshops, and competitions, ensuring smooth execution and member participation."
    },
    {
      icon: <Users className="text-blue-600" />,
      title: "Member Engagement",
      description: "Facilitate communication between club members, maintain the membership database, and assist with recruitment."
    },
    {
      icon: <Clock className="text-blue-600" />,
      title: "Time Commitment",
      description: "5-7 hours per week during academic year, with potential for increased hours during major events."
    }
  ];

  return (
    <section id="position" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">Secretary Position Details</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
          The secretary plays a vital role in the success of our Robotics Club. Here's what the position entails:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {responsibilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-blue-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blue-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Qualifications</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Strong organizational and communication skills</li>
            <li>Ability to manage time effectively and meet deadlines</li>
            <li>Interest in robotics and technology (technical expertise not required)</li>
            <li>Commitment to attending weekly club meetings</li>
            <li>Previous club or organizational experience preferred but not required</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PositionDetails;