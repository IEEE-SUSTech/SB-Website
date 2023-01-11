import React from "react";
// components
import TopBar from "./components/TopBar.jsx";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

const App = () => {
	return (
		<>
			<TopBar />
			<Banner />
			<Navbar />
			<Hero />
			<Carousel />
			<Footer />
		</>
	);
};

export default App;
