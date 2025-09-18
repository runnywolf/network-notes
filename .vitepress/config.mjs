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
		outline: {
      level: [2, 3], // 顯示 h2, h3
    },
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Examples', link: '/markdown-examples' }
		],
		sidebar: [
			{
				text: "NTN",
				items: [
					{ text: "Rule-based path selection in NTN", link: '/ntn/paper-1' },
				]
			}
		],
	}
})

export class Outline {
	
}
