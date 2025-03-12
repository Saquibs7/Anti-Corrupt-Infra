import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertTriangle, FileCheck, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
          }}
        />
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold text-white mb-6"
          >
            Transforming Infrastructure with
            <span className="text-secondary"> AI</span> &{' '}
            <span className="text-accent">Blockchain</span> Transparency!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            Join the revolution in infrastructure management. Report issues, track progress,
            and ensure transparency in public projects.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/report-issue"
              className="inline-flex items-center px-6 py-3 bg-secondary text-black rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <AlertTriangle className="mr-2" size={20} />
              Report an Issue
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FileCheck className="mr-2" size={20} />
              View Projects
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              <Users className="mr-2" size={20} />
              Join as Worker
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Leveraging AI and blockchain for transparent infrastructure management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-primary mb-4">
                <AlertTriangle size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                AI-Powered Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Advanced AI algorithms analyze reported issues and predict maintenance needs
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-secondary mb-4">
                <FileCheck size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Blockchain Transparency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Immutable record-keeping ensures complete transparency in project execution
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="text-accent mb-4">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Community Engagement
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Direct citizen participation in infrastructure development and monitoring
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;