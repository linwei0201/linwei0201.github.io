const fs = require('fs')
const path = require('path')
const summarize = require('summarize-markdown')

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
    let content = fs.readFileSync(mdPath, {
      charset: 'utf-8'
    }).toString()


    const start = content.indexOf("---");
    const end = content.indexOf("---", start+3) + 3;
    let header = content.substring(start, end),
        obj = {};

    content = summarize(content.replace(header, ""))
              .substring(0, 250);
    header = header.substring(3, header.length - 3);
    const arr = header.split("\n");

    arr.forEach(v => {
      if(!!v.trim()){
        const temp = v.split(":");
        obj[temp[0].trim()] = temp[1].trim();
      }
    })

    const filename = path.basename(mdPath, ".md");
    const filepath = path.basename(mdPath);
    return Object.assign(obj, {
      filename,
      path: filepath,
      summary: `${content}...`
    })
  })

  //4.按照时间从大到小排序
  mdFiles.sort((md1, md2) => md2.createTime - md1.createTime);
  return mdFiles

}

module.exports = getAllMarkdownFile;