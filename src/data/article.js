export default [
	{
		createTime: "2017/07/16",
		author: "Wei Lin",
		title: "DOM总结",
		subtitle: "总结DOM常用方法及事件模型",
		filename: "dom",
		path: "dom.md",
		summary: "DOM总结: BOM: BOM浏览器对象模型（Browser Object Model）BOM对象是在Web中使用JavaScript的核心，该对象提供了与浏览器交互相关对象结构。BOM由多个子对象组成，其核心为window对象，它是BOM的顶层对象，表示在浏览器环境中的一个全局的顶级对象，所有在浏览器环境中使用的对象都是window对象的子对象。 \"早期是没有BOM标准的，浏览器实现各不相同，直到h5规范中，W3C才把部分BOM的接口比如location和history纳入h5规范中\" 1. ...",
		component: () => System.import('article/dom.md')
	},
	{
		createTime: "2017/06/28",
		author: "linwei0201",
		title: "git配置及命令介绍",
		subtitle: "列出git常用命令及mac bash中便捷配置",
		filename: "git",
		path: "git.md",
		summary: "一、设置Shell中Git的颜色和当前所在分支: 1. cd ~: 2. vi .bashrc: 3. 设置文件内容如下，并保存: 4. 执行 source ./.bashrc: 5. 如果是mac，再执行如下命令,每次开机才会自动生效: 二、设置Git常用别名: \"1./etc/gitconfig 文件：包含了适用于系统所有用户和所有库的值。如果你传递参数选项’--system’ 给 git config，它将明确的读和写这个文件。 2.~/.gitconfig 文件 ：具体到你的用户。你可以...",
		component: () => System.import('article/git.md')
	},
	{
		createTime: "2017/06/28",
		author: "linwei0201",
		title: "mac快捷键",
		subtitle: "mac各种操作快捷键介绍",
		filename: "mac",
		path: "mac.md",
		summary: "\"⌘（command）、⌥（option）、⇧（shift）、⇪（caps lock）、⌃（control）、↩（return）、⌅（enter）\" Command+M:最小化窗口 Command+T: 在浏览器中打开新的选项卡 Command+W: 关闭窗口 Command+Q: 退出程序 Command+Option+I 快捷键打开开发人员工具 Command+Option+J 直接进入 JavaScript 控制台 command+R： 刷新页面 Command+~ 用于同一个应用程序的多...",
		component: () => System.import('article/mac.md')
	}
]