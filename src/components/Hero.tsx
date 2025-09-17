'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, PlayIcon, SparklesIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

const techQuotes = [
  "Innovation distinguishes between a leader and a follower.",
  "The best way to predict the future is to invent it.",
  "Technology is nothing. What's important is that you have faith in people.",
  "The future belongs to those who believe in the beauty of their dreams."
];

const slides = [
  {
    id: 1,
    type: 'main',
    title: 'Always',
    subtitle: 'Innovative',
    description: 'Experience the full potential of digital innovation with SG Innovations. We create stunning visuals, powerful web solutions, and cutting-edge software.',
    quote: techQuotes[0],
    author: 'Steve Jobs'
  },
  {
    id: 2,
    type: 'services',
    title: 'Our Services',
    subtitle: 'What We Offer',
    description: 'Comprehensive digital solutions tailored to your business needs',
    services: [
      { name: 'Web Development', icon: '🌐', color: 'from-blue-500 to-cyan-500' },
      { name: 'Graphics Design', icon: '🎨', color: 'from-purple-500 to-pink-500' },
      { name: 'Mobile Apps', icon: '📱', color: 'from-green-500 to-emerald-500' },
      { name: 'Digital Marketing', icon: '📈', color: 'from-orange-500 to-red-500' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    type: 'portfolio',
    title: 'Featured Work',
    subtitle: 'Recent Projects',
    description: 'Showcasing our expertise through innovative solutions',
    projects: [
      { name: 'E-Commerce Platform', tech: 'React, Node.js' },
      { name: 'Brand Identity Design', tech: 'Adobe Creative Suite' },
      { name: 'AI Analytics Dashboard', tech: 'Python, TensorFlow' },
      { name: 'Mobile Banking App', tech: 'React Native' }
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

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

      {/* Amazing Creative Cartoon Character - Always Visible & Active */}
      <motion.div
        initial={{ x: -400, y: 100, opacity: 0 }}
        animate={{ 
          x: currentSlide === 0 ? 50 : currentSlide === 1 ? 80 : 60,
          y: currentSlide === 0 ? 200 : currentSlide === 1 ? 150 : 180,
          opacity: 1
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute z-30 cursor-pointer"
        onClick={nextSlide}
      >
        <motion.div
          animate={{ 
            rotate: currentSlide === 0 ? [0, 5, -5, 0] : currentSlide === 1 ? [0, -3, 3, 0] : [0, 2, -2, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Dynamic Stick Figure Character */}
          <svg width="180" height="180" viewBox="0 0 180 180" className="drop-shadow-2xl">
            {/* Head */}
            <circle 
              cx="90" 
              cy="35" 
              r="18" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="4"
              className="drop-shadow-lg"
            />
            
            {/* Eyes - different animations per slide */}
            <motion.circle
              animate={{ 
                scale: currentSlide === 0 ? [1, 1.3, 1] : currentSlide === 1 ? [1, 0.7, 1] : [1, 1.1, 1],
                opacity: currentSlide === 0 ? [1, 0.3, 1] : currentSlide === 1 ? [1, 0.8, 1] : [1, 0.6, 1]
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
              cx="82" 
              cy="32" 
              r="2.5" 
              fill="#ffffff"
            />
            <motion.circle
              animate={{ 
                scale: currentSlide === 0 ? [1, 1.3, 1] : currentSlide === 1 ? [1, 0.7, 1] : [1, 1.1, 1],
                opacity: currentSlide === 0 ? [1, 0.3, 1] : currentSlide === 1 ? [1, 0.8, 1] : [1, 0.6, 1]
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
              cx="98" 
              cy="32" 
              r="2.5" 
              fill="#ffffff"
            />
            
            {/* Mouth - different expressions per slide */}
            <motion.path
              animate={{
                d: currentSlide === 0 ? "M 75 45 Q 90 55 105 45" : // Big excited smile
                   currentSlide === 1 ? "M 75 45 Q 90 40 105 45" : // Focused smile
                   "M 75 45 Q 90 50 105 45" // Confident smile
              }}
              transition={{ duration: 0.5 }}
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="3"
            />
            
            {/* Body */}
            <line 
              x1="90" 
              y1="53" 
              x2="90" 
              y2="120" 
              stroke="#ffffff" 
              strokeWidth="5"
            />
            
            {/* Arms - different activities per slide */}
            <motion.line
              animate={{
                x1: currentSlide === 0 ? [65, 55, 65] : currentSlide === 1 ? [70, 75, 70] : [75, 70, 75],
                y1: currentSlide === 0 ? [75, 65, 75] : currentSlide === 1 ? [80, 75, 80] : [85, 80, 85],
                x2: currentSlide === 0 ? [115, 125, 115] : currentSlide === 1 ? [110, 105, 110] : [105, 110, 105],
                y2: currentSlide === 0 ? [75, 65, 75] : currentSlide === 1 ? [80, 75, 80] : [85, 80, 85]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              stroke="#ffffff" 
              strokeWidth="5"
            />
            
            {/* Legs */}
            <line 
              x1="90" 
              y1="120" 
              x2="70" 
              y2="155" 
              stroke="#ffffff" 
              strokeWidth="5"
            />
            <line 
              x1="90" 
              y1="120" 
              x2="110" 
              y2="155" 
              stroke="#ffffff" 
              strokeWidth="5"
            />
            
            {/* Slide-specific activities */}
            
            {/* Slide 0: Pulling/Guiding Activity */}
            {currentSlide === 0 && (
              <motion.g
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Pulling rope */}
                <line x1="125" y1="75" x2="160" y2="75" stroke="#ffffff" strokeWidth="3" strokeDasharray="5,5" opacity="0.8" />
                {/* Magic wand */}
                <line x1="125" y1="75" x2="140" y2="60" stroke="#ffffff" strokeWidth="2" />
                <circle cx="140" cy="60" r="3" fill="#ffffff" opacity="0.9" />
              </motion.g>
            )}
            
            {/* Slide 1: Building/Creating Activity */}
            {currentSlide === 1 && (
              <motion.g
                animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Building blocks */}
                <rect x="105" y="60" width="12" height="12" fill="#ffffff" opacity="0.9" rx="2" />
                <rect x="105" y="48" width="12" height="12" fill="#ffffff" opacity="0.7" rx="2" />
                <rect x="105" y="36" width="12" height="12" fill="#ffffff" opacity="0.5" rx="2" />
                {/* Hammer */}
                <line x1="70" y1="75" x2="85" y2="60" stroke="#ffffff" strokeWidth="3" />
                <rect x="80" y="55" width="8" height="8" fill="#ffffff" opacity="0.9" />
              </motion.g>
            )}
            
            {/* Slide 2: Presenting/Showcasing Activity */}
            {currentSlide === 2 && (
              <motion.g
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -3, 0]
                }}
                transition={{ 
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Presentation board */}
                <rect x="105" y="50" width="20" height="15" fill="#ffffff" opacity="0.9" rx="2" />
                <line x1="110" y1="55" x2="120" y2="55" stroke="#1f2937" strokeWidth="1" />
                <line x1="110" y1="58" x2="118" y2="58" stroke="#1f2937" strokeWidth="1" />
                <line x1="110" y1="61" x2="115" y2="61" stroke="#1f2937" strokeWidth="1" />
                {/* Pointer stick */}
                <line x1="70" y1="80" x2="100" y2="60" stroke="#ffffff" strokeWidth="2" />
              </motion.g>
            )}
          </svg>
          
          {/* Dynamic Speech Bubble */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.9, 1, 0.9]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-20 -left-8 bg-white/95 backdrop-blur-sm rounded-3xl px-5 py-3 border border-white/30 shadow-lg"
          >
            <p className="text-sm font-bold text-gray-800">
              {currentSlide === 0 ? "Let me guide you!" : 
               currentSlide === 1 ? "Building amazing things!" : 
               "Check this out!"}
            </p>
            <div className="absolute bottom-0 left-8 w-0 h-0 border-l-5 border-r-5 border-t-5 border-transparent border-t-white/95"></div>
          </motion.div>
          
          {/* Slide-specific special effects */}
          
          {/* Slide 0: Magic sparkles */}
          {currentSlide === 0 && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, Math.random() * 40 - 20, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5
                  }}
                  className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                  style={{
                    left: `${120 + i * 10}px`,
                    top: `${60 + i * 5}px`
                  }}
                />
              ))}
            </>
          )}
          
          {/* Slide 1: Construction particles */}
          {currentSlide === 1 && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3
                  }}
                  className="absolute w-2 h-2 bg-orange-400 rounded-sm"
                  style={{
                    left: `${110 + i * 8}px`,
                    top: `${80 + i * 3}px`
                  }}
                />
              ))}
            </>
          )}
          
          {/* Slide 2: Presentation highlights */}
          {currentSlide === 2 && (
            <>
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.9
                  }}
                  className="absolute w-4 h-4 bg-blue-400 rounded-full"
                  style={{
                    left: `${125 + i * 15}px`,
                    top: `${55 + i * 8}px`
                  }}
                />
              ))}
            </>
          )}
          
          {/* Activity indicator lines */}
          <motion.div
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -right-8 top-16"
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <path d="M5 20 L15 15 L25 20 L35 15" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.6" />
              <path d="M5 25 L15 20 L25 25 L35 20" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.4" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Slide Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-center"
          >
            {slides[currentSlide].type === 'main' && (
              <div className="space-y-8">
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
                  <span className="text-white">{slides[currentSlide].title}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                {/* Tech Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <p className="text-lg text-gray-200 italic mb-2">
                      "{slides[currentSlide].quote}"
                    </p>
                    <p className="text-sm text-gray-400">- {slides[currentSlide].author}</p>
                  </div>
                </motion.div>
              </div>
            )}

            {slides[currentSlide].type === 'services' && (
              <div className="space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="text-white">{slides[currentSlide].title}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {slides[currentSlide].services?.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                      <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {slides[currentSlide].type === 'portfolio' && (
              <div className="space-y-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl md:text-6xl font-bold tracking-tight"
                >
                  <span className="text-white">{slides[currentSlide].title}</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-xl text-gray-300 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {slides[currentSlide].projects?.map((project, index) => (
                    <motion.div
                      key={project.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <h3 className="text-white font-semibold text-xl mb-2">{project.name}</h3>
                      <p className="text-gray-300 text-sm">{project.tech}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
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
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeftIcon className="h-6 w-6 text-white" />
        </button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRightIcon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8"
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