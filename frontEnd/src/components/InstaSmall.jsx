import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InstaSmall = ({ colored }) => {
	if (!colored)
		return (
			<FontAwesomeIcon
				icon={["fab", "instagram"]}
				style={{ height: 18, width: 18 }}
			/>
		);
	return (
		<img
			src="../../static/frontEnd/instagram-2016-logo-svgrepo-com.svg"
			alt="instagram"
			className="h-[16px] w-[18px]"
		/>
	);
};

export default InstaSmall;
