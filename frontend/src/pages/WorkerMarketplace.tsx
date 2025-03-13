import React, { useState } from "react";
import { motion } from "framer-motion";
import JobCard from "../components/JobCard";
import { FaSearch } from "react-icons/fa";

const jobs = [
  {
    title: "Construction Site Supervisor",
    company: "BuildTech Constructions",
    location: "New York, USA",
    match: "Looking for experienced site managers",
    employmentType: "Full-time",
    workMode: "Onsite",
    experience: "5+ Years",
    postedTime: "3 days ago",
    applicants: 120,
    salary: "$4500",
    logo: "/images/logo.avif",
  },
  {
    title: "Civil Engineer",
    company: "Urban Structures Ltd.",
    location: "Los Angeles, USA",
    match: "Expertise in urban infrastructure projects",
    employmentType: "Full-time",
    workMode: "Hybrid",
    experience: "3-5 Years",
    postedTime: "2 days ago",
    applicants: 95,
    salary: "$5000",
    logo: "/images/logo.avif",
  },
  {
    title: "Heavy Equipment Operator",
    company: "SteelFrame Constructions",
    location: "Chicago, USA",
    match: "Experience with cranes & bulldozers",
    employmentType: "Contract",
    workMode: "Onsite",
    experience: "2+ Years",
    postedTime: "5 days ago",
    applicants: 60,
    salary: "$4000",
    logo: "/images/logo.avif",
  },
  {
    title: "Electrical Engineer",
    company: "PowerGrid Solutions",
    location: "Houston, USA",
    match: "Experience with power distribution networks",
    employmentType: "Full-time",
    workMode: "Onsite",
    experience: "4-6 Years",
    postedTime: "1 week ago",
    applicants: 110,
    salary: "$5500",
    logo: "/images/logo.avif",
  },
];

const locations = ["All Locations", "New York, USA", "Los Angeles, USA", "Chicago, USA", "Houston, USA"];

const WorkerMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  // Filter jobs based on search & location
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation === "All Locations" || job.location === selectedLocation)
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
          Find your dream job here
        </h1>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Search Jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-2/3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full sm:w-1/3 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          >
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => <JobCard key={index} {...job} />)
          ) : (
            <p className="text-gray-500 text-center col-span-full">No jobs found.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkerMarketplace;

