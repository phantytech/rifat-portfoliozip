# Tanvir Alam Rifat - Portfolio

## Overview
A fullstack React portfolio website for Tanvir Alam Rifat - a creative professional showcasing Graphics Design, Video Editing, AI Agent Development, WordPress Development, and Digital Marketing expertise.

## Project Structure
```
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/         # UI components (Button, Input, Textarea)
│   │   │   └── Layout.jsx  # Main layout with navigation
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── GraphicsShowcase.jsx
│   │   │   ├── VideoShowcase.jsx
│   │   │   ├── WebAI.jsx
│   │   │   └── Contact.jsx
│   │   ├── utils/          # Utility functions
│   │   ├── lib/            # Library utilities
│   │   ├── App.jsx         # Main app with routing
│   │   └── main.jsx        # Entry point
│   └── package.json
├── server/                 # Express backend
│   ├── index.js           # API server with contact form endpoint
│   └── package.json
└── package.json           # Root package.json
```

## Tech Stack
- **Frontend**: React 18, Vite, React Router DOM
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Express.js
- **Port**: Frontend on 5000, Backend on 3001

## Pages
1. **Home** - Hero section with creative design elements (PS toolbar, AE panel)
2. **About** - Bio section with avatar and skills overview
3. **Skills** - Detailed skill categories with progress bars
4. **Graphics Showcase** - Portfolio gallery with category filtering
5. **Video Showcase** - Video portfolio with dark theme
6. **WordPress & AI** - WordPress projects and AI agent showcase
7. **Contact** - Contact form with API integration

## API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/messages` - Get all contact messages
- `GET /api/health` - Health check

## Running the Project
The workflow runs both frontend and backend:
```
cd server && node index.js & cd client && npm run dev
```

## Recent Changes
- December 2025: Initial fullstack setup from .txt component files
