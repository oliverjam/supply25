import civtech from "../images/logos/civtech.png";
import scotgov from "../images/logos/scot-gov.png";

const className = "w-auto h-8";

export function Logos() {
	return (
		<div className="flex items-center justify-center gap-8 px-2">
			<img
				src={civtech.src}
				width={civtech.width}
				height={civtech.height}
				alt="CivTech"
				className={className}
			/>
			<img
				src={scotgov.src}
				width={scotgov.width}
				height={scotgov.height}
				alt="Scottish Government"
				className={className}
			/>
		</div>
	);
}
