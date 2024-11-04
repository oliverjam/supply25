import renfrewshire from "./images/logos/renfrewshire-council.png";
import hes from "./images/logos/hes.png";
import nes from "./images/logos/nes.png";
import transport from "./images/logos/transport-scotland.png";
import civtech from "./images/logos/civtech.png";
import scotgov from "./images/logos/scot-gov.png";

const className = "w-auto h-8";

export function Logos() {
	return (
		<div className="flex items-center justify-between gap-4 py-12 px-2">
			<img
				src={renfrewshire.src}
				width={renfrewshire.width}
				height={renfrewshire.height}
				alt="Renfrewshire Council"
				className={className}
			/>
			<img
				src={hes.src}
				width={hes.width}
				height={hes.height}
				alt="Historic Environment Scotland"
				className={className}
			/>
			<img
				src={nes.src}
				width={nes.width}
				height={nes.height}
				alt="NHS Education for Scotland"
				className={className}
			/>
			<img
				src={transport.src}
				width={transport.width}
				height={transport.height}
				alt="Transport Scotland"
				className={className}
			/>
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
