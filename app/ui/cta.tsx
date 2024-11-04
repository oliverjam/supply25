import { Phone } from "./icons.tsx";

export function CallToAction() {
	return (
		<a
			href="https://calendar.app.google/ypJiHFiobzbyidXJ6"
			target="_blank"
			className="max-w-max flex items-center gap-2 rounded shadow p-[0.5em] sm:p-[0.75em] bg-pink text-white font-bold"
		>
			<Phone size={24} className="w-[1.5em]" />
			Book a Call
		</a>
	);
}
