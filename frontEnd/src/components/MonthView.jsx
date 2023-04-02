import { Link } from "react-router-dom";

const MonthView = () => {
	return (
		<main className="w-full h-[62vh] flex justify-center items-center my-12 text-lg">
			<section className="w-[80%] h-[80%] grid grid-cols-4 grid-rows-3 justify-items-center items-center">
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">January</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">February</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">March</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">April</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">May</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">June</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">July</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">August</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">September</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">October</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">November</p>
				</Link>
				<Link
					className="monthCard w-24 h-auto hover:text-ieeeBlue active:scale-95 cursor-pointer"
					to="/pastEvents/2020"
				>
					<div className="eventIcon h-24 w-24 bg-gray-400 hover:bg-gray-600"></div>
					<p className="eventLabel w-24 text-center">December</p>
				</Link>
			</section>
		</main>
	);
};

export default MonthView;
