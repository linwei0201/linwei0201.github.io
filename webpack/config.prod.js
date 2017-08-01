const path = require('path'),
      { resolve,  getModules, resolveLoader, getPlugins } = require('./config.common'),
      env = process.env.ENVIRONMENT;

const getPublic = () => {
  switch(env){
    case "local":
      return "http://127.0.0.1:8080/dist/";
    case "weiweian":
      return "http://missweiweian.com/dist/";
    case "prod":
      return "https://linwei0201.github.io/dist/";
    default:
     return "https://linwei0201.github.io/dist/";
  }
};

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name]_[chunkhash:5].js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: getPublic()
  },
  module: getModules(env),
  resolve,
  resolveLoader,
  plugins: getPlugins(env)
};

module.exports = config;
