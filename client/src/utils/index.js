export function createPageUrl(pageName) {
  const routes = {
    'Home': '/',
    'About': '/about',
    'Skills': '/skills',
    'GraphicsShowcase': '/graphics',
    'VideoShowcase': '/video',
    'WebAI': '/web-ai',
    'Contact': '/contact',
  };
  return routes[pageName] || '/';
}
