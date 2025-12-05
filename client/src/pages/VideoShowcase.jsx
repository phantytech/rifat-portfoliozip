import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Clock, Eye, Film } from 'lucide-react';

export default function VideoShowcase() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: 'Brand Commercial',
      category: 'Commercial',
      duration: '0:45',
      views: '12.5K',
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=340&fit=crop',
      description: 'High-energy brand commercial with dynamic transitions and color grading.',
    },
    {
      id: 2,
      title: 'Product Promo',
      category: 'Promotional',
      duration: '1:20',
      views: '8.3K',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=340&fit=crop',
      description: 'Sleek product showcase video with smooth animations and professional lighting.',
    },
    {
      id: 3,
      title: 'Motion Graphics Reel',
      category: 'Motion Graphics',
      duration: '2:00',
      views: '15.2K',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=340&fit=crop',
      description: 'Collection of motion graphics work featuring 2D and 3D animations.',
    },
    {
      id: 4,
      title: 'Social Media Ad',
      category: 'Social Media',
      duration: '0:30',
      views: '25.1K',
      thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&h=340&fit=crop',
      description: 'Engaging social media ad optimized for Instagram and TikTok.',
    },
    {
      id: 5,
      title: 'Corporate Video',
      category: 'Corporate',
      duration: '3:45',
      views: '5.8K',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=340&fit=crop',
      description: 'Professional corporate video with interviews and B-roll footage.',
    },
    {
      id: 6,
      title: 'YouTube Intro',
      category: 'YouTube',
      duration: '0:15',
      views: '32.4K',
      thumbnail: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=600&h=340&fit=crop',
      description: 'Eye-catching YouTube intro with custom animations and sound design.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-red-500 text-sm tracking-widest mb-2">04 / PORTFOLIO</p>
          <h1 className="text-4xl md:text-6xl font-black text-white">Video Editing</h1>
          <div className="w-24 h-1 bg-red-500 mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-12 relative h-12 bg-[#2d2d2d] rounded-lg overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center px-4">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className={`w-0.5 mx-1 rounded-full ${
                  i % 3 === 0 ? 'bg-red-500/50' : i % 2 === 0 ? 'bg-purple-500/30' : 'bg-gray-600'
                }`}
                style={{ height: i % 5 === 0 ? '24px' : '12px' }}
              />
            ))}
          </div>
          <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-red-500" />
          <div className="absolute left-1/3 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative aspect-video overflow-hidden rounded-xl bg-[#2d2d2d]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"
                  >
                    <Play className="w-7 h-7 text-white ml-1" fill="white" />
                  </motion.div>
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm rounded text-xs text-white flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>

                <div className="absolute top-3 left-3 px-2 py-1 bg-red-500/90 backdrop-blur-sm rounded text-xs text-white font-medium">
                  {video.category}
                </div>

                <div className="absolute top-0 left-0 right-0 h-2 bg-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-full">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-2 h-full bg-gray-800 mx-0.5" />
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-full">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="w-2 h-full bg-gray-800 mx-0.5" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-lg text-white group-hover:text-red-500 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {video.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <Film className="w-4 h-4" />
                    {video.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-[#1a1a1a] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative aspect-video bg-black">
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                      <Play className="w-10 h-10 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-red-500/20 text-red-500 text-sm rounded-full">{selectedVideo.category}</span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {selectedVideo.duration}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {selectedVideo.views} views
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{selectedVideo.title}</h2>
                  <p className="text-gray-400 mt-3">{selectedVideo.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
