// import React from 'react';
// import { 
//   AlertTriangle, 
//   Calendar, 
//   CircleDollarSign, 
//   MapPin, 
//   ThumbsUp, 
//   Timer,
//   Building2,
//   Eye
// } from 'lucide-react';
// import type { AIInsights, Project } from '../types';

// interface ProjectCardProps {
//   project: Project;
//   aiInsights: AIInsights;
//   onVote: (e: React.MouseEvent) => void;
//   onViewDetails: () => void;
// }

// export function ProjectCard({ project, aiInsights, onVote, onViewDetails }: ProjectCardProps) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
//           <p className="text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
//         </div>
//         <div className="flex items-center space-x-2">
//           <span className={`px-3 py-1 rounded-full text-sm font-medium
//             ${project.riskLevel === 'low' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
//               project.riskLevel === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
//                 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
//             {project.riskLevel.toUpperCase()}
//           </span>
//         </div>
//       </div>

//       <div className="mb-4">
//         <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
//           <div 
//             className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500"
//             style={{ width: `${project.completionPercentage}%` }}
//           />
//         </div>
//         <div className="flex justify-between mt-1">
//           <span className="text-sm text-gray-600 dark:text-gray-300">Progress</span>
//           <span className="text-sm font-medium text-gray-900 dark:text-white">
//             {project.completionPercentage}%
//           </span>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="flex items-center space-x-2">
//           <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           <span className="text-sm text-gray-600 dark:text-gray-300">
//             Started: {new Date(project.startDate).toLocaleDateString()}
//           </span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Timer className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           <span className="text-sm text-gray-600 dark:text-gray-300">
//             Expected: {new Date(project.expectedCompletionDate).toLocaleDateString()}
//           </span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <Building2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           <span className="text-sm text-gray-600 dark:text-gray-300">
//             {project.contractor}
//           </span>
//         </div>
//         <div className="flex items-center space-x-2">
//           <CircleDollarSign className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//           <span className="text-sm text-gray-600 dark:text-gray-300">
//             ${project.budget.toLocaleString()}
//           </span>
//         </div>
//       </div>

//       <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
//             <span className="text-sm text-gray-600 dark:text-gray-300">
//               {project.location.address}
//             </span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={onVote}
//               className="flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 
//                 text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 
//                 dark:hover:bg-blue-800 transition-colors"
//             >
//               <ThumbsUp className="w-4 h-4" />
//               <span>{project.votes}</span>
//             </button>
//             <button
//               onClick={onViewDetails}
//               className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700
//                 text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200
//                 dark:hover:bg-gray-600 transition-colors"
//             >
//               <Eye className="w-4 h-4" />
//               <span>View Details</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {project.aiInsights.riskFactors.length > 0 && (
//         <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
//           <div className="flex items-center space-x-2 mb-2">
//             <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
//             <span className="font-medium text-yellow-800 dark:text-yellow-500">AI Insights</span>
//           </div>
//           <ul className="text-sm text-yellow-700 dark:text-yellow-400 list-disc list-inside">
//             {project.aiInsights.riskFactors.map((factor, index) => (
//               <li key={index}>{factor}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }


import React from "react";
import { 
  AlertTriangle, 
  Calendar, 
  CircleDollarSign, 
  MapPin, 
  ThumbsUp, 
  Timer,
  Building2,
  Eye
} from "lucide-react";
import { Project } from "../types";
import AIInsights from "./AIInsights";
// import type { AIInsights, Project } from "../types";
// import AIInsights from "./aiInsights";
// import AIInsights from "./aiInsights";

interface ProjectCardProps {
  project: Project;
  // aiInsights: AIInsights;
  onVote: (e: React.MouseEvent) => void;
  onViewDetails: () => void;
}

export function ProjectCard({ project, onVote, onViewDetails }: ProjectCardProps) {
  // ✅ Fix: Ensure `riskLevel` and `aiInsights` exist before using them
  const riskLevel = project.riskLevel ? project.riskLevel.toUpperCase() : "UNKNOWN";
  const aiInsights = project.aiInsights || { riskFactors: [] };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${riskLevel === "LOW" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" :
              riskLevel === "MEDIUM" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" :
                "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"}`}>
            {riskLevel}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
          <div 
            className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${project.completionPercentage || 0}%` }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-sm text-gray-600 dark:text-gray-300">Progress</span>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {project.completionPercentage || 0}%
          </span>
        </div>
      </div>

      {/* Project Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Started: {project.startDate ? new Date(project.startDate).toLocaleDateString() : "N/A"}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Timer className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            Expected: {project.expectedCompletionDate ? new Date(project.expectedCompletionDate).toLocaleDateString() : "N/A"}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            {project.contractor || "Unknown Contractor"}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <CircleDollarSign className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-300">
            ${project.budget ? project.budget.toLocaleString() : "0"}
          </span>
        </div>
      </div>

      {/* Location & Actions */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {project.location?.address || "Unknown Location"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={onVote}
              className="flex items-center space-x-1 px-3 py-1 bg-blue-100 dark:bg-blue-900 
                text-blue-800 dark:text-blue-200 rounded-full hover:bg-blue-200 
                dark:hover:bg-blue-800 transition-colors"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{project.votes || 0}</span>
            </button>
            <button
              onClick={onViewDetails}
              className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700
                text-gray-800 dark:text-gray-200 rounded-full hover:bg-gray-200
                dark:hover:bg-gray-600 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI Insights Section */}
      {/* AI Risk Insights Section */}
      <AIInsights project={project} />
      {/* {aiInsights.riskFactors.length > 0 && (
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-500" />
            <span className="font-medium text-yellow-800 dark:text-yellow-500">AI Insights</span>
          </div>
          <ul className="text-sm text-yellow-700 dark:text-yellow-400 list-disc list-inside">
            {aiInsights.riskFactors.map((factor, index) => (
              <li key={index}>{factor}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
}
