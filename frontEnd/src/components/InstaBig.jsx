const InstaBig = ({ colored }) => {
	if (!colored)
		return (
			<img
				src="../../static/frontEnd/instagram-white.svg"
				alt="instagram"
				className="h-[24px] w-[24px]"
			/>
		);
	return (
		<img
			src="../../static/frontEnd/instagram-2016-logo-svgrepo-com.svg"
			alt="instagram"
			className="h-[24px] w-[24px]"
		/>
	);
};

export default InstaBig;
