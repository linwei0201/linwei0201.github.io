const path = require('path'),
      { resolve,  getModules, resolveLoader, getPlugins } = require('./config.common')

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: "https://linwei0201.github.io/dist/"
  },
  module: getModules("prod"),
  resolve,
  resolveLoader,
  plugins: getPlugins("prod")
};

module.exports = config;
