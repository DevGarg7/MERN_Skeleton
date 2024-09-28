const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', // Change to 'production' for production builds
  target: 'node', // Ensure Webpack is compiling for Node.js, not the browser
  entry: './server/server.js', // Replace with the entry point of your server code
  output: {
    path: path.resolve(__dirname, 'dist'), // Where the output will be stored
    filename: 'bundle.js'
  },
  externals: [webpackNodeExternals()], // Avoid bundling node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JavaScript
          options: {
            presets: ['@babel/preset-env'] // Ensure ES6+ is transpiled for Node.js
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  devtool: 'source-map' // Include source maps for easier debugging
};
