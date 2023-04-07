import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InstaBig from "./InstaBig.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const [colored, setColored] = useState(false);
	return (
		<footer className="w-full h-48 bg-ieeeDark text-slate-200 flex justify-center items-center">
			<div className="w-3/4 h-3/4">
				<h2 className="text-xl">Keep in touch with us</h2>
				<hr className="w-1/6 border-slate-200 my-2" />
				<div className="flex justify-start items-center w-full gap-7">
					<a href="" target="_blank">
						<FontAwesomeIcon
							icon={["fab", "twitter"]}
							style={{ height: 24, width: 24 }}
							className="hover:text-twitterBlue"
						/>
					</a>
					<a href="" target="_blank">
						<FontAwesomeIcon
							icon={["fab", "facebook"]}
							style={{ height: 24, width: 24 }}
							className="hover:text-facebookBlue"
						/>
					</a>
					<a
						href=""
						target="_blank"
						onMouseEnter={() => {
							setColored(true);
						}}
						onMouseLeave={() => {
							setColored(false);
						}}
					>
						<InstaBig colored={colored} />
					</a>
					<a href="" target="_blank">
						<FontAwesomeIcon
							icon={["fab", "youtube"]}
							style={{ height: 24, width: 24 }}
							className="hover:text-ytRed"
						/>
					</a>
					<a href="" target="_blank">
						<FontAwesomeIcon
							icon={["fab", "linkedin"]}
							style={{ height: 24, width: 24 }}
							className="hover:text-linkedinBlue"
						/>
					</a>
				</div>
				<div className="flex justify-start items-center w-full gap-8 mt-4">
					<Link to={"/"} className="hover:underline">
						Home
					</Link>
					<Link to={"/aboutUs"} className="hover:underline">
						About Us
					</Link>
					<Link to={"/pastEvents"} className="hover:underline">
						Past Events
					</Link>
					<Link to={"/teams"} className="hover:underline">
						Teams
					</Link>
					<Link to={"/magazine"} className="hover:underline">
						Magazine
					</Link>
					<Link to={"/podcast"} className="hover:underline">
						Podcast
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
