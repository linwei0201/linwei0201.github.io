---
createTime : 2017/06/28
author : linwei0201
title : git配置及命令介绍
subtitle: 列出git常用命令及mac bash中便捷配置
---


### 一、设置Shell中Git的颜色和当前所在分支

#### 1. cd ~

#### 2. vi .bashrc

#### 3. 设置文件内容如下，并保存

```js
function parse_git_dirty {
    local git_status=$(git status 2> /dev/null | tail -n1) || $(git status 2> /dev/null | head -n 2 | tail -n1);
    if [[ "$git_status" != "" ]]; then
        local git_now; # 标示
        if [[ "$git_status" =~ nothing\ to\ commit || "$git_status" =~  Your\ branch\ is\ up\-to\-date\ with ]]; then
            git_now="=";
        elif [[ "$git_status" =~ Changes\ not\ staged || "$git_status" =~ no\ changes\ added ]]; then
            git_now='~';
        elif [[ "$git_status" =~ Changes\ to\ be\ committed ]]; then #Changes to be committed
            git_now='*';
        elif [[ "$git_status" =~ Untracked\ files ]]; then
            git_now="+";
        elif [[ "$git_status" =~ Your\ branch\ is\ ahead ]]; then
            git_now="#";
        fi
        echo "${git_now}";
    fi
}

function git_branch {
    ref=$(git symbolic-ref HEAD 2> /dev/null) || return;
    echo "("${ref#refs/heads/}") ";
}

PS1="[\[\033[1;32m\]\w\[\033[0m\]] \[\033[0m\]\[\033[1;36m\]\$(git_branch)\[\033[0;31m\]\$(parse_git_dirty)\[\033[0m\]$ "
```

#### 4. 执行 source ./.bashrc

#### 5. 如果是mac，再执行如下命令,每次开机才会自动生效

```bash
echo "[ -r ~/.bashrc ] && source ~/.bashrc" >> .bash_profile
```

### 二、设置Git常用别名

> 1./etc/gitconfig 文件：包含了适用于系统所有用户和所有库的值。如果你传递参数选项’--system’ 给 git config，它将明确的读和写这个文件。

> 2.~/.gitconfig 文件 ：具体到你的用户。你可以通过传递--global 选项使Git 读或写这个特定的文件。

> 3.位于git目录的config文件 (也就是 .git/config) ：无论你当前在用的库是什么，特定指向该单一的库。每个级别重写前一个级别的值。因此，在.git/config中的值覆盖了在/etc/gitconfig中的同一个值。

```bash
[alias]
  s = status
  st = status
  sb = status -s -b
  #############
  d = diff
  di = diff
  dc = diff --cached
  dk = diff --check
  dck = diff --cached --check
  #############
  c = commit
  ca = commit -a
  cm = commit -m
  ci = commit
  #############
  l = log --oneline
  lg = log --oneline --graph --decorate
  #############
  o = checkout
  co = checkout
  ob = checkout -b
  cob = checkout -b
  #############
  b = branch
  bv = branch -vv
  ba = branch -a
  bd = branch -d
  br = branch -r
  #############
  f = fetch
  fo = fetch origin
  #############
  m = merge
  #############
  ps = push
  pl = pull
  pb = pull --rebase
  psf = push -f
  psu = push -u
  plu = pull -u
  pso = push origin
  plo = pull origin
  pbo = pull --rebase origin
  psfo = push -f origin
  psuo = push -u origin
  pluo = pull -u origin
  #############
  rb = rebase
  #############
  re = reset
  rh = reset HEAD
  reh = reset --hard
  rem = reset --mixed
  res = reset --soft
  rehh = reset --hard HEAD
  remh = reset --mixed HEAD
  resh = reset --soft HEAD
  #############
  w = show
  #############
```


### 三、常用命令介绍

#### 撤销系列

##### untracked撤销

```bash
rm -rf [path]
```

```bash
# 删除 untracked files
git clean -f

# 连 untracked 的目录也一起删掉
git clean -fd
```

```bash
git checkout --ours [path]
```

##### add撤销

```bash
git reset HEAD [file-name]
```

##### commit撤销

```bash
git reset —soft [commit-id]
```

##### 增补提交（不会产生新的commit）

```bash
git commit -C HEAD -a --amend

参数说明
-m “提交的说明”
-a 动把所有已经跟踪过的文件暂存,并提交.(工作目录中修改过的文件都提交到版本库，不需一个一个手动add了)
–amend 增补提交
-C 复用指定提交的提交留言
-c 打开编辑器在已有的提交基础上编辑修改

```

#### stash系列

```bash
git stash list
git stash
git stash show xxx
git stash drop xxx
git stash pop
```

#### push和pull分支默认匹配
```bash
git config --global push.default matching
git branch --set-upstream-to=origin/master master
```
或在.git/config中配置

```bash
 [branch "test_20170209"]
 remote = origin
 merge = refs/heads/test_20170209
```



#### gitignore不起作用解决办法

> .gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的

```shell
git rm -r --cached .
git add .
git commit -m 'update .gitignore'
```
