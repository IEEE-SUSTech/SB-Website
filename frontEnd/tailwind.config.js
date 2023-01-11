/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./templates/frontEnd/*.html",
		"./src/*.js",
		"./src/components/*.jsx",
	],
	theme: {
		extend: {
			backgroundImage: {
				banner: "url('./banner.png')",
			},
			colors: {
				ieeeBlue: "#00629B",
			},
		},
	},
	plugins: [],
};
