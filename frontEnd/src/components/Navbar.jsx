import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
	return (
		<nav className="bg-ieeeBlue h-16 text-white w-full text-center sticky overflow-y-hidden top-0 z-0">
			<ul className="h-full w-3/4 inline-flex flex-row items-center">
				<li className="mr-9 hover:text-black transition-colors">
					<a href="#">Home</a>
				</li>
				<li className="mr-9 hover:text-black transition-colors duration-200">
					<a href="#">About Us</a>
				</li>
				<li className="mr-9 hover:text-black transition-colors duration-200">
					<a href="#">Past Events</a>
				</li>
				<li className="mr-9 hover:text-black transition-colors duration-200">
					<a href="#">Teams</a>
				</li>
				<li className="mr-9 hover:text-black transition-colors duration-200">
					<a href="#">Magazine</a>
				</li>
				<li className="mr-0 hover:text-black transition-colors duration-200">
					<a href="#">Podcast</a>
				</li>
				<li className="ml-auto bg-gray-500">
					<form action="#">
						<input
							type={"text"}
							className="bg-gray-500 text-white searchBar p-2"
							placeholder="Search..."
							name="search"
						/>
						<button className="mr-2 ml-2 pl-1">
							<FontAwesomeIcon
								icon={["fas", "magnifying-glass"]}
								className="bg-gray-500"
							/>
						</button>
					</form>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
