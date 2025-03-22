// import React, { useState, useEffect } from 'react';
// import { Moon, Sun, Map } from 'lucide-react';
// import { ProjectCard } from '../components/ProjectCard';
// import { ProjectFilters } from '../components/ProjectFilters';
// import { ProjectDetails } from '../components/ProjectDetails';
// import type { Project } from '../types';

// // Sample data - In a real app, this would come from an API
// const MOCK_PROJECTS: Project[] = [
//   {
//     id: '1',
//     name: 'Central Metro Line Extension',
//     description: 'Extending the metro line to connect suburban areas with improved infrastructure and accessibility.',
//     startDate: '2024-01-15',
//     expectedCompletionDate: '2025-06-30',
//     contractor: 'Metro Infrastructure Co.',
//     budget: 15000000,
//     completionPercentage: 35,
//     location: {
//       lat: 40.7128,
//       lng: -74.0060,
//       address: 'Downtown Metro District'
//     },
//     category: 'roads',
//     priority: 1,
//     votes: 256,
//     riskLevel: 'medium',
//     aiInsights: {
//       estimatedCompletion: '2025-07-15',
//       delayProbability: 0.3,
//       riskFactors: [
//         'Weather conditions may affect construction timeline',
//         'Supply chain delays possible for specialized equipment'
//       ],
//       qualityAssessment: {
//         score: 85,
//         findings: ['Construction quality meets standards', 'Material quality is excellent']
//       }
//     },
//     transactions: [
//       {
//         date: '2024-01-15',
//         amount: 2000000,
//         description: 'Initial funding release',
//         hash: '0x123...abc',
//         phase: 'Phase 1'
//       },
//       {
//         date: '2024-02-15',
//         amount: 3000000,
//         description: 'Equipment procurement',
//         hash: '0x456...def',
//         phase: 'Phase 1'
//       }
//     ],
//     officials: [
//       {
//         id: '1',
//         name: 'John Smith',
//         role: 'Project Manager',
//         department: 'Infrastructure',
//         contactInfo: 'john.smith@metro.gov',
//         imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//       },
//       {
//         id: '2',
//         name: 'Sarah Johnson',
//         role: 'Chief Engineer',
//         department: 'Engineering',
//         contactInfo: 'sarah.j@metro.gov',
//         imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//       }
//     ],
//     phases: [
//       {
//         id: '1',
//         name: 'Planning & Design',
//         description: 'Initial planning and detailed design phase',
//         startDate: '2024-01-15',
//         endDate: '2024-03-15',
//         status: 'completed',
//         completionPercentage: 100
//       },
//       {
//         id: '2',
//         name: 'Foundation Work',
//         description: 'Ground preparation and foundation laying',
//         startDate: '2024-03-16',
//         endDate: '2024-06-30',
//         status: 'ongoing',
//         completionPercentage: 45
//       },
//       {
//         id: '3',
//         name: 'Construction',
//         description: 'Main construction phase',
//         startDate: '2024-07-01',
//         endDate: '2025-03-30',
//         status: 'upcoming',
//         completionPercentage: 0
//       }
//     ],
//     media: [
//       {
//         id: '1',
//         type: 'image',
//         url: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         title: 'Site Overview',
//         description: 'Aerial view of construction site',
//         uploadDate: '2024-02-01'
//       },
//       {
//         id: '2',
//         type: 'document',
//         url: '#',
//         title: 'Technical Specifications',
//         description: 'Detailed technical specifications document',
//         uploadDate: '2024-01-15'
//       }
//     ],
//     issues: [
//       {
//         id: '1',
//         title: 'Material Delivery Delay',
//         description: 'Steel shipment delayed by 2 weeks',
//         status: 'resolved',
//         dateReported: '2024-02-01',
//         reportedBy: 'Site Manager'
//       }
//     ]
//   },
//   {
//     id: '2',
//     name: 'Smart Grid Implementation',
//     description: 'Modernizing the city\'s electrical grid with smart meters and renewable energy integration.',
//     startDate: '2024-02-01',
//     expectedCompletionDate: '2024-12-31',
//     contractor: 'EcoGrid Solutions',
//     budget: 8500000,
//     completionPercentage: 45,
//     location: {
//       lat: 40.7282,
//       lng: -73.9942,
//       address: 'East Industrial Zone'
//     },
//     category: 'electricity',
//     priority: 2,
//     votes: 189,
//     riskLevel: 'low',
//     aiInsights: {
//       estimatedCompletion: '2024-12-15',
//       delayProbability: 0.1,
//       riskFactors: [],
//       qualityAssessment: {
//         score: 92,
//         findings: ['Implementation follows best practices', 'System reliability is high']
//       }
//     },
//     transactions: [
//       {
//         date: '2024-02-01',
//         amount: 1500000,
//         description: 'Initial phase funding',
//         hash: '0x456...def',
//         phase: 'Phase 1'
//       }
//     ],
//     officials: [
//       {
//         id: '3',
//         name: 'Michael Chen',
//         role: 'Technical Lead',
//         department: 'Smart Infrastructure',
//         contactInfo: 'michael.c@ecogrid.com',
//         imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//       }
//     ],
//     phases: [
//       {
//         id: '4',
//         name: 'System Design',
//         description: 'Smart grid system architecture and planning',
//         startDate: '2024-02-01',
//         endDate: '2024-03-31',
//         status: 'completed',
//         completionPercentage: 100
//       },
//       {
//         id: '5',
//         name: 'Implementation',
//         description: 'Smart meter installation and grid upgrades',
//         startDate: '2024-04-01',
//         endDate: '2024-10-31',
//         status: 'ongoing',
//         completionPercentage: 40
//       }
//     ],
//     media: [
//       {
//         id: '3',
//         type: 'image',
//         url: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         title: 'Smart Meter Installation',
//         description: 'Installation of new smart meters',
//         uploadDate: '2024-03-15'
//       }
//     ],
//     issues: []
//   },
//   {
//     id: '3',
//     name: 'Urban Water Treatment Facility',
//     description: 'Construction of a state-of-the-art water treatment facility using AI-powered purification systems.',
//     startDate: '2024-03-01',
//     expectedCompletionDate: '2025-09-30',
//     contractor: 'AquaPure Technologies',
//     budget: 12000000,
//     completionPercentage: 20,
//     location: {
//       lat: 40.7500,
//       lng: -73.9800,
//       address: 'Riverside Industrial Park'
//     },
//     category: 'water',
//     priority: 1,
//     votes: 312,
//     riskLevel: 'medium',
//     aiInsights: {
//       estimatedCompletion: '2025-10-15',
//       delayProbability: 0.2,
//       riskFactors: [
//         'Environmental permit pending',
//         'Specialized equipment delivery timeline uncertain'
//       ],
//       qualityAssessment: {
//         score: 88,
//         findings: ['Environmental impact within acceptable range', 'Water quality metrics exceed standards']
//       }
//     },
//     transactions: [
//       {
//         date: '2024-03-01',
//         amount: 3000000,
//         description: 'Initial funding',
//         hash: '0x789...ghi',
//         phase: 'Phase 1'
//       }
//     ],
//     officials: [
//       {
//         id: '4',
//         name: 'Emma Wilson',
//         role: 'Environmental Officer',
//         department: 'Water Resources',
//         contactInfo: 'emma.w@aquapure.com',
//         imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//       }
//     ],
//     phases: [
//       {
//         id: '6',
//         name: 'Environmental Assessment',
//         description: 'Environmental impact studies and permits',
//         startDate: '2024-03-01',
//         endDate: '2024-05-31',
//         status: 'ongoing',
//         completionPercentage: 70
//       }
//     ],
//     media: [
//       {
//         id: '4',
//         type: 'image',
//         url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
//         title: 'Facility Design',
//         description: '3D rendering of the treatment facility',
//         uploadDate: '2024-03-01'
//       }
//     ],
//     issues: []
//   }
// ];

// function ProjectList() {

//   const [showMap, setShowMap] = useState(false);
//   const [projects] = useState<Project[]>(MOCK_PROJECTS);
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null);

//   const handleVote = (projectId: string) => {
//     // In a real app, this would make an API call
//     console.log('Voted for project:', projectId);
//   };

//   const handleFilterChange = (filters: any) => {
//     // In a real app, this would filter the projects
//     console.log('Filters changed:', filters);
//   };

//   return (
//     <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200`}>
//       <nav className="bg-white dark:bg-gray-800 shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex justify-between items-center">
//             <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
//               Infrastructure Projects
//             </h1>
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => setShowMap(!showMap)}
//                 className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700
//                   hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//               >
//                 <Map className="w-5 h-5 text-gray-600 dark:text-gray-300" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <ProjectFilters onFilterChange={handleFilterChange} />

//         {showMap ? (
//           <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6 h-[400px] flex items-center justify-center">
//             <p className="text-gray-500 dark:text-gray-400">
//               Map view would be implemented here with a mapping library
//             </p>
//           </div>
//         ) : null}

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map(project => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               onVote={(e) => {
//                 e.stopPropagation();
//                 handleVote(project.id);
//               }}
//               onViewDetails={() => setSelectedProject(project)}
//             />
//           ))}
//         </div>

//         {selectedProject && (
//           <ProjectDetails
//             project={selectedProject}
//             onClose={() => setSelectedProject(null)}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default ProjectList;

import React, { useState, useEffect, useCallback } from "react";
import { Map } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import axios from "axios";
import { db } from "../firebase";
import {
  doc,
  updateDoc,
  increment,
  collection,
  getDocs,
} from "firebase/firestore";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectFilters } from "../components/ProjectFilters";
import { ProjectDetails } from "../components/ProjectDetails";
import type { Project } from "../types";

// Fix for missing Leaflet icons
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// Leaflet Marker Icon Fix
const markerIcon = new L.Icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function ProjectList() {
  const [showMap, setShowMap] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch projects from Firestore (real-time updates)
  const fetchProjects = useCallback(async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  //  Voting logic (Firestore + API call)
  const handleVote = async (projectId: string) => {
    try {
      // Update votes in Firestore
      const projectRef = doc(db, "projects", projectId);
      await updateDoc(projectRef, { votes: increment(1) });

      // Optional: Sync with backend if needed
      await axios.post(`http://localhost:5000/api/projects/${projectId}/vote`);

      fetchProjects(); // Refresh project list
    } catch (error) {
      console.error("Error voting for project:", error);
    }
  };

  const handleFilterChange = (filters: any) => {
    console.log("Filters changed:", filters);
  };

  //  AI Insights (Dummy data - replace with real AI API)
  // const getAIInsights = (project: Project) => {
  //   return {
  //     riskLevel: project.votes > 200 ? "high" : "low",
  //     estimatedCompletion: project.expectedCompletionDate,
  //     delayProbability: project.votes > 100 ? 0.3 : 0.1,
  //     riskFactors: project.aiInsights?.riskFactors || [],
  //     qualityAssessment: project.aiInsights?.qualityAssessment || { score: 0, findings: [] }
  //   };
  // };

  //  Correct Leaflet center type
  const defaultCenter: LatLngExpression = [40.7128, -74.006];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <nav className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            Infrastructure Projects
          </h1>
          <button
            onClick={() => setShowMap(!showMap)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700"
          >
            <Map className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProjectFilters onFilterChange={handleFilterChange} />

        {loading ? (
          <p className="text-center text-gray-600">Loading projects...</p>
        ) : (
          <>
            {showMap && (
              <div className="h-[400px] w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg mb-6">
                <MapContainer
                  center={defaultCenter}
                  zoom={10}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  {projects.map((project) => (
                    <Marker
                      key={project.id}
                      position={[project.location.lat, project.location.lng]}
                      icon={markerIcon}
                    >
                      <Popup>
                        <b>{project.name}</b>
                        <br />
                        {project.location.address}
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onVote={() => handleVote(project.id)}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>

            {selectedProject && (
              <ProjectDetails
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default ProjectList;
