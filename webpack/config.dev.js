const path = require('path'),
      { resolve,  getModules, resolveLoader, getPlugins } = require('./config.common'),
      env = process.env.ENVIRONMENT,
      webpack = require('webpack');

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
  module: getModules(env),
  resolve,
  resolveLoader,
  plugins: getPlugins(env).push(
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('../vendor/vendors-manifest.json')
    })
  )
};

module.exports = config;
