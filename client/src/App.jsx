import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import GraphicsShowcase from './pages/GraphicsShowcase';
import VideoShowcase from './pages/VideoShowcase';
import WebAI from './pages/WebAI';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();
  
  const getPageName = () => {
    const path = location.pathname;
    const routes = {
      '/': 'Home',
      '/about': 'About',
      '/skills': 'Skills',
      '/graphics': 'GraphicsShowcase',
      '/video': 'VideoShowcase',
      '/web-ai': 'WebAI',
      '/contact': 'Contact',
    };
    return routes[path] || 'Home';
  };

  return (
    <Layout currentPageName={getPageName()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/graphics" element={<GraphicsShowcase />} />
        <Route path="/video" element={<VideoShowcase />} />
        <Route path="/web-ai" element={<WebAI />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
