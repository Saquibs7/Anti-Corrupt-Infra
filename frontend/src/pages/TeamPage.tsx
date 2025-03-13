import React from 'react';
import { Linkedin, Twitter, ArrowLeft, ArrowRight, Github } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
    linkedin: string;
    twitter: string;
    github: string;
  }
  
  const teamMembers: TeamMember[] = [
    {
      name: "Saquib Hussain",
      role: "Developer",
      description: "Saquib has experience in machine learning, web development and in project management.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/saquib-hussain-ab17ab1b7",
      twitter: "#",
      github: "https://github.com/Saquibs7",
    },
    {
      name: "Md Faisal Quaiyum",
      role: "Full stack developer",
      description: "Faisal analyzes the user requirement to enhance our AI-powered solutions and improve efficiency.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      linkedin: "#",
      twitter: "#",
      github: "https://github.com/famy1",
    },
    {
      name: "Md Kaif Imteyaz",
      role: "Lead Developer",
      description: "Kaif specializes in AI algorithms and software development for infrastructure management.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      linkedin: "#",
      twitter: "#",
      github: "https://github.com/Kaif-Imteyaz",
    },
    {
      name: "Md Shahbaz",
      role: "Full stack Developer",
      description: "Shahbaz focuses on creating intuitive user experiences that enhance product usability.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
    {
      name: "Gulshan Kumar",
      role: "Full stack Developer",
      description: "Gulshan focuses on creating intuitive user experiences that enhance user experience and support the other teammates.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      linkedin: "#",
      twitter: "#",
      github: "https://github.com/gulshank0",
    },
  ];

const TeamPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 sm:py-8 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center sm:text-left mb-0 sm:mb-12">
          <h1 className="-mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-primary opacity-90 dark:text-white">Meet Our Team</h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-500 max-w-3xl">
            Meet the experts driving our AI-powered solutions.
          </p>
        </div>

        <div className="relative px-4 sm:px-0">
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover shadow-lg"
                      />
                    </div>
                    <h3 className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-base sm:text-lg text-primary mb-2 sm:mb-3">{member.role}</p>
                    <p className="text-sm sm:text-base text-gray-600 text-center max-w-sm sm:max-w-md mb-4 sm:mb-6">
                      {member.description}
                    </p>
                    <div className="flex space-x-4">
                        <a 
                            href={member.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:dark:text-white"
                            aria-label={`${member.name}'s LinkedIn`}
                        >
                            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a 
                            href={member.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:dark:text-white"
                            aria-label={`${member.name}'s Twitter`}
                        >
                            <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                        <a 
                            href={member.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 hover:dark:text-white"
                            aria-label={`${member.name}'s GitHub`}
                        >
                            <Github className="w-5 h-5 sm:w-6 sm:h-6" />
                        </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-lg hover:shadow-xl transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;