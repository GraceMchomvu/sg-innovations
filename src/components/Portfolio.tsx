'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern design, payment integration, and analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    category: 'Web Development',
    gradient: 'from-blue-500 to-cyan-500',
    testimonial: '"Served so hot I burned myself" - John Smith',
    visible: true,
  },
  {
    id: 2,
    name: 'Brand Identity Design',
    description: 'Complete brand identity package including logo design, color palette, and marketing materials.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    category: 'Graphics Design',
    gradient: 'from-orange-500 to-red-500',
    testimonial: '"Revolutionary design that transformed our brand" - Sarah Johnson',
    visible: true,
  },
  {
    id: 3,
    name: 'AI-Powered Analytics',
    description: 'Machine learning platform for business intelligence and predictive data analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technologies: ['Python', 'TensorFlow', 'AWS', 'React'],
    category: 'AI/ML',
    gradient: 'from-indigo-500 to-purple-500',
    testimonial: '"Cut our analysis time by 80%" - Tech Corp',
    visible: true,
  },
  {
    id: 4,
    name: 'Digital Marketing Campaign',
    description: 'Comprehensive digital marketing strategy with social media management and SEO optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    technologies: ['Social Media', 'SEO', 'Content Marketing', 'Analytics'],
    category: 'Digital Marketing',
    gradient: 'from-green-500 to-emerald-500',
    testimonial: '"Increased our online presence by 300%" - Local Business',
    visible: true,
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
                    <button className={`flex items-center gap-2 bg-gradient-to-r ${projects[currentProject].gradient} text-white px-6 py-3 rounded-xl hover:opacity-90 transition-opacity font-semibold shadow-lg`}>
                      <EyeIcon className="h-5 w-5" />
                      View Project
                    </button>
                    <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-50 transition-colors font-semibold shadow-sm">
                      <CodeBracketIcon className="h-5 w-5" />
                      Case Study
                    </button>
                  </div>
                </div>
                
                {/* Project Visual */}
                <div className={`bg-gradient-to-br ${projects[currentProject].gradient} p-12 flex items-center justify-center relative overflow-hidden`}>
                  {/* Real project image */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-full max-w-md h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                      <img 
                        src={projects[currentProject].image} 
                        alt={projects[currentProject].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
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
