import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ChevronDown, Play, Sparkles } from 'lucide-react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(220, 38, 38, 0.15), transparent 40%)`
        }}
      />
      
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />

      <motion.div 
        initial={{ x: -100, opacity: 0, rotate: -5 }}
        animate={{ x: 0, opacity: 1, rotate: -5 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 hidden md:block"
      >
        <div className="bg-[#2d2d2d] rounded-lg p-2 shadow-2xl border border-[#404040]" style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}>
          {['V', 'M', 'L', 'T', '✎', '🔳', '⬭', '✂', '🔍', '✋'].map((tool, i) => (
            <div key={i} className="w-8 h-8 flex items-center justify-center text-gray-400 hover:bg-[#3d3d3d] rounded cursor-pointer transition-colors text-sm">
              {tool}
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute right-4 md:right-12 top-1/3 hidden lg:block"
      >
        <div className="bg-[#1e1e2e]/80 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30 shadow-2xl" style={{
          boxShadow: '0 0 40px rgba(147, 51, 234, 0.2)'
        }}>
          <div className="text-xs text-purple-300 mb-2">Effects Control</div>
          <div className="space-y-1">
            {['Transform', 'Opacity', 'Position', 'Scale'].map((effect, i) => (
              <div key={i} className="flex items-center gap-2 text-[10px] text-gray-400">
                <div className="w-2 h-2 bg-purple-500/50 rounded-sm" />
                {effect}
              </div>
            ))}
          </div>
          <div className="mt-3 h-8 bg-[#0d0d15] rounded flex items-center px-2 gap-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-0.5 h-3 bg-purple-500/40 rounded-full" style={{ height: `${Math.random() * 12 + 4}px` }} />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.8, type: 'spring' }}
        className="absolute top-8 right-8 md:top-12 md:right-24"
      >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-xl">
          <svg viewBox="0 0 100 100" className="w-12 h-12 md:w-16 md:h-16">
            <circle cx="50" cy="45" r="35" fill="#1a1a1a"/>
            <circle cx="38" cy="40" r="8" fill="white"/>
            <circle cx="62" cy="40" r="8" fill="white"/>
            <circle cx="40" cy="40" r="4" fill="#1a1a1a"/>
            <circle cx="64" cy="40" r="4" fill="#1a1a1a"/>
            <path d="M35 55 Q50 70 65 55" stroke="#1a1a1a" strokeWidth="3" fill="none"/>
            <ellipse cx="50" cy="20" rx="20" ry="8" fill="#1a1a1a"/>
          </svg>
        </div>
      </motion.div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-400 text-sm md:text-base italic mb-4 tracking-widest"
          style={{ fontFamily: 'cursive' }}
        >
          Creative Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none">
            <span className="text-white">PORT</span>
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-red-600 transform -skew-x-3" style={{
                clipPath: 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)',
              }} />
              <span className="relative text-white px-2">FOLIO</span>
              <div className="absolute -top-4 -right-4 w-12 h-6 bg-gray-300/20 transform rotate-45 hidden md:block" />
              <div className="absolute -bottom-2 -left-4 w-10 h-5 bg-gray-300/20 transform -rotate-12 hidden md:block" />
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-600 mt-2 text-center"
          >
            2025
          </motion.p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg viewBox="0 0 1440 120" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path 
              d="M0,60 Q60,20 120,60 T240,60 T360,60 T480,60 T600,60 T720,60 T840,60 T960,60 T1080,60 T1200,60 T1320,60 T1440,60 L1440,120 L0,120 Z" 
              fill="white"
            />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-red-600" style={{
            clipPath: 'polygon(0 100%, 100% 100%, 100% 30%, 98% 45%, 95% 25%, 90% 50%, 85% 20%, 80% 55%, 75% 30%, 70% 60%, 65% 25%, 60% 55%, 55% 35%, 50% 60%, 45% 30%, 40% 55%, 35% 25%, 30% 60%, 25% 35%, 20% 55%, 15% 30%, 10% 50%, 5% 25%, 2% 45%, 0 30%)'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-40 md:bottom-48 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Tanvir Alam Rifat
          </h2>
          <p className="text-xs md:text-sm text-gray-400 tracking-wide max-w-md mx-auto px-4">
            Graphics Designer • Video Editor • AI Agent • WordPress Developer • Ads Expert
          </p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link to={createPageUrl('About')} className="flex flex-col items-center text-gray-500 hover:text-red-500 transition-colors">
            <span className="text-xs mb-1">Explore</span>
            <ChevronDown className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>

      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full opacity-50 blur-sm"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full opacity-50 blur-sm"
      />
    </div>
  );
}
