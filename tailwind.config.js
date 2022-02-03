module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: {
					50: '#EDEDED',
					100: '#dadada',
					200: '#b5b5b5',
					300: '#8f8f8f',
					400: '#6a6a6a',
					500: '#454545',
					600: '#373737',
					700: '#292929',
					800: '#1c1c1c',
					850: '#171717',
					900: '#0e0e0e'
				}
			},
			container: {
				center: true,
				padding: '1rem'
			},
			backgroundImage: {
				'dark-hero': "url('/assets/dark-hero.png')",
				'light-hero': "url('/assets/light-hero.png')"
			}
		}
	},
	plugins: []
}
