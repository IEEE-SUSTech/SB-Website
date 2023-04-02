import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopBar = () => {
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
				<li className="ml-auto mr-5">
					<a
						href="https://twitter.com/IEEEorg"
						target={"_blank"}
						onMouseEnter={() => {}}
						onMouseLeave={() => {}}
					>
						<FontAwesomeIcon icon={["fab", "twitter"]} size="lg" />
					</a>
				</li>
				<li className="mr-5">
					<a
						href="https://www.instagram.com/IEEEorg/"
						target={"_blank"}
						onMouseEnter={() => {}}
						onMouseLeave={() => {}}
					>
						<FontAwesomeIcon
							icon={["fab", "instagram"]}
							size="lg"
						/>
					</a>
				</li>
				<li>
					<a
						href="https://www.facebook.com/IEEE.org/"
						target={"_blank"}
						onMouseEnter={() => {}}
						onMouseLeave={() => {}}
					>
						<FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default TopBar;
