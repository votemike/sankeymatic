#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const symlinkPath = path.join(buildDir, 'd3');
const targetPath = path.join(__dirname, '..', 'node_modules', 'd3');

// Remove existing symlink or directory if it exists
if (fs.existsSync(symlinkPath)) {
  try {
    const stats = fs.lstatSync(symlinkPath);
    if (stats.isSymbolicLink()) {
      fs.unlinkSync(symlinkPath);
    } else if (stats.isDirectory()) {
      fs.rmSync(symlinkPath, { recursive: true, force: true });
    } else {
      fs.unlinkSync(symlinkPath);
    }
  } catch (err) {
    console.warn('Warning: Could not remove existing d3 path:', err.message);
  }
}

// Create the symlink (using 'junction' type for Windows compatibility)
try {
  fs.symlinkSync(path.relative(buildDir, targetPath), symlinkPath, 'junction');
  console.log('Created symlink: build/d3 -> node_modules/d3');
} catch (err) {
  console.error('Error creating symlink:', err.message);
  process.exit(1);
}
