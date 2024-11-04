import { Img } from "../image.tsx";
import Alexis from "../images/alexis.jpeg";
import Alex from "../images/alex.jpeg";
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
			<section className="max-w-7xl p-6 space-y-12">
				<header className="text-center space-y-6">
					<span className="max-w-max mx-auto rounded-full py-2 px-8 text-sm leading-tight text-white bg-cornflower">
						Life at Supply25
					</span>
					<h2 className="text-4xl font-bold">Our Values</h2>
				</header>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
						<h3 className="text-xl font-medium">Be kind</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</div>
					<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
						<h3 className="text-xl font-medium">Be your own leader</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</div>
					<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
						<h3 className="text-xl font-medium">Growing with curiosity</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</div>
					<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
						<h3 className="text-xl font-medium">Think big and think far</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</div>
					<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
						<h3 className="text-xl font-medium">It's all built on trust</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
					</div>
					<div className="rounded-xl bg-white shadow-xl p-6 text-slate-dark">
						<h3 className="text-xl font-medium">Enjoy the ride</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
							consectetur do
						</p>
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
