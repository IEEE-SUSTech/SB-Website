import React from "react";

const Hero = () => {
	return (
		<>
			<main className="w-full text-center mt-3">
				<h1 className="text-4xl text-ieeeBlue">
					Welcome to the IEEE SUSTech Student Branch!
				</h1>
			</main>
			<section className="w-full h-auto flex justify-center mt-3 text-center">
				<img
					src="../../static/frontEnd/LegendaryAJpic.jpg"
					className="w-5/6 h-full"
				/>
			</section>
		</>
	);
};

export default Hero;
