const path = require('path'),
      fs =   require('fs'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require("extract-text-webpack-plugin"),
      syncMDFilePlugin = require('./plugins/syncFile/syncMDFilesPlugin');

//为src下的所有目录，添加alias
const SRC_PATH = './src';
let dirs = fs.readdirSync(SRC_PATH),
    alias = {};

dirs.forEach(function(dir){
  const fp = path.join(SRC_PATH, dir);
  if(fs.statSync(fp).isDirectory()){
    alias[dir] = path.resolve(__dirname, '../src' , dir)
  }
});

alias["article"] = path.join(__dirname, "../article");

module.exports = {
  getModules: env => {
    let isDev = env == "dev" ? true : false;
    let rules = [
      {
        test: /\.json$/,
        use: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.(jpe?g|png|gif|svg)$/i, use: 'url-loader' },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        use: 'url-loader'
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]'},
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&minetype=application/font-woff&name=fonts/[name].[ext]'},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&minetype=application/octet-stream&name=fonts/[name].[ext]'},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader?name=fonts/[name].[ext]'},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&minetype=image/svg+xml&name=fonts/[name].[ext]'},
      {
        test: /\.md$/,
        use: ['html-loader', 'md-loader']
      }
    ];

    if(isDev){
      rules.push(
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          use: ['style-loader', 'css-loader', 'stylus-loader?resolve url'],
          exclude: /node_modules/
        },
        {
          test: /\.css/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/
        }
      );
    }else{
      rules.push(
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'less-loader']
          }),
          exclude: /node_modules/
        },
        {
          test: /\.styl$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'stylus-loader?resolve url']
          }),
          exclude: /node_modules/
        },
        {
          test: /\.css/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
          }),
          exclude: /node_modules/
        }
      );
    }

    return { rules };
  },
  resolve: {
    alias,
    extensions: ['.js', '.jsx', '.json']
  },
  resolveLoader: {
    modules: ["node_modules", path.join(__dirname, './loaders')]
  },
  getPlugins: env => {
    const isDev = env == "dev" ? true : false;
    let plugins = [
      new HtmlWebpackPlugin({
        title: "Miss Blog",
        hash: false,
        inject: false,
        window: {
          'ENV': env
        },
        // envFile: null,
        filename: 'index.html',
        favicon: 'src/favicon.ico',
        template: 'src/templates/index.ejs'
      }),
      new syncMDFilePlugin({watch: isDev}),
    ];

    if(isDev){
      plugins.push(new webpack.HotModuleReplacementPlugin());
    }else{
      plugins.push(
        new ExtractTextPlugin('css/[name]_[chunkhash:5].css'),
        new webpack.DefinePlugin({
          'process.env':{
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          exclude: ["node_modules"]
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'common' // Specify the common bundle's name.
        })
      );
    }
    return plugins;
  }
}