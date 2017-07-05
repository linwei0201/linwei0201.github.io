export default [
	{
		createTime: '2017/06/28',
		author: 'linwei0201',
		title: 'git配置及命令介绍',
		subtitle: '列出git常用命令及mac bash中便捷配置',
		filename: 'git',
		path: 'git.md',
		component: () => System.import('../article/git.md')
	},
	{
		createTime: '2017/06/28',
		author: 'linwei0201',
		title: 'mac快捷键',
		subtitle: 'mac各种操作快捷键介绍',
		filename: 'mac',
		path: 'mac.md',
		component: () => System.import('../article/mac.md')
	},
	{
		createTime: '2017/06/28',
		author: 'linwei0201',
		title: 'sublime introduction',
		subtitle: 'sublime introduction, installing and using',
		filename: 'sublime',
		path: 'sublime.md',
		component: () => System.import('../article/sublime.md')
	}
]