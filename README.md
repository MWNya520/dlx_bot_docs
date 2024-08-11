# 迪拉熊 BOT 帮助文档

先把 node.js 给装了，不装玩不了

### 初始化

```
$ pnpm i
```

执行完该命令就可以开始进行下面的操作了，非常简单是不是

### 本地测试

```
$ pnpm start
```

执行该命令会在你家电脑开个黑色窗口，复制一下那个神秘链接，开下来就能看到自己的写的东西了</br>
或者直接push到仓库里面来，[网站](https://dlx.miaowing.top/)会同步更新的

### 构建

```
$ yarn build
```

在黑色窗口执行一下这个命令会在项目根目录出现一个名叫build的文件夹，这是静态网站，放哪都能用</br>
报错就生成不出来了（）

### 编写

[点击查看](https://docusaurus.io/)，感谢你在百忙之中抽出时间来写文档，非常感谢喵~

### 开发

用SSH:

```
$ USE_SSH=true yarn deploy
```

不用SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果你是白嫖pages部署的，这个命令将会协助你构建静态网页然后push到gh-pages分支，白嫖更轻松了（喜） 
