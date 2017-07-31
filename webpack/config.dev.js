const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { resolve,  webpackModule, resolveLoader } = require('./config.common'),
      syncMDFilePlugin = require('./plugins/syncFile/syncMDFilesPlugin')

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
  module: webpackModule,
  resolve,
  resolveLoader,
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 启用 HMR
    new HtmlWebpackPlugin({
      title: "开发环境",
      hash: false,
      inject: false,
      window: {
        'ENV': 'dev'
      },
      // envFile: null,
      filename: 'index.html',
      favicon: '',
      template: 'src/templates/index.ejs'
    }),
    new syncMDFilePlugin({watch: true})
  ]
};

module.exports = config;
