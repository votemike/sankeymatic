# SankeyMATIC Website Application

This directory contains the SankeyMATIC website application code, which provides a user-friendly interface for creating Sankey diagrams.

## Contents

### Core Website Files
- **index.html** - Main web application interface
- **build.css** - Stylesheet for the website
- **sankeymatic.js** - Website application logic
  - User interface management
  - Input parsing and validation
  - Diagram rendering orchestration
  - Export functionality (PNG, SVG)
  - User preferences and settings
  - Sample diagrams

### Configuration and Data
- **constants.js** - Configuration constants and settings definitions
  - Diagram settings schema
  - Sample diagram recipes
  - Regular expressions for parsing
  - Color themes and font metrics

### Third-party Libraries
- **lz-string.min.js** - String compression for URL encoding
- **d3/** - D3.js library (loaded via CDN in production)
- **canvg/** - Canvas rendering library (loaded via CDN in production)

### Assets
- **i/** - Images and icons
- **transparent_bg.png** - Transparent background pattern

## Dependencies

This website application depends on:

1. **External (CDN)**:
   - D3.js v7.x
   - Canvg v3.0.9

2. **Internal**:
   - **sankey-lib/sankey.js** - Core Sankey diagram layout engine (located in `../sankey-lib/`)

## Architecture

The website is structured as a client-side web application:

1. **User Input** → User enters flow data in text format
2. **Parsing** (sankeymatic.js) → Parses input, validates, and extracts nodes/flows
3. **Layout** (sankey-lib/sankey.js) → Calculates positions for nodes and flows
4. **Rendering** (sankeymatic.js) → Renders SVG diagram using D3.js
5. **Export** (sankeymatic.js) → Exports to PNG or SVG format

## Key Features

- Interactive diagram builder
- Real-time preview with debounced updates
- Extensive customization options (colors, sizes, layouts, labels)
- Multiple export formats (PNG at various scales, SVG)
- Save/load functionality using URL encoding
- Sample diagrams and templates
- Color themes for nodes
- Drag-and-drop node positioning

## Usage

Open `index.html` in a web browser to use the application. The website is designed to work as a static site hosted on any web server.
