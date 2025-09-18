'use client';

import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CloudIcon,
  CpuChipIcon,
  PaintBrushIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Web Development',
    description: 'Modern, responsive websites built with React, Next.js, and cutting-edge technologies.',
    icon: CodeBracketIcon,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Mobile Apps',
    description: 'Cross-platform mobile applications using React Native and Flutter for iOS and Android.',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Graphics Design',
    description: 'Stunning visual designs, branding, logos, and creative assets that make your brand stand out.',
    icon: PaintBrushIcon,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    name: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud.',
    icon: CloudIcon,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'AI Integration',
    description: 'Intelligent solutions powered by machine learning and artificial intelligence technologies.',
    icon: CpuChipIcon,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategies including SEO, social media, and content marketing.',
    icon: ChartBarIcon,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'E-commerce Solutions',
    description: 'Complete online stores with payment integration, inventory management, and analytics.',
    icon: GlobeAltIcon,
    gradient: 'from-teal-500 to-blue-500',
  },
  {
    name: 'Security & Compliance',
    description: 'Enterprise-grade security implementations and compliance with industry standards.',
    icon: ShieldCheckIcon,
    gradient: 'from-red-500 to-pink-500',
  },
  {
    name: 'DevOps & Automation',
    description: 'Streamlined development workflows and automated deployment pipelines for faster delivery.',
    icon: CogIcon,
    gradient: 'from-gray-500 to-slate-500',
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-base font-semibold leading-7 text-blue-600"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl"
          >
            Comprehensive Digital Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            From stunning graphics to powerful software, we offer end-to-end digital solutions 
            to help your business thrive in the modern world.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${feature.gradient} mb-4 sm:mb-6`}>
                    <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" aria-hidden="true" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {feature.name}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Hover effect */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href="#contact"
                      className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                    >
                      Learn more
                      <svg className="ml-1 h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
