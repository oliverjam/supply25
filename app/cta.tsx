import { Phone } from "./icons.tsx";

export function CallToAction() {
	return (
		<a
			href="https://calendar.app.google/ypJiHFiobzbyidXJ6"
			target="_blank"
			className="max-w-max flex items-center gap-2 rounded shadow p-2 sm:p-3 bg-pink text-white font-bold"
		>
			<Phone size={24} />
			Book a Call
		</a>
	);
}
