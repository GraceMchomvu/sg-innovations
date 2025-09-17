'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
          >
            <SparklesIcon className="h-4 w-4 text-yellow-400" />
            <span>Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Let's Build Something Amazing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Ready to transform your ideas into reality? Contact us today for a free consultation 
            and let's create something extraordinary together.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <EnvelopeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Email</p>
                      <p className="text-sm text-gray-300">hello@sginnovations.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <PhoneIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Phone</p>
                      <p className="text-sm text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Address</p>
                      <p className="text-sm text-gray-300">123 Innovation Street<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="font-semibold text-white mb-4">Why Choose SG Innovations?</h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                    Free consultation and project estimation
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                    Modern technology stack and design trends
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                    Agile development methodology
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                    24/7 support and maintenance
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border-0 bg-white/10 py-3 px-4 text-white placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border-0 bg-white/10 py-3 px-4 text-white placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-white/10 py-3 px-4 text-white placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-white/10 py-3 px-4 text-white placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-white/20 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-purple-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

