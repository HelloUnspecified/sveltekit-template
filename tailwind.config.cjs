/* eslint-disable global-require */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			og: ['Roboto']
		},

		extend: {
			colors: {
				'this-offWhite': '#F7F7F7',
				'this-grey': '#353535',
		
				thisOrange: {
					100: '#ffede5',
					200: '#ffcab3',
					300: '#ffa680',
					400: '#ff834d', // base color
					500: '#ff5f1a',
					600: '#e64600',
					700: '#b33600',
					800: '#802700',
					900: '#4d1700'
				},
			}
		}
	},

	variants: {
		extend: {
			fontWeight: ['hover', 'focus']
		}
	},

	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/aspect-ratio')
	]
};
