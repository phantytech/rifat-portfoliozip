import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Video, Bot, Globe, Megaphone, Camera, 
  PenTool, Layers, Cpu, Code, Smartphone, TrendingUp 
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Graphics Design',
      icon: Palette,
      color: 'bg-red-500',
      skills: [
        { name: 'Adobe Photoshop', level: 95 },
        { name: 'Adobe Illustrator', level: 90 },
        { name: 'Logo Design', level: 92 },
        { name: 'Brand Identity', level: 88 },
      ]
    },
    {
      title: 'Video Editing',
      icon: Video,
      color: 'bg-purple-500',
      skills: [
        { name: 'Adobe Premiere Pro', level: 93 },
        { name: 'After Effects', level: 88 },
        { name: 'DaVinci Resolve', level: 85 },
        { name: 'Motion Graphics', level: 82 },
      ]
    },
    {
      title: 'AI & Automation',
      icon: Bot,
      color: 'bg-blue-500',
      skills: [
        { name: 'AI Agent Development', level: 85 },
        { name: 'ChatGPT Integration', level: 90 },
        { name: 'Workflow Automation', level: 88 },
        { name: 'Machine Learning Basics', level: 75 },
      ]
    },
    {
      title: 'Web Development',
      icon: Globe,
      color: 'bg-green-500',
      skills: [
        { name: 'WordPress', level: 95 },
        { name: 'Elementor', level: 92 },
        { name: 'WooCommerce', level: 88 },
        { name: 'Custom Themes', level: 80 },
      ]
    },
    {
      title: 'Digital Marketing',
      icon: Megaphone,
      color: 'bg-orange-500',
      skills: [
        { name: 'Facebook Ads', level: 92 },
        { name: 'Google Ads', level: 88 },
        { name: 'SEO Optimization', level: 85 },
        { name: 'Social Media', level: 90 },
      ]
    },
    {
      title: 'Other Skills',
      icon: Layers,
      color: 'bg-cyan-500',
      skills: [
        { name: 'UI/UX Design', level: 85 },
        { name: 'Photography', level: 80 },
        { name: 'Content Writing', level: 75 },
        { name: 'Project Management', level: 82 },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8f8] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-red-500 text-sm tracking-widest mb-2">02 / SKILLS</p>
          <h1 className="text-4xl md:text-6xl font-black text-[#1a1a1a]">My Expertise</h1>
          <div className="w-24 h-1 bg-red-500 mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${category.color} p-3 rounded-xl`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-700">{skill.name}</span>
                      <span className="text-xs font-semibold text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + catIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-[#1a1a1a] mb-8 text-center">Tools I Master</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects',
              'Figma', 'WordPress', 'ChatGPT', 'Midjourney', 'Canva', 'Lightroom'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3 bg-white rounded-full shadow-sm border border-gray-100 text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-500 transition-colors cursor-pointer"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
