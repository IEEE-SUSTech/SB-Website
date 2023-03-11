const Hero = () => {
	return (
		<>
			<main className="w-full text-center mt-3">
				<h1 id="welcome" className="text-4xl text-ieeeBlue">
					Welcome to the IEEE SUSTech Student Branch!
				</h1>
			</main>
			<section className="w-full h-auto flex justify-center my-3 text-center">
				<img
					src="../../static/frontEnd/LegendaryAJpic.jpg"
					className="w-5/6 h-full shadow-xl shadow-black"
				/>
			</section>
		</>
	);
};

export default Hero;
