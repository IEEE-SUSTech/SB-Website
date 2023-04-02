import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GPI from "./GPI.jsx";
import { useState } from "react";

const facebook = "https://www.facebook.com/sustechsb/";

const Footer = () => {
	const [colored, setColored] = useState(false);
	return (
		<section className="bg-black text-white mt-3 w-full h-auto flex justify-center">
			<ul className="h-full w-3/4 flex flex-row justify-between items-start my-3">
				<li className="w-1/4">
					<img
						src="../../static/frontEnd/upcomingEvent.jpg"
						alt="Upcoming Event"
					/>
					<p>
						Join us in our upcoming events!
						<br />
						#IEEE <br />
						<a
							href="https://ieeer8.org/"
							className="hover:underline"
							target={"_blank"}
						>
							#IEEERegion8
						</a>
						<br />
						#IEEEAfrica
						<br />
						#IEEESudan
					</p>
				</li>
				<li className="w-1/4">
					<img
						src="../../static/frontEnd/pastEvent.jpg"
						alt="Past Event"
					/>
					<p className="text-right" dir="rtl">
						تم بالأمس إجراء معاينات اليوم الختامي بالمجمع الجنوبي
						للمترشحين للإنضمام إلى IEEE SUSTech branch.
						<br />
						كانت رحلة مليئة بالأشخاص الرائعين ، نتمنى لكل من تمت
						معاينته التوفيق ، والذين لم يحالفهم الحظ للوصول إلى هذه
						المرحلة نتمنى لهم التوفيق في المرات القادمة 💙.
					</p>
				</li>
				<li className="w-1/4">
					<img
						src="../../static/frontEnd/podcastAd.jpg"
						alt="Podcast"
					/>
					<p>Check out our podcast!</p>
					<span className="mr-4 hover:text-red-600 hover:cursor-pointer">
						<FontAwesomeIcon icon={["fab", "youtube"]} size="xl" />
					</span>
					<span className="mr-4 hover:text-green-600 hover:cursor-pointer">
						<FontAwesomeIcon icon={["fab", "spotify"]} size="xl" />
					</span>
					<span className="mr-4 hover:text-orange-400 hover:cursor-pointer">
						<FontAwesomeIcon
							icon={["fab", "soundcloud"]}
							size="xl"
						/>
					</span>
					<span
						className="hover:cursor-pointer"
						onMouseOver={() => setColored(true)}
						onMouseLeave={() => setColored(false)}
					>
						<GPI colored={colored} />
					</span>
				</li>
			</ul>
		</section>
	);
};

export default Footer;
