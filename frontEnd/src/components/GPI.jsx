//  A custom component for the Google Podcasts Icon (GPI)
// This is to solve the issue of hovering over the white icon to get the colourful icon

const GPI = ({ colored }) => {
	if (colored) {
		return (
			<img
				src="../../static/frontEnd/icons8-google-podcasts-48.png"
				className="w-[32px] inline"
			/>
		);
	}
	return (
		<img
			src="../../static/frontEnd/icons8-google-podcasts-48-white.png"
			className="w-[32px] inline"
		/>
	);
};

export default GPI;
