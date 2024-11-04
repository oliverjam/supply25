import Link from "next/link";
import logo from "./images/logo.svg";
import hero from "./images/hero.png";
import what from "./images/what-we-do.png";
import buyers from "./images/for-buyers.png";
import key from "./images/key.png";
import shapes from "./images/shapes.png";
import { Logos } from "./logos.tsx";
import { type StaticImageData } from "next/image";
import { ImagePicker } from "./image-picker.tsx";

export default function Home() {
	return (
		<>
			<nav className="rounded-2xl p-2 sm:p-4 text-sm sm:text-base bg-white/90 shadow-lg backdrop-blur flex items-center gap-4 md:gap-8 lg:gap-16 fixed top-8 left-2 right-2 mx-auto max-w-7xl">
				<Img {...logo} alt="Supply25" className="w-24 sm:w-32 md:w-40" />
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
					<Img {...hero} />
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
					<Img {...what} />
				</div>
			</section>
			<section className="py-12 px-6 sm:p-12 sm:py-24 bg-misty space-y-28 md:space-y-48">
				<div className="Overlap max-w-5xl mx-auto">
					<Card>
						<div>
							<h2 className="text-aubergine">
								<div>For</div>
								<div className="text-2xl sm:text-4xl md:text-5xl font-bold">
									Experts...
								</div>
							</h2>
							<p className="text-slate-light">
								Manage your procurement process on one platform Manage your
								procurement process on one platform Manage your procurement
							</p>
						</div>
						<Img {...buyers} />
					</Card>
					<div className="grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8">
						<CardDark>
							Manage your procurement process on one platform.
						</CardDark>
						<CardDark>
							Automated contract management to make your life easier.
						</CardDark>
						<CardDark>
							Access to industry approved assessments to assure your suppliers.
						</CardDark>
					</div>
				</div>
				<div className="Overlap max-w-5xl mx-auto">
					<Card>
						<div>
							<h2 className="text-aubergine">
								<div>For</div>
								<div className="text-2xl sm:text-4xl md:text-5xl font-bold">
									Buyers...
								</div>
							</h2>
							<p className="text-slate-light">
								Manage your procurement process on one platform Manage your
								procurement process on one platform Manage your procurement
							</p>
						</div>
						<Img {...buyers} />
					</Card>
					<div className="grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8">
						<CardDark>
							Manage your procurement process on one platform.
						</CardDark>
						<CardDark>
							Automated contract management to make your life easier.
						</CardDark>
						<CardDark>
							Access to industry approved assessments to assure your suppliers.
						</CardDark>
					</div>
				</div>
				<div className="Overlap max-w-5xl mx-auto">
					<Card>
						<div>
							<h2 className="text-aubergine">
								<div>For</div>
								<div className="text-2xl sm:text-4xl md:text-5xl font-bold">
									Suppliers...
								</div>
							</h2>
							<p className="text-slate-light">
								Manage your procurement process on one platform Manage your
								procurement process on one platform Manage your procurement
							</p>
						</div>
						<Img {...buyers} />
					</Card>
					<div className="grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8">
						<CardDark>
							Manage your procurement process on one platform.
						</CardDark>
						<CardDark>
							Automated contract management to make your life easier.
						</CardDark>
						<CardDark>
							Access to industry approved assessments to assure your suppliers.
						</CardDark>
					</div>
				</div>
			</section>
			<section className="py-12 px-6 sm:p-12 sm:py-24 bg-misty-light">
				<div className="max-w-5xl mx-auto space-y-24">
					<ImagePicker />
					<ImagePicker />
				</div>
			</section>
			<section className="py-12 px-6 sm:p-12 sm:py-24 bg-gradient-to-b from-white to-misty-light relative">
				<Img
					{...key}
					className="hidden md:block absolute w-60 bottom-12 left-12 z-0"
				/>
				<Img
					{...shapes}
					className="hidden md:block absolute w-36 right-12 top-12 z-0"
				/>
				<div className="max-w-lg mx-auto grid justify-items-center gap-6 text-center text-balance isolate">
					<h2 className="text-4xl font-bold">
						A seamless solution for smarter, safer decisions.
					</h2>
					<p>
						Schedule a call and discover how Supply25 can streamline your
						procurement process
					</p>
					<CallToAction />
				</div>
			</section>
			<section className="min-h-[50vh]"></section>
		</>
	);
}

type ImgProps = StaticImageData & {
	className?: string;
	alt?: string;
	id?: string;
};
export function Img({ alt = "", src, width, height, className, id }: ImgProps) {
	return (
		<img
			src={src}
			width={width}
			height={height}
			alt={alt}
			className={className}
			id={id}
		/>
	);
}

function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-xl p-6 sm:px-12 md:px-16 sm:pt-12 md:pt-16 pb-[calc(var(--overlap)+2rem)] bg-white shadow-lg">
			<div className="sm:grid grid-cols-2 gap-2 md:gap-6">{children}</div>
		</div>
	);
}

function CardDark({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-4 sm:p-6 rounded-xl bg-slate text-white text-sm font-medium">
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
