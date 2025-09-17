'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern design, payment integration, and analytics dashboard.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    gradient: 'from-blue-500 to-cyan-500',
    testimonial: '"Served so hot I burned myself" - John Smith',
  },
  {
    id: 2,
    name: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'Firebase', 'Biometric Auth'],
    category: 'Mobile Development',
    gradient: 'from-purple-500 to-pink-500',
    testimonial: '"I wish this company was real!" - You, probably',
  },
  {
    id: 3,
    name: 'Brand Identity Design',
    description: 'Complete brand identity package including logo design, color palette, and marketing materials.',
    image: '/api/placeholder/600/400',
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    category: 'Graphics Design',
    gradient: 'from-orange-500 to-red-500',
    testimonial: '"Revolutionary design that transformed our brand" - Sarah Johnson',
  },
  {
    id: 4,
    name: 'AI-Powered Analytics',
    description: 'Machine learning platform for business intelligence and predictive data analytics.',
    image: '/api/placeholder/600/400',
    technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
    category: 'AI/ML',
    gradient: 'from-indigo-500 to-purple-500',
    testimonial: '"Cut our analysis time by 80%" - Tech Corp',
  },
];

export default function Portfolio() {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-blue-600"
          >
            Our Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Featured Projects
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Explore some of our recent projects that showcase our expertise in design, development, and innovation.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <div className="relative">
            <motion.div
              key={currentProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Project Info */}
                <div className="p-12 space-y-8">
                  <div>
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-gradient-to-r ${projects[currentProject].gradient} text-white`}>
                      {projects[currentProject].category}
                    </span>
                    <h3 className="mt-4 text-3xl font-bold text-gray-900">
                      {projects[currentProject].name}
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                      {projects[currentProject].description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {projects[currentProject].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6">
                    <p className="text-sm text-gray-600 italic">
                      {projects[currentProject].testimonial}
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className={`flex items-center gap-2 bg-gradient-to-r ${projects[currentProject].gradient} text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-semibold`}>
                      <EyeIcon className="h-5 w-5" />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors font-semibold">
                      <CodeBracketIcon className="h-5 w-5" />
                      Case Study
                    </button>
                  </div>
                </div>
                
                {/* Project Visual */}
                <div className={`bg-gradient-to-br ${projects[currentProject].gradient} p-12 flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="w-32 h-32 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                      <div className="w-16 h-16 bg-white/30 rounded-xl"></div>
                    </div>
                    <p className="text-lg font-medium">Project Screenshot</p>
                    <p className="text-sm opacity-80 mt-2">Interactive Demo Available</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentProject ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
