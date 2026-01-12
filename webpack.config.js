const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'sankeymatic-bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
};
