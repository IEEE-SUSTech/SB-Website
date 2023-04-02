import { Link } from "react-router-dom";

const YearView = () => {
	return (
		<main className="w-full h-[62vh] flex justify-center my-12 text-lg">
			<section className="w-[80%] h-auto flex justify-between items-center">
				<Link
					className="yearCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">2020</p>
				</Link>
				<Link
					className="yearCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2021"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600 "></div>
					<p className="eventLabel w-24 text-center">2021</p>
				</Link>
				<Link
					className="yearCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2022"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">2022</p>
				</Link>
				<Link
					className="yearCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2023"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">2023</p>
				</Link>
			</section>
		</main>
	);
};

export default YearView;
