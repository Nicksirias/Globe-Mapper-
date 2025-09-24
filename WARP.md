# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Globe Painter is a web application that allows users to draw on a 3D, rotatable sphere. The concept is described as "like MS Paint, but on a globe!" The project is currently in early development with basic HTML structure in place.

## Tech Stack

- **Frontend**: Pure HTML5, CSS3, and vanilla JavaScript
- **No build tools**: Direct file serving, no compilation required
- **No external dependencies**: Self-contained web application

## Development Commands

### Running the Application
```bash
# Serve the application locally using Python (if available)
python -m http.server 8000
# Then open http://localhost:8000 in browser

# Alternative: Using Node.js (if available)
npx http-server . -p 8000

# Or simply open index.html directly in a web browser
Start-Process "index.html"
```

### Version Control
```bash
# Initialize repository (if not done)
git init
git add .
git commit -m "Initial commit"

# Check current status
git status

# View changes
git diff
```

## Architecture Overview

### File Structure
- `index.html` - Main entry point with basic page structure and project description
- `script.js` - JavaScript file (currently empty, ready for 3D globe implementation)  
- `style.css` - Basic styling with blue theme (#2a7ae2) and clean typography
- `.git/` - Git repository (initialized but no commits yet)

### Current State
The project is in a placeholder state with:
- Basic HTML skeleton describing the app concept
- Minimal CSS styling for typography and layout
- Empty JavaScript file ready for implementation
- No 3D graphics or drawing functionality implemented yet

### Expected Development Areas
Based on the project description, future development will likely involve:
- 3D sphere rendering (WebGL, Three.js, or Canvas API)
- Interactive mouse/touch drawing capabilities
- Sphere rotation and navigation controls
- Drawing tools and color selection
- Texture mapping and persistence

## Development Notes

### File Paths
All files use relative paths suitable for direct browser loading or local server deployment.

### Browser Compatibility
Standard HTML5/CSS3/JS - should work in modern browsers without transpilation.

### No Build Process
This is a static web application that doesn't require compilation, bundling, or preprocessing steps.