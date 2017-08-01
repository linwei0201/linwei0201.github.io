const path = require('path'),
      { resolve,  getModules, resolveLoader, getPlugins } = require('./config.common');

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: "http://127.0.0.1:8080/dist/"
  },
  module: getModules("prod"),
  resolve,
  resolveLoader,
  plugins: getPlugins("prod")
};

module.exports = config;
