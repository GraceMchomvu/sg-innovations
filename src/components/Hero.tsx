'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
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

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Beautiful Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M0%200h40v40H0V0zm20%2020h20v20H20V20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Circuit Board Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
            
            {/* Circuit paths */}
            <path d="M10,20 L30,20 L30,40 L50,40 L50,60 L70,60" stroke="url(#circuitGradient)" strokeWidth="0.5" fill="none" opacity="0.6"/>
            <path d="M20,10 L20,30 L40,30 L40,50 L60,50 L60,70" stroke="url(#circuitGradient)" strokeWidth="0.5" fill="none" opacity="0.4"/>
            <path d="M80,15 L90,15 L90,35 L75,35 L75,55 L85,55" stroke="url(#circuitGradient)" strokeWidth="0.5" fill="none" opacity="0.5"/>
            
            {/* Circuit nodes */}
            <circle cx="30" cy="20" r="1" fill="#3b82f6" opacity="0.6"/>
            <circle cx="50" cy="40" r="1" fill="#8b5cf6" opacity="0.6"/>
            <circle cx="70" cy="60" r="1" fill="#06b6d4" opacity="0.6"/>
            <circle cx="20" cy="30" r="1" fill="#3b82f6" opacity="0.4"/>
            <circle cx="40" cy="50" r="1" fill="#8b5cf6" opacity="0.4"/>
            <circle cx="90" cy="35" r="1" fill="#06b6d4" opacity="0.5"/>
          </svg>
          
          {/* Floating Code Elements */}
          <div className="absolute top-20 left-20 text-blue-400/20 text-xs font-mono">
            <div className="animate-pulse">&lt;div&gt;</div>
            <div className="animate-pulse delay-100">&nbsp;&nbsp;&lt;h1&gt;</div>
            <div className="animate-pulse delay-200">&nbsp;&nbsp;&lt;/h1&gt;</div>
            <div className="animate-pulse delay-300">&lt;/div&gt;</div>
          </div>
          
          <div className="absolute top-40 right-32 text-purple-400/20 text-xs font-mono">
            <div className="animate-pulse">function() &#123;</div>
            <div className="animate-pulse delay-100">&nbsp;&nbsp;return true;</div>
            <div className="animate-pulse delay-200">&#125;</div>
          </div>
          
          <div className="absolute bottom-32 left-32 text-cyan-400/20 text-xs font-mono">
            <div className="animate-pulse">const app = &#123;</div>
            <div className="animate-pulse delay-100">&nbsp;&nbsp;name: &apos;SG&apos;,</div>
            <div className="animate-pulse delay-200">&nbsp;&nbsp;type: &apos;Innovation&apos;</div>
            <div className="animate-pulse delay-300">&#125;;</div>
          </div>
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-32 right-20 w-8 h-8 border border-blue-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 right-40 w-6 h-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-60 left-40 w-4 h-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 transform rotate-45 animate-pulse"></div>
          
          {/* Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            
            {/* Animated data flow */}
            <motion.path
              d="M5,50 Q25,30 45,50 T85,50"
              stroke="url(#dataFlow)"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.path
              d="M15,80 Q35,60 55,80 T95,80"
              stroke="url(#dataFlow)"
              strokeWidth="0.3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 2 }}
            />
          </svg>
        </div>
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-900/10 to-transparent"></div>
      </div>

      {/* Full Height Cartoon Character */}
      <motion.div
        initial={{ x: -400, opacity: 0 }}
        animate={{ 
          x: 0,
          opacity: 1
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-0 h-screen w-80 z-30 cursor-pointer flex items-center justify-center"
        onClick={nextSlide}
      >
        <motion.div
          animate={{ 
            y: currentSlide === 0 ? [0, -8, 0] : currentSlide === 1 ? [0, -5, 0] : [0, -10, 0],
            rotate: currentSlide === 0 ? [0, 3, -3, 0] : currentSlide === 1 ? [0, -2, 2, 0] : [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: currentSlide === 0 ? 2.5 : currentSlide === 1 ? 2 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Full Height Cartoon Character */}
          <svg width="400" height="600" viewBox="0 0 200 220" className="drop-shadow-2xl">
            {/* Character Body */}
            <g>
              {/* Head */}
              <circle 
                cx="100" 
                cy="50" 
                r="25" 
                fill="#ffffff" 
                stroke="#e5e7eb" 
                strokeWidth="2"
                className="drop-shadow-lg"
              />
              
              {/* Hair */}
              <path 
                d="M75 35 Q100 20 125 35 Q125 25 100 30 Q75 25 75 35" 
                fill="#8b4513" 
                opacity="0.9"
              />
              
              {/* Eyes */}
              <motion.circle
                animate={{ 
                  scale: currentSlide === 0 ? [1, 1.2, 1] : [1, 1.05, 1],
                  opacity: currentSlide === 0 ? [1, 0.7, 1] : [1, 0.9, 1]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                cx="90" 
                cy="45" 
                r="3" 
                fill="#1f2937"
              />
              <motion.circle
                animate={{ 
                  scale: currentSlide === 0 ? [1, 1.2, 1] : [1, 1.05, 1],
                  opacity: currentSlide === 0 ? [1, 0.7, 1] : [1, 0.9, 1]
                }}
                transition={{ duration: 1, repeat: Infinity }}
                cx="110" 
                cy="45" 
                r="3" 
                fill="#1f2937"
              />
              
                  {/* Talking Mouth */}
                  <motion.path
                    animate={{
                      d: currentSlide === 0 ? 
                         ["M 85 60 Q 100 70 115 60", "M 85 60 Q 100 75 115 60", "M 85 60 Q 100 70 115 60"] : // Excited talking
                         currentSlide === 1 ? 
                         ["M 85 60 Q 100 55 115 60", "M 85 60 Q 100 65 115 60", "M 85 60 Q 100 55 115 60"] : // Focused talking
                         ["M 85 60 Q 100 65 115 60", "M 85 60 Q 100 70 115 60", "M 85 60 Q 100 65 115 60"] // Confident talking
                    }}
                    transition={{ 
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    fill="none" 
                    stroke="#1f2937" 
                    strokeWidth="2"
                  />
                  
                  {/* Talking Teeth */}
                  <motion.rect
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.8, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }}
                    x="95" y="62" width="10" height="6" fill="#ffffff" rx="2"
                  />
              
              {/* Body - Shirt */}
              <rect 
                x="80" 
                y="75" 
                width="40" 
                height="50" 
                fill="#3b82f6" 
                rx="5"
                className="drop-shadow-md"
              />
              
              {/* Enhanced Arms with Detailed Hands */}
              {currentSlide === 0 && (
                <motion.g
                  animate={{ 
                    rotate: [0, 8, -8, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Left arm - waving */}
                  <ellipse cx="70" cy="100" rx="8" ry="15" fill="#ffffff" transform="rotate(-25 70 100)" />
                  {/* Left hand - properly connected */}
                  <circle cx="62" cy="88" r="4" fill="#ffffff" />
                  <circle cx="60" cy="85" r="1" fill="#1f2937" />
                  <circle cx="64" cy="85" r="1" fill="#1f2937" />
                  <circle cx="62" cy="89" r="1" fill="#1f2937" />
                  
                  {/* Right arm - waving */}
                  <ellipse cx="130" cy="100" rx="8" ry="15" fill="#ffffff" transform="rotate(25 130 100)" />
                  {/* Right hand - properly connected */}
                  <circle cx="138" cy="88" r="4" fill="#ffffff" />
                  <circle cx="136" cy="85" r="1" fill="#1f2937" />
                  <circle cx="140" cy="85" r="1" fill="#1f2937" />
                  <circle cx="138" cy="89" r="1" fill="#1f2937" />
                </motion.g>
              )}
              
              {currentSlide === 1 && (
                <motion.g
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Left arm - pointing */}
                  <ellipse cx="70" cy="100" rx="8" ry="15" fill="#ffffff" transform="rotate(-35 70 100)" />
                  {/* Left hand - pointing finger */}
                  <circle cx="62" cy="88" r="4" fill="#ffffff" />
                  <line x1="62" y1="88" x2="55" y2="78" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="55" cy="78" r="2" fill="#ffffff" />
                  
                  {/* Right arm - supporting */}
                  <ellipse cx="130" cy="100" rx="8" ry="15" fill="#ffffff" transform="rotate(15 130 100)" />
                  {/* Right hand - detailed */}
                  <circle cx="138" cy="88" r="4" fill="#ffffff" />
                  <circle cx="136" cy="85" r="1" fill="#1f2937" />
                  <circle cx="140" cy="85" r="1" fill="#1f2937" />
                </motion.g>
              )}
              
              {currentSlide === 2 && (
                <motion.g
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Left arm - thumbs up */}
                  <ellipse cx="70" cy="100" rx="8" ry="15" fill="#ffffff" transform="rotate(-20 70 100)" />
                  {/* Left hand - thumbs up */}
                  <circle cx="62" cy="88" r="4" fill="#ffffff" />
                  <line x1="65" y1="88" x2="69" y2="78" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="69" cy="78" r="2" fill="#ffffff" />
                  
                  {/* Right arm - celebration */}
                  <ellipse cx="130" cy="100" rx="8" ry="15" fill="#ffffff" transform="rotate(20 130 100)" />
                  {/* Right hand - detailed */}
                  <circle cx="138" cy="88" r="4" fill="#ffffff" />
                  <circle cx="136" cy="85" r="1" fill="#1f2937" />
                  <circle cx="140" cy="85" r="1" fill="#1f2937" />
                  <circle cx="138" cy="89" r="1" fill="#1f2937" />
                </motion.g>
              )}
              
              {/* Standing Legs */}
              <rect x="85" y="125" width="12" height="40" fill="#1f2937" rx="3" />
              <rect x="103" y="125" width="12" height="40" fill="#1f2937" rx="3" />
              
              {/* Standing Shoes */}
              <ellipse cx="91" cy="170" rx="8" ry="4" fill="#000000" />
              <ellipse cx="109" cy="170" rx="8" ry="4" fill="#000000" />
              
              {/* Backpack */}
              <rect x="120" y="80" width="15" height="20" fill="#8b4513" rx="3" />
              <rect x="125" y="75" width="5" height="8" fill="#8b4513" />
            </g>
            
            {/* Slide-specific props */}
            {currentSlide === 0 && (
              <motion.g
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Magic sparkles around character */}
                <circle cx="60" cy="60" r="2" fill="#fbbf24" opacity="0.8" />
                <circle cx="140" cy="70" r="1.5" fill="#fbbf24" opacity="0.6" />
                <circle cx="50" cy="90" r="1" fill="#fbbf24" opacity="0.7" />
              </motion.g>
            )}
            
            {currentSlide === 1 && (
              <motion.g
                animate={{ 
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Tools floating around */}
                <rect x="50" y="60" width="8" height="8" fill="#ffffff" opacity="0.8" rx="1" />
                <rect x="140" y="80" width="6" height="6" fill="#ffffff" opacity="0.6" rx="1" />
              </motion.g>
            )}
            
            {currentSlide === 2 && (
              <motion.g
                animate={{ 
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Success indicators */}
                <circle cx="60" cy="70" r="3" fill="#10b981" opacity="0.8" />
                <circle cx="140" cy="60" r="2" fill="#10b981" opacity="0.6" />
              </motion.g>
            )}
          </svg>
          
          {/* Talking Speech Bubble */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.95, 1, 0.95]
            }}
            transition={{ 
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-24 -left-12 bg-white/98 backdrop-blur-sm rounded-3xl px-6 py-4 border border-white/40 shadow-xl"
          >
            <motion.p 
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-sm font-bold text-gray-800"
            >
              {currentSlide === 0 ? "Welcome to SG Innovations!" : 
               currentSlide === 1 ? "We offer amazing services!" : 
               "Check out our portfolio!"}
            </motion.p>
            <div className="absolute bottom-0 left-10 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-white/98"></div>
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

          {/* Slide Container - Centered */}
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={
              currentSlide === 0 ? { scale: 0.8, opacity: 0, rotateY: 90 } :
              currentSlide === 1 ? { x: -300, opacity: 0, rotateX: 45 } :
              { y: 300, opacity: 0, scale: 1.2 }
            }
            animate={{ 
              x: 0, 
              y: 0, 
              opacity: 1, 
              scale: 1, 
              rotateX: 0, 
              rotateY: 0 
            }}
            exit={
              currentSlide === 0 ? { scale: 1.2, opacity: 0, rotateY: -90 } :
              currentSlide === 1 ? { x: 300, opacity: 0, rotateX: -45 } :
              { y: -300, opacity: 0, scale: 0.8 }
            }
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut",
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="text-center"
          >
            {slides[currentSlide].type === 'main' && (
              <div className="space-y-8">

                    {/* Main heading */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
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
                  className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4"
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
                      &ldquo;{slides[currentSlide].quote}&rdquo;
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
                      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
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
                  className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4"
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
                      className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
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
                  className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4"
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

                {/* CTA Buttons with WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                >
                  <a
                    href="https://wa.me/233244123456?text=Hello%20SG%20Innovations!%20I%20would%20like%20to%20discuss%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      WhatsApp Us
                    </span>
                  </a>
                  
                  <a
                    href="#contact"
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-2">
                      Get Started
                      <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </a>
                  
                  <a
                    href="#about"
                    className="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
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