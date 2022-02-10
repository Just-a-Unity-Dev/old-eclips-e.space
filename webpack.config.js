const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/public/dist",
    filename: 'bundle.js'
  }
};