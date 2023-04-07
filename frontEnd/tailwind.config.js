/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./templates/frontEnd/*.html",
		"./src/*.js",
		"./src/components/*.jsx",
	],
	theme: {
		extend: {
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-15deg)" },
					"50%": { transform: "rotate(15deg)" },
				},
			},
			animation: {
				wiggle: "wiggle 500ms ease-in-out 1",
			},
			backgroundImage: {
				banner: "url('./banner.png')",
			},
			colors: {
				ieeeBlue: "#00629B",
				ieeeDark: "#1D1D1D",
				ieeeActive: "#4E8A33",
				facebookBlue: "#1877F2",
				linkedinBlue: "#0077B5",
				twitterBlue: "#1D9BF0",
				ytRed: "#FF0000",
				spotifyGreen: "#1DB954",
				soundcloudOrange: "#F26F23",
			},
		},
	},
	plugins: [],
};
