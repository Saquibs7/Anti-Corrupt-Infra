import React from "react";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  match: string;
  employmentType: string;
  workMode: string;
  experience: string;
  postedTime: string;
  applicants: number;
  salary: string;
  logo: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  match,
  employmentType,
  workMode,
  experience,
  postedTime,
  applicants,
  salary,
  logo,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 w-full max-w-sm">
      {/* Job Header */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt={company} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{company} • {location}</p>
        </div>
      </div>

      {/* Job Details */}
      <p className="text-gray-500 text-sm mt-2">{match}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs dark:text-white">{employmentType}</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs dark:text-white">{workMode}</span>
        <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs dark:text-white">{experience}</span>
      </div>

      {/* Meta Info */}
      <p className="text-gray-400 text-xs mt-2">{postedTime} • {applicants} Applicants</p>

      {/* Salary & Apply Button */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-blue-800 font-semibold text-lg dark:text-white">{salary}/m</p>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
