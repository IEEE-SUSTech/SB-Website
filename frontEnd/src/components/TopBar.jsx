import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import InstaSmall from "./InstaSmall.jsx";

const TopBar = () => {
	const [colored, setColored] = useState(false);
	return (
		<nav className="w-full h-9 bg-black text-white text-center">
			<ul className="flex-row inline-flex w-3/4 items-center h-full">
				<li className="mr-1">
					<a
						className="mr-1 hover:underline"
						href="https://www.ieee.org/"
						target={"_blank"}
					>
						IEEE.org
					</a>
					|
				</li>
				<li className="mr-1">
					<a
						className="mr-1 hover:underline"
						href="https://ieeexplore.ieee.org/Xplore/home.jsp"
						target={"_blank"}
					>
						IEEE Xplore Digital Library
					</a>
					|
				</li>
				<li className="mr-1">
					<a
						className="mr-1 hover:underline"
						href="https://standards.ieee.org/"
						target={"_blank"}
					>
						IEEE Standards
					</a>
					|
				</li>
				<li className="mr-1">
					<a
						className="mr-1 hover:underline"
						href="https://spectrum.ieee.org/"
						target={"_blank"}
					>
						IEEE Spectrum
					</a>
					|
				</li>
				<li className="mr-0">
					<a
						className=" hover:underline"
						href="https://www.ieee.org/sitemap.html"
						target={"_blank"}
					>
						More Sites
					</a>
				</li>
				{/* Left Side ^ Right Side v */}
				<li className="ml-auto mr-5 hover:text-twitterBlue">
					<a href="https://twitter.com/IEEEorg" target={"_blank"}>
						<FontAwesomeIcon
							icon={["fab", "twitter"]}
							style={{ height: 18, width: 18 }}
						/>
					</a>
				</li>
				<li className="mr-5">
					<a
						href="https://www.instagram.com/IEEEorg/"
						target={"_blank"}
						onMouseEnter={() => {
							setColored(true);
						}}
						onMouseLeave={() => {
							setColored(false);
						}}
					>
						<InstaSmall colored={colored} />
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/IEEE.org/"
						target={"_blank"}
						className="hover:text-facebookBlue"
					>
						<FontAwesomeIcon
							icon={["fab", "facebook"]}
							style={{ height: 18, width: 18 }}
						/>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default TopBar;
