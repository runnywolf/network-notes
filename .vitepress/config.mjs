import { defineConfig } from 'vitepress'

export default defineConfig({
	title: "network-notes",
	description: "...",
	markdown: {
		math: true,
		lineNumbers: true,
		image: {
			lazyLoading: true,
		}
	},
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],
		sidebar: [
			{
				text: 'Examples',
				items: [
					{ text: 'Markdown Examples', link: '/markdown-examples' },
					{ text: 'Runtime API Examples', link: '/api-examples' }
				]
			}
		],
	}
})
