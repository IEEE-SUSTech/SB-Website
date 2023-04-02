import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// components
import TopBar from "./components/TopBar.jsx";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Carousel from "./components/Carousel.jsx";
import Footer from "./components/Footer.jsx";
import YearView from "./components/YearView.jsx";
import MonthView from "./components/MonthView.jsx";
import EventView from "./components/EventView.jsx";
import Podcast from "./components/Podcast.jsx";
// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

window.addEventListener("scroll", e => {
	const nav = document.querySelector("#navigationBar");
	if (window.scrollY > 200) {
		nav.classList.add("shadow-md");
	} else {
		nav.classList.remove("shadow-md");
	}
});

const App = () => {
	return (
		<HashRouter>
			<TopBar />
			<Banner />
			<Navbar />
			<Routes>
				<Route
					exact
					path=""
					element={
						<>
							<Hero />
							<Carousel />
						</>
					}
				/>
				<Route exact path="/aboutUs" />
				<Route exact path="/pastEvents" Component={YearView} />
				<Route exact path="/pastEvents/:year" Component={MonthView} />
				<Route
					exact
					path="/pastEvents/:year/month"
					Component={EventView}
				/>
				<Route exact path="/teams" />
				<Route exact path="/magazine" />
				<Route exact path="/podcast" Component={Podcast} />
			</Routes>
			<Footer />
		</HashRouter>
	);
};

export default App;
