module.exports = function(source, map){

  //1. 把---  ---之间的内容去掉
  var start = source.indexOf("---");
  var end = source.indexOf("---", start + 3) + 3;
  source = source.slice(0, start) + source.slice(end)


  //2. md =>html
  var showdown = require("showdown"),
  converter = new showdown.Converter(),
  html      = converter.makeHtml(source);

  this.callback(null, html, map);
}