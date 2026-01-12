// index.js - Entry point for webpack bundle
// Import d3 and make it globally available
import * as d3Module from 'd3';

// Attach d3 to window/global IMMEDIATELY
window.d3 = d3Module;

// Now that d3 is on window, we can safely execute the other scripts
// We need to use a require here to ensure d3 is available when they're parsed
require('./constants.js');
require('./sankey.js');
require('./sankeymatic.js');
