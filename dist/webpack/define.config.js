const fs = require('fs')
const path = require('path')

const ARTICLE_PATH = path.join(__dirname, '..', 'article');

const getAllMarkdownFile = function(filePath){

  //1.挨个查找文件
  function walkFile(filePath, callback){
    let result = [];
    const stat = fs.statSync(filePath);
    if(stat.isDirectory()){
      //read dirs
      const dirs = fs.readdirSync(filePath);
      dirs.forEach(p => {
        const myPath = path.join(filePath, p)
        const pStat = fs.statSync(myPath)
        if(pStat.isDirectory()){
          result = result.concat(walkFile(myPath))
        }else{
          result.push(myPath)
        }
      })
    }else{
      result.push(filePath)
    }

    return result
  }

  //2.过滤markdown文件，
  const markdownFilePath = walkFile(filePath).filter((p) => {
    const extname = path.extname(p)
    return extname.toLowerCase() == '.md'
  })

  const mdFiles = markdownFilePath.map(mdPath => {
    //3.读取所有文件内容，查找文件内容里面表示的创建时间，如果没有，默认为今天
    const content = fs.readFileSync(mdPath, {
      charset: 'utf-8'
    }).toString()

    let createTimeStr = content.split('\n')
                               .filter(str => str.indexOf('createTime') >= 0)[0]
                          || `${new Date().toLocaleString()}`

    let titleStr = content.split('\n')
                          .filter(str => str.indexOf('title') >= 0)[0]
                          || ''

    let authorStr = content.split('\n')
                          .filter(str => str.indexOf('author') >= 0)[0]
                          || ''

    const createTime = createTimeStr.split('=')[1].trim();
    const title = titleStr.split('=')[1].trim();
    const author = authorStr.split('=')[1].trim();
    const filename = path.basename(mdPath, ".md");

    return {
      filename: filename,
      createTime,
      title,
      author
    }
  })

  //4.按照时间从大到小排序
  mdFiles.sort((md1, md2) => md2.createTime - md1.createTime);
  return mdFiles

}

module.exports = function(redskull, env){

  const list = getAllMarkdownFile(ARTICLE_PATH);

  return {
    MY_ARTICLE_LIST: JSON.stringify(list)
  }
}