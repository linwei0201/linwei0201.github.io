/*
获取article下的md文件列表
生成一个data/article.js文件，export一个对象数组
{
  filename:
  path:
  creatTime:
  author:
  component: () => System.import(path)
}
 */
var path = require('path')
var fs =   require('fs')
var watch = require('watch')
var getAllMarkdownFile = require('./getArticles');
var curContent = "",
    isWatch = false;

const ARTICLE_PATH = path.join(__dirname, '../../..', 'article');
const WRITE_PATH = path.join(__dirname, '../../../src/data/article.js');

function articleToData(){
  const list = getAllMarkdownFile(ARTICLE_PATH)
  let res = [];
  list.forEach(v => {
    res.push(`${objToString(v)}`)
  });
  return `export default [\n${res.join(',\n')}\n]`
}

function objToString(obj){
  let res = [];
  for(let key in obj){
    res.push(`\t\t${key}: ${JSON.stringify(obj[key])}`)
  }
  res.push(`\t\tcomponent: () => System.import('article/${obj.path}')`);
  return `\t{\n${res.join(',\n')}\n\t}`
}

function writeFile(){
  let content = articleToData();
  if(curContent == content){
    return false;
  }
  curContent = content;

  fs.writeFile(WRITE_PATH, content);
}

function syncMDFilePlugin(options){
  isWatch = (options && options.watch) || false;
}


Object.assign(syncMDFilePlugin.prototype, {
  apply: compiler => {
    compiler.plugin('compilation', function(compilation, callback) {
      writeFile();
      if(isWatch){
        watch.watchTree(ARTICLE_PATH, function (f, curr, prev) {
          writeFile();
        });
      }
    });
  }
});

module.exports = syncMDFilePlugin;
