import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
// import "https://apis.google.com/js/api.js";

// const start = () => {
// 	gapi.client.init({
// 		'apiKey' : 'AIzaSyBc0M8WuN3W5Ftlm22SucybjqrmBlHt3Ww',
// 		'discoveryDocs' : ['"https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']}).then(() => gapi.client.)
// };

const Podcast = () => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const randomViews = () => {
		return Math.floor(Math.random() * (100 - 70 + 1)) + 70;
	};
	const randomLikes = () => {
		return Math.floor(Math.random() * (75 - 50 + 1)) + 50;
	};

	useEffect(() => {
		const url = "http://localhost:8000/showPodcast/0";
		fetch(url, { method: "GET" })
			.then(response => response.json())
			.then(json => {
				setData(json);
			})
			.catch(error => {
				console.error("Error fetching data: ", error);
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	if (loading)
		return (
			<div className="w-full h-48 flex justify-center items-center my-5">
				<div className="rounded-2xl h-[64px] w-2/3 flex justify-between items-center animate-pulse bg-slate-300">
					<div className="w-1/2 flex justify-around items-center gap-5 h-full">
						<div className="h-[18px] w-1/3 bg-slate-400 rounded-2xl"></div>
						<div className="h-[18px] w-1/2 bg-slate-400 rounded-2xl"></div>
					</div>
					<div className="w-1/2 flex items-center justify-end gap-10 h-full">
						<div className="w-1/2 flex gap-4">
							<div className="h-[16px] w-[16px] rounded-full bg-slate-400"></div>
							<div className="h-[16px] w-[16px] rounded-full bg-slate-400"></div>
						</div>
						<div className="w-[22px] h-[22px] rounded-full bg-slate-400"></div>
						<div className="w-[22px] h-[22px] rounded-full bg-slate-400"></div>
						<div className="w-[22px] h-[22px] rounded-full bg-slate-400"></div>
						<div className="w-[22px] h-[22px] rounded-full bg-slate-400 mr-5"></div>
					</div>
				</div>
			</div>
		);
	if (error)
		return (
			<section className="w-full h-[64px] text-center">
				Sorry :( An error has occured
			</section>
		);

	let expandedID = -1;
	// Variable that will keep track of the last expanded podcast episode section
	// This is needed to enhance make the expansion and collapse animations look compelling
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

	return (
		<main className="w-full flex flex-col justify-center items-center gap-3 my-5">
			{data.map(episode => {
				const id = episode.id;
				const title = episode.title;
				const ytLink = episode.youtube_url;
				const spLink = episode.spotify_url;
				const gpLink = episode.google_podcast_url;
				const scLink = episode.sound_cloud;
				const likes = randomLikes();
				const views = randomViews();
				return (
					<section key={id} className="w-2/3">
						<section
							id={`epTitleSect-${id}`}
							className="h-[64px] rounded-bl-2xl rounded-r-2xl rounded-tl-2xl w-full flex items-center bg-slate-200"
						>
							<section className="w-1/2 flex justify-around items-center gap-5 text-lg font-semibold">
								<h1 className="w-1/3">Episode #{id}</h1>
								<h1 className="w-1/2">{title}</h1>
							</section>
							<section
								id={`btnsPannel-${id}`}
								className="btnPanel w-1/2 flex items-center rounded-br-2xl justify-end gap-10 h-full"
							>
								<section className="w-1/2">
									<span
										className="mr-4 align-text-bottom"
										title="views"
									>
										<FontAwesomeIcon
											icon={["fas", "eye"]}
											style={{
												width: 16,
												height: 16,
											}}
										/>{" "}
										{views}
									</span>
									<span
										className="align-text-bottom"
										title="likes"
									>
										<FontAwesomeIcon
											icon={["fas", "heart"]}
											style={{
												width: 16,
												height: 16,
											}}
										/>{" "}
										{likes}
									</span>
								</section>
								<button
									title="Watch The Episode"
									onClick={() => expand(id)}
									className="hover:animate-wiggle"
								>
									<FontAwesomeIcon
										icon={["fab", "youtube"]}
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
									className="hover:animate-wiggle"
								>
									<FontAwesomeIcon
										icon={["fab", "spotify"]}
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
									className="hover:animate-wiggle"
								>
									<FontAwesomeIcon
										icon={["fab", "soundcloud"]}
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
									className="mr-5 hover:animate-wiggle"
								>
									<img
										src="../../static/frontEnd/icons8-google-podcasts-48.png"
										className="w-[22px] h-[22px]"
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
									allowFullScreen
								></iframe>
							</section>
						</section>
					</section>
				);
			})}
		</main>
	);
};

export default Podcast;
