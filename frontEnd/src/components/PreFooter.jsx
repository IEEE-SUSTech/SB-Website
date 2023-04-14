import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GPI from "./GPI.jsx";
import { useState } from "react";

const PreFooter = () => {
	const [colored, setColored] = useState(false);
	return (
		<section className="bg-black text-white mt-3 w-full flex justify-center">
			<ul className="h-full w-3/4 flex flex-row justify-between items-start my-3">
				<li className="w-1/4">
					<img
						src="../../static/frontEnd/upcomingEvent.jpg"
						alt="Upcoming Event"
					/>
					<a
						href="https://www.facebook.com/hashtag/ieee?__eep__=6&__cft__[0]=AZWcd0Lq0XFMm8USINSfcXNXHwfJ8i8uM-TjD6Prlgl6y1vvqF2fgLxwoRURbXtlJiarEwDtwmRObZdEJu4h2NBuPzwr9z8Ayr64qn6hURvfNYf7by3E89zwt6JJoP3-_XZR3kVO6ivNZBQc7YuUps_9XZAd_Clh67Oz2UeiAltBUnnA3Uxpr7R5zlrRtTKgbVRYkqpRT4P_JqMoCe11EKGR&__tn__=*NK-R"
						className="hover:underline mr-2"
						target="_blank"
					>
						#IEEE
					</a>
					<a
						href="https://www.facebook.com/hashtag/ieeeregion8?__eep__=6&__cft__[0]=AZWcd0Lq0XFMm8USINSfcXNXHwfJ8i8uM-TjD6Prlgl6y1vvqF2fgLxwoRURbXtlJiarEwDtwmRObZdEJu4h2NBuPzwr9z8Ayr64qn6hURvfNYf7by3E89zwt6JJoP3-_XZR3kVO6ivNZBQc7YuUps_9XZAd_Clh67Oz2UeiAltBUnnA3Uxpr7R5zlrRtTKgbVRYkqpRT4P_JqMoCe11EKGR&__tn__=*NK-R"
						className="hover:underline mr-2"
						target="_blank"
					>
						#IEEERegion8
					</a>
					<a
						href="https://www.facebook.com/hashtag/ieeeafrica?__eep__=6&__cft__[0]=AZWcd0Lq0XFMm8USINSfcXNXHwfJ8i8uM-TjD6Prlgl6y1vvqF2fgLxwoRURbXtlJiarEwDtwmRObZdEJu4h2NBuPzwr9z8Ayr64qn6hURvfNYf7by3E89zwt6JJoP3-_XZR3kVO6ivNZBQc7YuUps_9XZAd_Clh67Oz2UeiAltBUnnA3Uxpr7R5zlrRtTKgbVRYkqpRT4P_JqMoCe11EKGR&__tn__=*NK-R"
						className="hover:underline mr-2"
						target="_blank"
					>
						#IEEEAfrica
					</a>
					<br />
					<a
						href="https://www.facebook.com/hashtag/ieeesudan?__eep__=6&__cft__[0]=AZWcd0Lq0XFMm8USINSfcXNXHwfJ8i8uM-TjD6Prlgl6y1vvqF2fgLxwoRURbXtlJiarEwDtwmRObZdEJu4h2NBuPzwr9z8Ayr64qn6hURvfNYf7by3E89zwt6JJoP3-_XZR3kVO6ivNZBQc7YuUps_9XZAd_Clh67Oz2UeiAltBUnnA3Uxpr7R5zlrRtTKgbVRYkqpRT4P_JqMoCe11EKGR&__tn__=*NK-R"
						className="hover:underline mr-2"
						target="_blank"
					>
						#IEEESudan
					</a>
					<a
						href="https://www.facebook.com/hashtag/ieeesustech?__eep__=6&__cft__[0]=AZWcd0Lq0XFMm8USINSfcXNXHwfJ8i8uM-TjD6Prlgl6y1vvqF2fgLxwoRURbXtlJiarEwDtwmRObZdEJu4h2NBuPzwr9z8Ayr64qn6hURvfNYf7by3E89zwt6JJoP3-_XZR3kVO6ivNZBQc7YuUps_9XZAd_Clh67Oz2UeiAltBUnnA3Uxpr7R5zlrRtTKgbVRYkqpRT4P_JqMoCe11EKGR&__tn__=*NK-R"
						className="hover:underline"
						target="_blank"
					>
						#IEEESUSTech
					</a>
				</li>
				<li className="w-1/4">
					<img src="../../static/frontEnd/weekly-news-crop.jpg" />
					<a href="https://www.facebook.com/sustechsb/photos/pb.100064370034225.-2207520000./5782344038522876/?type=3">
						Keep up with the latest in the tech world!
					</a>
				</li>
				<li className="w-1/4">
					<img
						src="../../static/frontEnd/podcastAd.jpg"
						alt="Podcast"
					/>
					<span className="mr-8">Check out our podcast!</span>
					<span className="mr-4 hover:text-ytRed hover:cursor-pointer">
						<FontAwesomeIcon icon={["fab", "youtube"]} size="xl" />
					</span>
					<span className="mr-4 hover:text-spotifyGreen hover:cursor-pointer">
						<FontAwesomeIcon icon={["fab", "spotify"]} size="xl" />
					</span>
					<span className="mr-4 hover:text-soundcloudOrange hover:cursor-pointer">
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

export default PreFooter;
