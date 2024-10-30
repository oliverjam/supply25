import Link from "next/link";
import logo from "./images/logo.svg";
import hero from "./images/hero.png";
import what from "./images/what-we-do.png";
import { Logos } from "./logos.tsx";

export default function Home() {
	return (
		<>
			<nav className="rounded-2xl p-2 sm:p-4 text-sm sm:text-base bg-white/90 shadow-lg backdrop-blur flex items-center gap-4 md:gap-8 lg:gap-16 fixed top-8 left-2 right-2 mx-auto max-w-7xl">
				<img
					src={logo.src}
					width="168"
					height="25.1833"
					alt="Supply25"
					className="w-24 sm:w-32 md:w-40"
				/>
				<div className="flex gap-4 md:gap-8 flex-1 font-medium text-slate-dark">
					<Link href="/" className="hover:underline">
						Home
					</Link>
					<Link href="/team" className="hover:underline">
						Team
					</Link>
				</div>
				<CallToAction />
			</nav>
			<section className="pt-32 sm:pt-48 px-4 sm:px-8 pb-12 bg-misty-light">
				<div className="max-w-6xl mx-auto lg:grid grid-cols-[auto_1fr] items-center gap-2">
					<div className="max-w-xl space-y-8 text-slate-dark">
						<h1 className="font-bold text-4xl sm:text-6xl leading-tight">
							The future of intelligent procurement.
						</h1>
						<p className="text-2xl">
							Streamlining procurement by connecting public sector buyers with
							expert knowledge, ensuring compliance and supply chain resilience.
						</p>
						<CallToAction />
					</div>
					<img
						src={hero.src}
						width={hero.width}
						height={hero.height}
						alt=""
						className=""
					/>
				</div>
			</section>
			<section>
				<Logos />
				<div className="max-w-xl mx-auto p-4 sm:p-8 text-center space-y-8">
					<h2 className="max-w-max mx-auto rounded-full py-2 px-8 text-base leading-tight text-white bg-cornflower">
						What we do
					</h2>
					<p className="text-lg sm:text-xl">
						Supply25 helps bring different users in the public procurement
						process to a single platform, to improve collaboration and
						efficiency. Resulting in a better procurement outcome for all
						parties.
					</p>
					<img
						src={what.src}
						width={what.width}
						height={what.height}
						alt=""
						className=""
					/>
				</div>
			</section>
			<section className="p-4 sm:p-12 sm:pb-24 bg-misty">
				<div className="max-w-5xl mx-auto rounded-xl p-4 sm:p-16 bg-white shadow-lg">
					<div className="space-y-4">
						<h2 className="text-aubergine">
							<div>For</div>
							<div className="text-2xl sm:text-5xl font-bold">Buyers...</div>
						</h2>
						<p className="text-slate-light">
							Manage your procurement process on one platform Manage your
							procurement process on one platform Manage your procurement
						</p>
					</div>
					<div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 -mx-6 -mb-28">
						<Card>Manage your procurement process on one platform.</Card>
						<Card>Manage your procurement process on one platform.</Card>
						<Card>Manage your procurement process on one platform.</Card>
					</div>
				</div>
			</section>
			<section className="min-h-[50vh]"></section>
		</>
	);
}

function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-4 sm:p-8 rounded-xl bg-slate text-white text-sm font-medium">
			{children}
		</div>
	);
}

function CallToAction() {
	return (
		<a className="max-w-max flex items-center rounded shadow p-2 sm:p-3 bg-pink text-white font-bold">
			Book a Call
		</a>
	);
}
