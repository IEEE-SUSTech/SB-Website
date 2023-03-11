//  A custom component for the Google Podcasts Icon (GPI)

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
