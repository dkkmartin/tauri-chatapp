import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'night',
			{
				mytheme: {
					primary: '#003dff',

					secondary: '#0098d7',

					accent: '#00c200',

					neutral: '#171322',

					'base-100': '#1b292d',

					info: '#00deff',

					success: '#00e56d',

					warning: '#ff6000',

					error: '#ff7792'
				}
			}
		]
	},
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		}
	}
}

export default config
