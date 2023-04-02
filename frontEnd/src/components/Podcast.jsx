import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Podcast = () => {
	let expandedID = -1;
	const expand = epID => {
		const epTitleSect = document.querySelector(`#epTitleSect-${epID}`);
		const epEmbed = document.querySelector(`#embed-${epID}`);
		epEmbed.classList.toggle("h-0");
		epEmbed.classList.toggle("h-[360px]");
		if (expandedID == epID) {
			setTimeout(() => {
				epTitleSect.classList.add("rounded-bl-2xl");
			}, 702);
		} else {
			epTitleSect.classList.remove("rounded-bl-2xl");
		}
		expandedID = epID;
	};
	const episodes = [
		[
			0,
			"Artificial Intelligence",
			"https://www.youtube-nocookie.com/embed/TigTP9zgXiY",
			"https://open.spotify.com/episode/25ftNcUDpc0vXt92pOMUnf?si=k1-rj9yyS2ShBghC7ypJgg&utm_source",
			"https://soundcloud.com/qabas-ahmed-438077882/artificial-intelligence",
			"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMTEyNzg4LnJzcw/episode/QnV6enNwcm91dC0xMjA0MTA0NA?sa=X&ved=0CAUQkfYCahcKEwiwo8eWgYr-AhUAAAAAHQAAAAAQFw",
			45,
			33,
		],
		[
			1,
			"Virtual Reality",
			"https://www.youtube-nocookie.com/embed/j2q2r87QHEg",
			"https://open.spotify.com/episode/0HNEtfPqDidS6ZgQOnO3od?si=-xADQulKSw6Apj_mTt3Zqw&utm_source=copy-link&dd=1",
			"https://soundcloud.com/qabas-ahmed-438077882/devtech-podcast-episode-2",
			"https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8yMTEyNzg4LnJzcw/episode/QnV6enNwcm91dC0xMjA0MTA0NA?sa=X&ved=0CAUQkfYCahcKEwiopMrHhor-AhUAAAAAHQAAAAAQBA",
			40,
			31,
		],
	];
	return (
		<main className="w-full flex flex-col justify-center items-center gap-3 my-5">
			{episodes.map(
				([id, title, ytLink, spLink, scLink, gpLink, views, likes]) => (
					<section key={id} className="w-2/3">
						<section
							id={`epTitleSect-${id}`}
							className="h-[64px] rounded-bl-2xl rounded-r-2xl rounded-tl-2xl w-full flex items-center bg-slate-200"
						>
							<section className="w-1/2 flex justify-around items-center gap-5 text-lg font-semibold">
								<h1 className="w-1/3">Episode #{id + 1}</h1>
								<h1 className="w-1/2">{title}</h1>
							</section>
							<section
								id={`btnsPannel-${id}`}
								className="btnPanel w-1/2 flex items-center rounded-br-2xl justify-end gap-10 h-full"
							>
								<section className="w-1/2">
									<span className="mr-4 align-text-bottom">
										<FontAwesomeIcon
											icon={["fas", "eye"]}
											style={{ width: 16, height: 16 }}
										/>{" "}
										{views}
									</span>
									<span className="align-text-bottom">
										<FontAwesomeIcon
											icon={["fas", "heart"]}
											style={{ width: 16, height: 16 }}
										/>{" "}
										{likes}
									</span>
								</section>
								<button
									title="Watch The Episode"
									onClick={() => expand(id)}
								>
									<FontAwesomeIcon
										icon={["fab", "youtube"]}
										className="hover:w-[24px] hover:h-[24px]"
										style={{
											color: "#ff0000",
											width: 22,
											height: 22,
										}}
									/>
								</button>
								<a
									href={spLink}
									target="_blank"
									title="Listen On Spotify"
								>
									<FontAwesomeIcon
										icon={["fab", "spotify"]}
										className="hover:w-[24px] hover:h-[24px]"
										style={{
											color: "#1db954",
											width: 22,
											height: 22,
										}}
									/>
								</a>
								<a
									href={scLink}
									target="_blank"
									title="Listen On SoundCloud"
								>
									<FontAwesomeIcon
										icon={["fab", "soundcloud"]}
										className="hover:w-[24px] hover:h-[24px]"
										style={{
											color: "#f26f23",
											width: 22,
											height: 22,
										}}
									/>
								</a>
								<a
									href={gpLink}
									target="_blank"
									title="Listen On Google Podcasts"
									className="mr-5"
								>
									<img
										src="../../static/frontEnd/icons8-google-podcasts-48.png"
										className="w-[22px] h-[22px] hover:w-[24px] hover:h-[24px]"
									/>
								</a>
							</section>
						</section>
						<section
							id={`embed-${id}`}
							className="w-full h-0 transition-all duration-700"
						>
							<section
								id={`embedSection-${id}`}
								className="h-full w-1/2 flex justify-center items-center bg-slate-200 rounded-br-2xl rounded-bl-2xl"
							>
								<iframe
									className="h-[95%] w-[95%]"
									src={ytLink}
									title={title}
									allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							</section>
						</section>
					</section>
				)
			)}
		</main>
	);
};

export default Podcast;
