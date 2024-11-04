import Link from "next/link";
import logo from "./images/logo.svg";
import hero from "./images/hero.png";
import what from "./images/what-we-do.png";
import buyers from "./images/for-buyers.png";
import key from "./images/key.png";
import shapes from "./images/shapes.png";
import civtech from "./images/civtech-stacked.png";
import { Logos } from "./logos.tsx";
import { type StaticImageData } from "next/image";
import { ImagePicker } from "./image-picker.tsx";

export default function Home() {
	return (
		<>
			<nav className="z-50 rounded-2xl p-2 sm:p-4 text-sm sm:text-base bg-white/90 shadow-lg backdrop-blur flex items-center gap-4 md:gap-8 lg:gap-16 fixed top-8 left-2 right-2 mx-auto max-w-7xl">
				<Img file={logo} alt="Supply25" className="w-24 sm:w-32 md:w-40" />
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
					<Img file={hero} />
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
					<Img file={what} />
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
						<Img file={buyers} />
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
						<Img file={buyers} />
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
						<Img file={buyers} />
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
					file={key}
					className="hidden md:block absolute w-60 bottom-12 left-12 z-0"
				/>
				<Img
					file={shapes}
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
			<footer className="py-12 px-6 sm:p-12 sm:py-24 space-y-24">
				<a
					href="https://www.civtech.scot/demo-day-9-supply25"
					className="max-w-max mx-auto grid grid-cols-[3rem_3rem_1fr] *:row-span-full items-center group"
				>
					<Img
						aria-hidden="true"
						file={civtech}
						className="col-start-1 col-end-3 z-0 w-24 h-24 p-1 bg-cornflower"
					/>
					<div className="col-start-2 col-end-4 grid rounded-xl border border-misty py-12 pl-20 pr-20 transition-shadow shadow-lg group-hover:shadow-xl">
						<span className="sr-only">Civ Tech</span>
						<span className="text-2xl font-bold">2024 Challenge Winner</span>
						<span aria-hidden="true" className="font-medium underline">
							Read more
						</span>
					</div>
				</a>
				<div className="grid grid-cols-4 gap-6">
					<div className="grid gap-1 align-content-start">
						<Img file={logo} className="w-36" />
						<div className="text-xs">© 2024</div>
					</div>
					<div className="grid gap-1 align-content-start">
						<a href="/home">Home</a>
						<a href="/team">Team</a>
					</div>
					<div className="grid gap-1 align-content-start">
						<h2>Contact</h2>
						<a href="mailto:hello@supply25.com">hello@supply25.com</a>
						<div className="flex gap-2">
							<a href="">X</a>
							<a href="">F</a>
							<a href="">I</a>
							<a href="">in</a>
						</div>
					</div>
					<form>
						<h2>Get updates straight to your inbox</h2>
						<InputGroup>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="Your email"
								aria-label="Your email"
							/>
						</InputGroup>
					</form>
				</div>
			</footer>
			<section className="min-h-[50vh]"></section>
		</>
	);
}

function InputGroup({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-lg border-2 border-pink flex [&>input]:flex-1 [&>input]:p-2 [&>input]:rounded-l-lg">
			{children}
			<button className="bg-pink text-white w-10 p-2 grid place-content-center">
				{">"}
			</button>
		</div>
	);
}

type ImgProps = {
	file: StaticImageData;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export function Img({ alt = "", file, ...rest }: ImgProps) {
	return (
		<img
			src={file.src}
			width={file.width}
			height={file.height}
			alt={alt}
			{...rest}
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
