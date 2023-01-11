import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const facebook = "https://www.facebook.com/sustechsb/";

const Footer = () => {
	return (
		<section className="bg-black text-white mt-3 w-full h-auto flex justify-center">
			<ul className="h-full w-3/4 flex flex-row justify-center items-center pb-2 mt-2 mb-3">
				<li className="mr-20 w-1/4 pb-16">
					<img
						src="../../static/frontEnd/upcomingEvent.jpg"
						alt="Upcoming Event"
					/>
					<p>
						Join us in our upcoming events! #IEEE{" "}
						<a href="https://ieeer8.org/" target={"_blank"}>
							#IEEERegion8
						</a>
						#IEEEAfrica #IEEESudan
					</p>
				</li>
				<li className="mr-20 w-1/4 pb-6">
					<img
						src="../../static/frontEnd/pastEvent.jpg"
						alt="Past Event"
					/>
					<p>
						تم بالأمس إجراء معاينات اليوم الختامي بالمجمع الجنوبي
						للمترشحين للإنضمام إلى IEEE SUSTech branch. كانت رحلة
						مليئة بالأشخاص الرائعين ، نتمنى لكل من تمت معاينته
						التوفيق ، والذين لم يحالفهم الحظ للوصول إلى هذه المرحلة
						نتمنى لهم التوفيق في المرات القادمة 💙.
					</p>
				</li>
				<li className="w-1/4">
					<img
						src="../../static/frontEnd/podcast.jpg"
						alt="Podcast"
					/>
					<p>Check out our podcast!</p>
					<span className="mr-4">
						<FontAwesomeIcon icon={["fab", "youtube"]} size="xl" />
					</span>
					<span className="mr-4">
						<FontAwesomeIcon icon={["fab", "spotify"]} size="xl" />
					</span>
					<span>
						<FontAwesomeIcon
							icon={["fab", "soundcloud"]}
							size="xl"
						/>
					</span>
				</li>
			</ul>
		</section>
	);
};

export default Footer;
