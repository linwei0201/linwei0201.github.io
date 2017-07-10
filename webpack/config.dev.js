var path = require('path')
var fs =   require('fs')
var common = require('./config.common')
var syncMDFilePlugin = require('./plugins/syncFile/syncMDFilesPlugin')

module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)

  webpackConfig.devtool = 'source-map'

  //为src下的所有目录，添加alias
  const src = redSkull.src
  const dirs = fs.readdirSync(src)
  dirs.forEach(function(dirname){
    webpackConfig.resolve.alias[dirname] = path.join(src,dirname)
  });

  //为article目录设置alias
  webpackConfig.resolve.alias["article"] = path.join(src, "../article")


  webpackConfig.resolveLoader.modules.push(path.join(src,'../webpack/loaders'))

  //添加loader，按添加顺序逆序执行
  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'html-loader'
  });
  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'md-loader'
  });

  webpackConfig.plugins.push(new syncMDFilePlugin({watch: true}))

  return webpackConfig
}