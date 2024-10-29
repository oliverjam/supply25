import Link from "next/link";
import logo from "./images/logo.svg";
import image from "./images/home.png";

export default function Home() {
	return (
		<>
			<nav className="rounded-2xl p-2 sm:p-4 text-sm sm:text-base bg-white/75 shadow-lg backdrop-blur flex items-center gap-4 md:gap-8 lg:gap-16 fixed top-8 left-2 right-2 sm:left-4 sm:right-4 mx-auto max-w-6xl">
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
						src={image.src}
						width={image.width}
						height={image.height}
						alt=""
						className=""
					/>
				</div>
			</section>
		</>
	);
}

function CallToAction() {
	return (
		<a className="max-w-max flex items-center rounded shadow p-2 sm:p-3 bg-pink text-white font-bold">
			Book a Call
		</a>
	);
}
