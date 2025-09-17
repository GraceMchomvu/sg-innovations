'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and unique animated elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Animated Code Brackets */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-16 h-16 text-blue-400/30"
        >
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 4l-4 4 4 4V4zm8 0v8l4-4-4-4z"/>
          </svg>
        </motion.div>
        
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 right-32 w-12 h-12 text-purple-400/30"
        >
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 4l-4 4 4 4V4zm8 0v8l4-4-4-4z"/>
          </svg>
        </motion.div>

        {/* Floating Hexagons */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            x: [0, 20, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-1/3 w-8 h-8 text-cyan-400/40"
        >
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </motion.div>

        {/* Pulsing Circles */}
        <motion.div
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full blur-sm"
        />

        {/* Animated Grid Pattern */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm20%2020h20v20H20V20z%22/%3E%3C/g%3E%3C/svg%3E')]"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${80 + i * 5}%`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium"
          >
            <SparklesIcon className="h-4 w-4 text-yellow-400" />
            <span>Innovation Meets Excellence</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-white">Always</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Innovative
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the full potential of digital innovation with SG Innovations. 
            We create stunning visuals, powerful web solutions, and cutting-edge software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <a
              href="#about"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <PlayIcon className="h-5 w-5" />
                Learn More
              </span>
            </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
