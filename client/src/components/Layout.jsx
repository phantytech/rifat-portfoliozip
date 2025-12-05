import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Zap, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', page: 'Home', icon: Home },
  { name: 'About', page: 'About', icon: User },
  { name: 'Skills', page: 'Skills', icon: Zap },
  { name: 'Contact', page: 'Contact', icon: Mail },
];

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHomePage = currentPageName === 'Home';
  const isDarkPage = currentPageName === 'Home' || currentPageName === 'VideoShowcase';

  return (
    <div className="min-h-screen">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHomePage
            ? 'bg-white/90 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to={createPageUrl('Home')} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg ${
                scrolled || !isHomePage ? 'bg-[#1a1a1a] text-white' : 'bg-white text-[#1a1a1a]'
              }`}>
                T
              </div>
              <span className={`font-bold hidden sm:block ${
                scrolled || !isHomePage ? 'text-[#1a1a1a]' : 'text-white'
              }`}>
                Tanvir Rifat
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={createPageUrl(item.page)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    currentPageName === item.page
                      ? 'bg-red-500 text-white'
                      : scrolled || !isHomePage
                        ? 'text-gray-600 hover:text-[#1a1a1a] hover:bg-gray-100'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                scrolled || !isHomePage
                  ? 'bg-gray-100 text-[#1a1a1a]'
                  : 'bg-white/10 text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={createPageUrl(item.page)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      currentPageName === item.page
                        ? 'bg-[#1a1a1a] text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main>
        {children}
      </main>

      {!isHomePage && (
        <footer className="bg-[#1a1a1a] text-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center font-black text-lg">
                  T
                </div>
                <div>
                  <p className="font-bold">Tanvir Alam Rifat</p>
                  <p className="text-xs text-gray-400">Creative Professional</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400">
                © 2025 All Rights Reserved
              </p>
              
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
