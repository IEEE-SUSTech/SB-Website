const Banner = () => {
	return (
		<section className="w-full bg-banner h-36 text-center">
			<div className="w-3/4 h-full inline-flex flex-row justify-between items-center">
				<img
					className="h-1/2"
					src="../../static/frontEnd/IEEEstudents.png"
				/>
				<img
					className="h-5/6"
					src="../../static/frontEnd/ColoredLogo.png"
				/>
				<img
					className="h-1/4"
					src="../../static/frontEnd/IEEEblacklogo.png"
				/>
			</div>
		</section>
	);
};

export default Banner;
