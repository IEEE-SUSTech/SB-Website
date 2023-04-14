import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventView = () => {
	const [expanded, setExpended] = useState(0);
	const [index, setIndex] = useState(0);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		const url = "http://localhost:8000/showEvent/0/";
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
			<div className="w-full h-[480px] my-4 flex flex-col justify-center items-center">
				<div className="w-3/4 h-[360px] flex justify-center items-center gap-12 animate-pulse">
					<div className="h-full w-1/4 bg-slate-200 rounded-lg flex flex-col justify-center items-center shadow-md"></div>
					<div className="h-full w-1/4 bg-slate-200 rounded-lg flex flex-col justify-center items-center shadow-md"></div>
					<div className="h-full w-1/4 bg-slate-200 rounded-lg flex flex-col justify-center items-center shadow-md"></div>
				</div>
			</div>
		);

	if (error)
		return (
			<div className="w-full h-[64px] text-center">
				Sorry :( An error has occured
			</div>
		);

	const images = [
		[
			data && data[1]["show_photo"],
			"../../static/frontEnd/image-1.jpg",
			"../../static/frontEnd/image-2.jpg",
			"../../static/frontEnd/image-3.jpg",
			"../../static/frontEnd/image-4.jpg",
			"../../static/frontEnd/image-5.jpg",
			"../../static/frontEnd/image-6.jpg",
			"../../static/frontEnd/image-7.jpg",
			"../../static/frontEnd/image-8.jpg",
			"../../static/frontEnd/image-9.jpg",
			"../../static/frontEnd/image-10.jpg",
		],
		[
			data && data[2]["show_photo"],
			"../../static/frontEnd/image-11.jpg",
			"../../static/frontEnd/image-12.jpg",
			"../../static/frontEnd/image-13.jpg",
		],
		[
			"../../static/frontEnd/main-image3.jpg",
			"../../static/frontEnd/image-14.jpg",
			"../../static/frontEnd/image-15.jpg",
			"../../static/frontEnd/image-16.jpg",
			"../../static/frontEnd/image-17.jpg",
		],
	];

	const nextImage = (eventCardID, arr) => {
		setIndex((index + 1) % arr.length);
		const img = document.getElementById(`eventImg-${eventCardID}`);
		img.classList.add("animate-fadeIn");
		setTimeout(() => {
			img.classList.remove("animate-fadeIn");
		}, 520);
		// The fadeIn animation is a 500ms animation, so something above that allows the effect to apply
	};
	const previousImage = (eventCardID, arr) => {
		const img = document.getElementById(`eventImg-${eventCardID}`);
		img.classList.add("animate-fadeIn");
		setTimeout(() => {
			img.classList.remove("animate-fadeIn");
		}, 520);
		// The fadeIn animation is a 500ms animation, so something above that allows the effect to apply
		if (index == 0) {
			setIndex(arr.length - 1);
			return;
		}
		setIndex(index - 1);
	};

	const triggerArrowAnim = arrowID => {
		document.getElementById(arrowID).classList.toggle("animate-shakeRight");
	};

	const shrinkEventImage = eventCardID => {
		const img = document.getElementById(`eventImg-${eventCardID}`);
		const desc = document.getElementById(`eventDesc-${eventCardID}`);

		img.classList.toggle("h-full");
		img.classList.toggle("h-3/4");

		img.children[0].classList.toggle("rounded-lg");
		img.children[0].classList.toggle("rounded-t-lg");

		desc.classList.toggle("h-0");
		desc.classList.toggle("h-1/4");
	};

	const expandEvent = (eventCardID, arr) => {
		if (expanded === eventCardID) {
			setExpended(0);
			setIndex(0);
		} else {
			setExpended(eventCardID);
		}

		setTimeout(
			() => {
				for (let i = 1; i <= 3; i++) {
					if (i !== eventCardID) {
						document
							.getElementById(`eventCard-${i}`)
							.classList.toggle("hidden");
						document
							.getElementById(`eventCard-${i}`)
							.classList.toggle("opacity-0");
					}
				}
			},
			expanded == eventCardID ? 400 : 200
		);

		const main = document.querySelector("main");
		const section = document.querySelector("#eventSection");
		const card = document.getElementById(`eventCard-${eventCardID}`);
		const img = document.getElementById(`eventImg-${eventCardID}`);
		const returnButton = document.querySelector("#returnButton");
		const bL = document.querySelector("#buttonLeft");
		const bR = document.querySelector("#buttonRight");

		setTimeout(
			() => {
				main.classList.toggle("h-[480px]");
				main.classList.toggle("h-[1280px]");

				section.classList.toggle("h-[360px]");
				section.classList.toggle("h-[1080px]");

				img.classList.toggle("rounded-b-lg");
				img.children[0].classList.toggle("rounded-t-lg");
				img.children[0].classList.toggle("rounded-lg");
				img.children[0].classList.toggle("object-center");
				img.children[0].classList.toggle("object-top");

				card.classList.toggle("w-1/4");
				card.classList.toggle("w-5/6");
				card.classList.toggle("h-full");
				card.classList.toggle("h-5/6");
				card.classList.toggle("hover:scale-105");

				bL.classList.toggle("hidden");
				bL.classList.toggle("opacity-0");
				bR.classList.toggle("hidden");
				bR.classList.toggle("opacity-0");

				returnButton.classList.toggle("hidden");
				returnButton.classList.toggle("flex");
			},
			expanded == 0 ? 200 : 0
			// Wait 200ms if the card is not expanded, do not wait otherwise
		);
	};

	return (
		<main className="w-full h-[480px] my-4 flex flex-col justify-center items-center transition-all duration-[400ms]">
			<div
				id="returnButton"
				className="justify-end items-center gap-4 w-3/4 text-ieeeBlue text-lg font-semibold hidden animate-fadeIn"
			>
				<button
					onMouseEnter={() => {
						triggerArrowAnim("returnArrow");
					}}
					onMouseLeave={() => {
						triggerArrowAnim("returnArrow");
					}}
					onClick={() => {
						expandEvent(expanded);
						shrinkEventImage(expanded);
					}}
				>
					Return to other events
				</button>
				<FontAwesomeIcon
					id="returnArrow"
					icon={["fas", "arrow-right"]}
				/>
			</div>
			<section
				id="eventSection"
				className="w-3/4 h-[360px] flex justify-center items-center gap-12 transition-all duration-[400ms]"
			>
				<button
					id="buttonLeft"
					className="w-9 h-9 font-semibold opacity-0 transition-opacity duration-200 hidden text-ieeeBlue text-2xl rounded-full hover:bg-slate-200"
					onClick={() => {
						previousImage(expanded, images[expanded - 1]);
					}}
				>
					<FontAwesomeIcon icon={["fas", "chevron-left"]} />
				</button>
				<div
					onMouseEnter={() => {
						if (expanded !== 1) {
							shrinkEventImage(1);
						}
					}}
					onMouseLeave={() => {
						if (expanded !== 1) {
							shrinkEventImage(1);
						}
					}}
					onClick={() => {
						expandEvent(1);
					}}
					id="eventCard-1"
					className="h-full w-1/4 bg-slate-200 rounded-lg hover:bg-slate-300 hover:scale-105 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center shadow-md"
				>
					<div
						id="eventImg-1"
						className="h-full w-full grow transition-all duration-200 rounded-t-lg rounded-b-lg flex justify-center items-center"
					>
						<img
							className="w-full h-full object-cover object-center rounded-lg"
							src={
								expanded == 1 ? images[0][index] : images[0][0]
							}
						/>
					</div>
					<div
						id="eventDesc-1"
						className="h-0 w-full bg-slate-600 transition-all duration-200 rounded-b-lg text-white text-center z-10"
					>
						{expanded == 0 && (
							<p className="animate-fadeIn">Branch Meeting</p>
						)}
						{expanded == 1 && (
							<p className="animate-fadeIn flex items-center justify-center h-full">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Omnis officia fugit harum,
								nobis corporis porro qui cum odit commodi
								placeat eos soluta facilis? Ullam, culpa
								doloribus! Quia rem omnis est earum
								exercitationem aliquid, qui nam autem quod quasi
								sunt vero eveniet id amet optio minus blanditiis
								laudantium dolorum ratione impedit obcaecati
								deleniti vitae? Fugit magni dolor quidem, sit
								corporis sed unde, dolore minus necessitatibus
								vero odit, natus provident minima. Perspiciatis
								magnam esse iure, cumque atque expedita eaque
								aperiam commodi dolorem consequuntur veniam modi
								sit maxime sunt quia possimus officia quo ipsam
								optio illum incidunt. Earum, cum pariatur.
								Laudantium, eveniet iste.
							</p>
						)}
					</div>
				</div>
				<div
					onMouseEnter={() => {
						if (expanded !== 2) {
							shrinkEventImage(2);
						}
					}}
					onMouseLeave={() => {
						if (expanded !== 2) {
							shrinkEventImage(2);
						}
					}}
					onClick={() => {
						expandEvent(2);
					}}
					id="eventCard-2"
					className="h-full w-1/4 bg-slate-200 rounded-lg hover:bg-slate-300 hover:scale-105 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center shadow-md"
				>
					<div
						id="eventImg-2"
						className="h-full w-full grow transition-all duration-200 rounded-t-lg rounded-b-lg flex justify-center items-center"
					>
						<img
							className="w-full h-full object-cover object-center rounded-lg"
							src={
								expanded == 2 ? images[1][index] : images[1][0]
							}
						/>
					</div>
					<div
						id="eventDesc-2"
						className="h-0 w-full bg-slate-600 transition-all duration-200 rounded-b-lg text-white text-center z-10"
					>
						{expanded == 0 && (
							<p className="animate-fadeIn">AI Workshop</p>
						)}
						{expanded == 2 && (
							<p className="animate-fadeIn flex items-center justify-center h-full">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Omnis officia fugit harum,
								nobis corporis porro qui cum odit commodi
								placeat eos soluta facilis? Ullam, culpa
								doloribus! Quia rem omnis est earum
								exercitationem aliquid, qui nam autem quod quasi
								sunt vero eveniet id amet optio minus blanditiis
								laudantium dolorum ratione impedit obcaecati
								deleniti vitae? Fugit magni dolor quidem, sit
								corporis sed unde, dolore minus necessitatibus
								vero odit, natus provident minima. Perspiciatis
								magnam esse iure, cumque atque expedita eaque
								aperiam commodi dolorem consequuntur veniam modi
								sit maxime sunt quia possimus officia quo ipsam
								optio illum incidunt. Earum, cum pariatur.
								Laudantium, eveniet iste.
							</p>
						)}
					</div>
				</div>
				<div
					onMouseEnter={() => {
						if (expanded !== 3) {
							shrinkEventImage(3);
						}
					}}
					onMouseLeave={() => {
						if (expanded !== 3) {
							shrinkEventImage(3);
						}
					}}
					onClick={() => {
						expandEvent(3);
					}}
					id="eventCard-3"
					className="h-full w-1/4 bg-slate-200 rounded-lg hover:bg-slate-300 hover:scale-105 transition-all duration-200 cursor-pointer flex flex-col justify-center items-center shadow-md"
				>
					<div
						id="eventImg-3"
						className="h-full w-full grow transition-all duration-200 rounded-t-lg rounded-b-lg flex justify-center items-center"
					>
						<img
							className="w-full h-full object-cover object-center rounded-lg"
							src={
								expanded == 3 ? images[2][index] : images[2][0]
							}
						/>
					</div>
					<div
						id="eventDesc-3"
						className="h-0 w-full bg-slate-600 transition-all duration-200 rounded-b-lg text-white text-center z-10"
					>
						{expanded == 0 && (
							<p className="animate-fadeIn">
								Entrepreneurship Week
							</p>
						)}
						{expanded == 3 && (
							<p className="animate-fadeIn flex items-center justify-center h-full">
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Omnis officia fugit harum,
								nobis corporis porro qui cum odit commodi
								placeat eos soluta facilis? Ullam, culpa
								doloribus! Quia rem omnis est earum
								exercitationem aliquid, qui nam autem quod quasi
								sunt vero eveniet id amet optio minus blanditiis
								laudantium dolorum ratione impedit obcaecati
								deleniti vitae? Fugit magni dolor quidem, sit
								corporis sed unde, dolore minus necessitatibus
								vero odit, natus provident minima. Perspiciatis
								magnam esse iure, cumque atque expedita eaque
								aperiam commodi dolorem consequuntur veniam modi
								sit maxime sunt quia possimus officia quo ipsam
								optio illum incidunt. Earum, cum pariatur.
								Laudantium, eveniet iste.
							</p>
						)}
					</div>
				</div>
				<button
					id="buttonRight"
					onClick={() => {
						nextImage(expanded, images[expanded - 1]);
					}}
					className="w-9 h-9 font-semibold opacity-0 transition-opacity duration-200 delay-100 hidden text-ieeeBlue text-2xl rounded-full hover:bg-slate-200"
				>
					<FontAwesomeIcon icon={["fas", "chevron-right"]} />
				</button>
			</section>
			<section className="h-[60px] w-3/4 flex justify-end items-center text-ieeeBlue text-lg">
				<Link
					to="/archives"
					className="w-12 flex justify-end items-center gap-4"
					onMouseEnter={() => {
						triggerArrowAnim("archivesArrow");
					}}
					onMouseLeave={() => {
						triggerArrowAnim("archivesArrow");
					}}
				>
					Archives
					<FontAwesomeIcon
						id="archivesArrow"
						icon={["fas", "arrow-right"]}
					/>
				</Link>
			</section>
		</main>
	);
};

export default EventView;
