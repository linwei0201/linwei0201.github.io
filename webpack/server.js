var config = require("./config.dev.js"),
    path = require("path"),
    fs = require('fs'),
    webpack = require('webpack'),
    express = require('express'),
    WebpackDevServer = require('webpack-dev-server'),
    ProgressPlugin = require('webpack/lib/ProgressPlugin');


var compiler = webpack(config);
const _percent = {}
  compiler.apply(new ProgressPlugin((percentage, msg)=> {
    percentage = Math.floor(percentage * 100)
    if (percentage % 50 == 0) {
      console.log(`${msg} ==> ${percentage}%`);
    }
  }))
var server = new WebpackDevServer(compiler, {
    // webpack-dev-server options

  // contentBase: path.resolve(__dirname, "../dist"),
  // Can also be an array, or: contentBase: "http://localhost/",

  hot: true,
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.
  historyApiFallback: false,

  // Set this if you want to enable gzip compression for assets
  compress: true,

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use "**" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
  // proxy: {
  //   "/api": "http://localhost:8888/dist/",
  // },

  setup: function(app) {
    app.use('/api/:filename', function(req, res){

      let { filename } = req.params,
          content = "",
          filePath = path.resolve(__dirname, `../src/mock/${filename}`);
      if(!filename.endsWith(".json")){
        filePath = `${filePath}.json`;
      }
      if(fs.existsSync(filePath)){
        content = fs.readFileSync(filePath);
        console.log("mock api: ", req.originalUrl, "[success]");
      }else{
        content = "API 404";
        console.log("mock api: ", req.originalUrl, "[404]");
      }

      res.set('Content-Type',"text/html;charset=UTF-8");
      res.write(content);
      res.end();
    })
  },

  // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
  staticOptions: {
  },

  // webpack-dev-middleware options
  quiet: false,
  noInfo: true,
  // lazy: true,
  // filename: "bundle.js",
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // It's a required option.
  // publicPath: "http://127.0.0.1:8888/dist/",
  headers: { "X-Custom-Header": "yes" },
  stats: { colors: true },
  inline: true,
  clientLogLevel: "none"
});
server.listen(8888, 'localhost', function(){
  console.log("dev server started at http://127.0.0.1:8888");
  console.log("static resources are available at http://127.0.0.1:8888/dist/");
});