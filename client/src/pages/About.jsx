import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Video, Bot, Globe, Megaphone } from 'lucide-react';

export default function About() {
  const skills = [
    { icon: Palette, label: 'Graphics Design', color: 'text-red-500' },
    { icon: Video, label: 'Video Editing', color: 'text-purple-500' },
    { icon: Bot, label: 'AI Agent', color: 'text-blue-500' },
    { icon: Globe, label: 'WordPress', color: 'text-green-500' },
    { icon: Megaphone, label: 'Ads Expert', color: 'text-orange-500' },
    { icon: Code, label: 'Development', color: 'text-cyan-500' },
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-red-500 text-sm tracking-widest mb-2">01 / ABOUT</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a]">About Me</h1>
          <div className="w-24 h-1 bg-red-500 mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 280" className="w-48 h-64">
                    <rect x="60" y="140" width="80" height="100" rx="10" fill="#1a1a1a"/>
                    <circle cx="100" cy="80" r="60" fill="white"/>
                    <circle cx="100" cy="85" r="55" fill="#1a1a1a"/>
                    <circle cx="80" cy="75" r="12" fill="white"/>
                    <circle cx="120" cy="75" r="12" fill="white"/>
                    <circle cx="82" cy="77" r="6" fill="#1a1a1a"/>
                    <circle cx="122" cy="77" r="6" fill="#1a1a1a"/>
                    <path d="M75 100 Q100 125 125 100" stroke="white" strokeWidth="4" fill="none"/>
                    <ellipse cx="100" cy="40" rx="30" ry="15" fill="#1a1a1a"/>
                    <rect x="75" y="155" width="50" height="8" rx="4" fill="#dc2626"/>
                  </svg>
                </div>
                
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-red-500 rounded-full" />
                <div className="absolute bottom-4 left-4 w-12 h-1 bg-red-500" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-500 rounded-xl -z-10"
              />
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-white shadow-2xl rounded-xl p-4 border border-gray-100"
              >
                <p className="text-3xl font-black text-[#1a1a1a]">5+</p>
                <p className="text-xs text-gray-500">Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
              Hi, I'm <span className="text-red-500">Tanvir Alam Rifat</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              A passionate multi-disciplinary creative professional with expertise spanning across 
              graphic design, video editing, AI development, and digital marketing. I transform 
              ideas into visually stunning realities that captivate audiences and drive results.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              With years of experience in the creative industry, I've mastered the art of blending 
              aesthetics with functionality. Whether it's crafting brand identities, editing 
              cinematic videos, or developing intelligent AI agents, I bring the same level of 
              dedication and creativity to every project.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
                >
                  <skill.icon className={`w-6 h-6 ${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <span className="text-xs text-gray-600 text-center">{skill.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-8 pt-6 border-t border-gray-200">
              {[
                { value: '200+', label: 'Projects' },
                { value: '50+', label: 'Clients' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <p className="text-2xl md:text-3xl font-black text-[#1a1a1a]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
