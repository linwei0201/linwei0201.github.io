const path = require('path'),
      { resolve,  getModules, resolveLoader, getPlugins } = require('./config.common');

const config = {
  entry: [
    'webpack-dev-server/client?http://127.0.0.1:8888/',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist')
  },
  module: getModules("dev"),
  resolve,
  resolveLoader,
  plugins: getPlugins("dev")
};

module.exports = config;
