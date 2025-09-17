'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Innovating the Future of{' '}
            <span className="text-blue-600">Technology</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            We create cutting-edge digital solutions that transform businesses and enhance user experiences. 
            From web applications to mobile solutions, we bring your ideas to life with modern technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="#contact"
              className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors duration-200 flex items-center gap-2"
            >
              Learn More
              <PlayIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-gray-600">Projects Completed</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">100+</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-gray-600">Happy Clients</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">50+</dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base leading-7 text-gray-600">Years Experience</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">5+</dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
