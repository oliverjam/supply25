import { Img } from "../ui/image.tsx";
import Alexis from "../images/alexis.jpeg";
import Alex from "../images/alex.jpeg";
import Hire from "../images/hire.png";
import { StaticImageData } from "next/image";

export default function Team() {
	return (
		<div className="bg-slate-dark text-white space-y-24">
			<section className="max-w-6xl mx-auto pt-48 space-y-8">
				<h1 className="text-3xl font-bold text-center">Meet the team</h1>
				<div className="flex flex-wrap justify-center gap-4 *:w-80">
					<TeamCard name="Alexis Lui" title="CEO & Co-Founder" image={Alexis} />
					<TeamCard name="Alex Wong" title="CTO & Co-Founder" image={Alex} />
					<TeamCard name="Alexis Lui" title="CEO & Co-Founder" image={Alexis} />
					<TeamCard name="Alexis Lui" title="CEO & Co-Founder" image={Alexis} />
					<TeamCard name="Alex Wong" title="CTO & Co-Founder" image={Alex} />
				</div>
			</section>
			<section className="max-w-7xl mx-auto p-6 space-y-12">
				<header className="text-center space-y-6">
					<span className="max-w-max mx-auto rounded-full py-2 px-8 text-sm leading-tight text-white bg-cornflower">
						Life at Supply25
					</span>
					<h2 className="text-4xl font-bold">Our Values</h2>
				</header>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<Card>
						<h3 className="text-xl font-medium">Be kind</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</Card>
					<Card>
						<h3 className="text-xl font-medium">Be your own leader</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</Card>
					<Card>
						<h3 className="text-xl font-medium">Growing with curiosity</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</Card>
					<Card>
						<h3 className="text-xl font-medium">Think big and think far</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</Card>
					<Card>
						<h3 className="text-xl font-medium">
							It&apos;s all built on trust
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							Cardonsectetur do
						</p>
					</Card>
					<Card>
						<h3 className="text-xl font-medium">Enjoy the ride</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</Card>
				</div>
			</section>
			<section className="p-6">
				<div className="md:-mb-16 max-w-3xl mx-auto rounded-xl bg-white shadow-xl p-8 md:p-12 lg:p-16 text-slate-dark">
					<div className="grid sm:grid-cols-2 gap-8">
						<Img file={Hire} />
						<div className="space-y-3 sm:space-y-6">
							<h2 className="text-xl font-bold">Interested in joining us?</h2>
							<p>
								We&apos;re not hiring right now but we&apos;re always interested
								in exceptional talent. Please say hi and send us your CV.
							</p>
							<a
								href=""
								target="_blank"
								className="max-w-max flex items-center gap-2 rounded shadow p-[0.5em] sm:p-[0.75em] bg-pink text-white font-bold"
							>
								Get in contact
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

function TeamCard({
	name,
	title,
	image,
}: {
	name: string;
	title: string;
	image: StaticImageData;
}) {
	return (
		<div>
			<Img file={image} className="rounded-xl shadow-xl" />
			<h2 className="mt-3 font-bold">{name}</h2>
			<p className="mt-1">{title}</p>
		</div>
	);
}

function Card({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
			{children}
		</div>
	);
}
