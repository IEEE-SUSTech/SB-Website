import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Navbar = () => {
	const pagesList = [
		[0, "Home", "homeBtn", "/"],
		[1, "About Us", "aboutUsBtn", "/aboutUs"],
		[2, "Past Events", "pastEventsBtn", "/pastEvents"],
		[3, "Teams", "teamsBtn", "/teams"],
		[4, "Magazine", "magazineBtn", "/magazine"],
		[5, "Podcast", "podcastBtn", "/podcast"],
	];
	return (
		<nav
			id="navigationBar"
			className="bg-ieeeBlue h-16 text-gray-200 w-full text-center sticky overflow-y-hidden top-0 shadow-black z-50"
		>
			<ul className="h-full w-3/4 inline-flex flex-row items-center">
				{pagesList.map(([id, pgName, pgBtn, pgLink]) => (
					<li
						key={id}
						className="mr-9 hover:text-white hover:border-b-white hover:border-b-2 transition-colors duration-200"
					>
						<Link id={pgBtn} to={pgLink}>
							{pgName}
						</Link>
					</li>
				))}
				<li className="ml-auto bg-gray-400 rounded-2xl">
					<form action="#">
						<input
							type={"text"}
							className="bg-gray-400 text-white searchBar p-2 rounded-2xl"
							placeholder="Search..."
							name="search"
						/>
						<button className="mr-2 ml-2 pl-1">
							<FontAwesomeIcon
								icon={["fas", "magnifying-glass"]}
								// className="bg-gray-400"
							/>
						</button>
					</form>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
