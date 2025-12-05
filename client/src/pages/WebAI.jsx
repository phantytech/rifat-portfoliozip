import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot, MessageSquare, ShoppingCart, Layout, Cpu, Zap, ArrowRight } from 'lucide-react';

export default function WebAI() {
  const wordpressProjects = [
    {
      title: 'E-Commerce Store',
      type: 'WooCommerce',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      features: ['Product Catalog', 'Payment Gateway', 'Order Management'],
    },
    {
      title: 'Business Website',
      type: 'Corporate',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      features: ['Custom Theme', 'SEO Optimized', 'Contact Forms'],
    },
    {
      title: 'Portfolio Site',
      type: 'Creative',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      features: ['Gallery', 'Animations', 'Blog Integration'],
    },
  ];

  const aiProjects = [
    {
      title: 'Customer Support Bot',
      description: 'AI-powered chatbot for 24/7 customer support with natural language processing.',
      icon: MessageSquare,
      color: 'bg-blue-500',
    },
    {
      title: 'Content Generator',
      description: 'Automated content creation tool for social media and blog posts.',
      icon: Zap,
      color: 'bg-purple-500',
    },
    {
      title: 'Task Automation Agent',
      description: 'Intelligent agent for automating repetitive business workflows.',
      icon: Cpu,
      color: 'bg-green-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f8f8] to-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-red-500 text-sm tracking-widest mb-2">05 / PORTFOLIO</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a]">WordPress & AI</h1>
          <div className="w-24 h-1 bg-red-500 mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-[#1a1a1a] rounded-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a1a]">WordPress Development</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {wordpressProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                    {project.type}
                  </div>
                  
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 left-0 right-0 h-6 bg-gray-800/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-[#1a1a1a] mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-[#1a1a1a]">AI Agent Development</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aiProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative bg-[#1a1a1a] rounded-2xl p-6 overflow-hidden group"
              >
                <div className={`absolute -top-20 -right-20 w-40 h-40 ${project.color} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                
                <div className={`${project.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-bold text-lg text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                
                <button className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/btn">
                  Learn more 
                  <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <div className="mt-6 bg-[#2d2d2d] rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-600 animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <p className="text-xs text-gray-500">AI is processing...</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { value: '50+', label: 'Websites Built' },
              { value: '20+', label: 'AI Agents Created' },
              { value: '99%', label: 'Uptime' },
              { value: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <p className="text-3xl font-black text-[#1a1a1a]">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
