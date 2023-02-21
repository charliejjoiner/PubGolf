/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./src/components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		fontFamily: {
			montserrat: ['Montserrat'],
		},
		extend: {
			colors: {
				'footer-color': '#7e8890',
				'brand-color': '#7ea951',
				'dark-color': '#2c3128',
				'mid-color': '#a6b695',
				'light-color': '#ffffff',
				'home-color': '#7b876d',
			},
		},
	},
	plugins: [],
};
