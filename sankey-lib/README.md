# Sankey Diagram Rendering Library

This directory contains the core Sankey diagram layout engine, fully separated from the SankeyMATIC website code.

## Contents

- **sankey.js** - Pure Sankey diagram layout algorithm
  - Calculates node positions and flow paths
  - No DOM dependencies
  - Self-contained with all necessary constants defined internally
  - Requires only D3.js v7.x
  - Can be used independently of the SankeyMATIC website

## Usage

This library extends D3.js with a `d3.sankey()` function that creates Sankey diagram layouts.

### Example

```javascript
// Create a Sankey layout instance
const sankey = d3.sankey()
  .nodeWidth(15)
  .nodeHeightFactor(0.5)
  .nodeSpacingFactor(0.85)
  .size({ w: 960, h: 500 })
  .nodes(nodes)
  .flows(flows);

// Set up the diagram skeleton
sankey.setup();

// Calculate layout (iterations for optimization)
sankey.layout(25);
```

## API

The Sankey layout object provides:

### Configuration Methods
- `.nodeWidth(x)` - Set/get node width
- `.nodeHeightFactor(x)` - Set/get node height factor
- `.nodeSpacingFactor(x)` - Set/get node spacing factor
- `.nodes(x)` - Set/get nodes array
- `.flows(x)` - Set/get flows array
- `.size(x)` - Set/get diagram size {w, h}
- `.rightJustifyEndpoints(x)` - Set/get right justification
- `.leftJustifyOrigins(x)` - Set/get left justification
- `.autoLayout(x)` - Set/get automatic layout
- `.attachIncompletesTo(x)` - Set/get incomplete flow attachment strategy

### Layout Methods
- `.setup()` - Define diagram skeleton (node connections and stages)
- `.layout(iterations)` - Calculate exact positions of nodes and flows
- `.relayout()` - Recalculate flow positions after node movements
- `.stages()` - Get array of stages

## Dependencies

- D3.js v7.x (specifically d3.sum and other d3 utilities)

## Integration

This library is used by the SankeyMATIC website (in the `build/` directory) but can also be used independently for custom Sankey diagram implementations.
