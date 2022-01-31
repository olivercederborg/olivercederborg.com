module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#101214',
				'primary-darker': '#0C0D0F',
				'primary-brand': '#987760',
				oliver: {
					100: '#d1d1d1',
					200: '#a2a2a2',
					300: '#747474',
					400: '#454545',
					500: '#171717',
					600: '#121212',
					700: '#0e0e0e',
					800: '#090909',
					900: '#050505'
				}
			},
			container: {
				center: true
			}
		}
	},
	plugins: []
}
