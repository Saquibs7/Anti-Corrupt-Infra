import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import CitizenDashboard from './pages/CitizenDashboard';
import ReportIssue from './pages/ReportIssue';
import ProjectList from './pages/ProjectList';
import WorkerMarketplace from './pages/WorkerMarketplace';
import Footer from './components/Footer';
import GovernmentPortal from './pages/GovernmentDashboard';
import WardDashboard from './pages/WardDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/citizendashboard" element={<CitizenDashboard />} />
            <Route path="/report-issue" element={<ReportIssue />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/marketplace" element={<WorkerMarketplace />} />
            <Route path="/governmentdashboard" element={<GovernmentPortal />} />
            <Route path="/warddashboard" element={<WardDashboard />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;