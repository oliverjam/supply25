import { CallToAction } from "./ui/cta.tsx";
import { Img } from "./ui/image.tsx";
import { ArrowRight } from "./ui/icons.tsx";
import { Logos } from "./ui/logos.tsx";
import { Accordion, AccordionTrigger } from "./ui/accordion.tsx";
import { EmailForm } from "./ui/email-form.tsx";
import logo from "./images/logo.svg";
import hero from "./images/hero.png";
import what from "./images/what-we-do.png";
import buyers from "./images/for-buyers.png";
import suppliers from "./images/for-suppliers.png";
import experts from "./images/for-experts.png";
import key from "./images/key.png";
import shapes from "./images/shapes.png";
import feature1 from "./images/feature-1.png";
import feature2 from "./images/feature-2.png";
import feature2_2 from "./images/feature-2.2.png";
import civtech from "./images/civtech-stacked.png";
import threadr from "./images/thread-right.png";
import threadl from "./images/thread-left.png";
import cog from "./images/cog.png";
import squares from "./images/squares.png";

export const metadata = {
	title: "Supply 25",
	description:
		"A platform that allows buyers to easily create and adopt tried and tested high quality assessments for their procurements, that suppliers can complete seamlessly.",
};

export default function Home() {
	return (
		<>
			<section className="pt-32 sm:pt-48 px-4 sm:px-8 pb-36 bg-misty-light">
				<div className="max-w-6xl mx-auto lg:grid grid-cols-[auto_1fr] items-center gap-2">
					<div className="max-w-2xl space-y-8 text-slate-dark">
						<h1 className="font-bold text-4xl sm:text-6xl text-balance">
							Making procurement better, faster and more secure.
						</h1>
						<p className="text-2xl">
							A platform that allows buyers to easily create and adopt tried and
							tested high quality assessments for their procurements, that
							suppliers can complete seamlessly.
						</p>
						<CallToAction />
					</div>
					<Img file={hero} />
				</div>
			</section>
			<section className="relative py-16 space-y-16">
				<Logos />
				<Img file={cog} className="absolute left-0 top-[20%] w-24 md:w-48" />
				<Img
					file={squares}
					className="absolute right-0 top-[60%] w-24 md:w-48"
				/>
				<div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8">
					<h2 className="max-w-max mx-auto rounded-full py-2 px-8 text-xl text-white bg-cornflower">
						What we do
					</h2>
					<p className="text-lg sm:text-xl max-w-2xl mx-auto text-center text-balance">
						Supply25 helps bring different users in the public procurement
						process to a single platform, to improve collaboration and
						efficiency. Resulting in a better procurement outcome for all
						parties.
					</p>
					<Img file={what} />
				</div>
			</section>
			<section className="relative py-12 px-6 sm:p-12 sm:py-24 bg-misty">
				<Img
					file={threadr}
					className="absolute right-0 top-[30%] md:top-[25%] w-1/2"
				/>
				<Img
					file={threadl}
					className="absolute left-0 top-[60%] md:top-[50%] w-1/2"
				/>
				<div className="space-y-28 md:space-y-48">
					<div className="Overlap max-w-5xl mx-auto isolate">
						<Card>
							<div className="space-y-4">
								<h2 className="text-aubergine">
									<div>For</div>
									<div className="text-2xl sm:text-4xl md:text-5xl font-bold">
										Buyers...
									</div>
								</h2>
								<p className="text-slate-light">
									Choose and customise high-quality assessments and easily share
									them with your suppliers to ensure your supply chains are
									safe, resilient and robust.
								</p>
							</div>
							<Img file={buyers} />
						</Card>
						<div className="grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8">
							<CardDark>
								Access a library of tried and tested assessments, such as Cyber
								Security, Data Protection and Accessibility.
							</CardDark>
							<CardDark>
								Automated contract management to make your life easier.
							</CardDark>
							<CardDark>
								Gain insights into your suppliers and supply chain with a
								personalised dashboard of graphs and key metrics.
							</CardDark>
						</div>
					</div>
					<div className="Overlap max-w-5xl mx-auto isolate">
						<Card>
							<div className="space-y-4">
								<h2 className="text-aubergine">
									<div>For</div>
									<div className="text-2xl sm:text-4xl md:text-5xl font-bold">
										Suppliers...
									</div>
								</h2>
								<p className="text-slate-light">
									Save time by completing an assessment once and reuse it to
									streamline your bids for future tenders.
								</p>
							</div>
							<Img file={suppliers} />
						</Card>
						<div className="grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8">
							<CardDark>
								Expert guidance to help you complete assessments efficiently and
								to a high standard.
							</CardDark>
							<CardDark>
								Utilise the improvement plan process to increase your chances of
								winning tenders.
							</CardDark>
							<CardDark>
								Reuse your answers and completed assessments to streamline and
								speed up future tender applications.
							</CardDark>
						</div>
					</div>
					<div className="Overlap max-w-5xl mx-auto isolate">
						<Card>
							<div className="space-y-4">
								<h2 className="text-aubergine">
									<div>For</div>
									<div className="text-2xl sm:text-4xl md:text-5xl font-bold">
										Experts...
									</div>
								</h2>
								<p className="text-slate-light">
									Share your assessments to build authority and establish
									yourself as a thought leader in your area of expertise.
								</p>
							</div>
							<Img file={experts} />
						</Card>
						<div className="grid md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 px-6 sm:px-8">
							<CardDark>
								Discover industry trends and insights as buyers and suppliers
								adopt your assessments.
							</CardDark>
							<CardDark>
								Enhance your visibility and build your reputation as a thought
								leader in the industry.
							</CardDark>
							<CardDark>
								Provide consultancy and advisory support to suppliers looking to
								elevate their compliance and business standards.
							</CardDark>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 px-6 sm:p-12 sm:py-24 bg-misty-light">
				<div className="max-w-5xl mx-auto space-y-24">
					<div className="grid md:grid-cols-2 items-start gap-4 group">
						<div className="grid gap-4">
							<Accordion name="features-1" open>
								<AccordionTrigger>
									Strategic Overview of All Your Procurements
								</AccordionTrigger>
								<p>
									Centralised procurement activity for full visibility, enabling
									teams to monitor progress, identify risks, and drive
									strategic, compliant decisions.
								</p>
							</Accordion>
							<Accordion name="features-1">
								<AccordionTrigger>
									Collaboration Across Teams of Your Organisation
								</AccordionTrigger>
								<p>
									Enhanced teamwork by allowing teams to collaborate directly on
									the platform, streamlining processes, sharing insights and
									aligning on procurement goals.
								</p>
							</Accordion>
							<Accordion name="features-1">
								<AccordionTrigger>
									Create Your Custom Assessments
								</AccordionTrigger>
								<p>
									Tailored assessments to fit your unique procurement needs,
									enabling a more precise evaluation of suppliers aligned with
									your standards and objectives.
								</p>
							</Accordion>
						</div>
						<div className="relative min-h-64 md:group-[:nth-child(odd)]:order-first rounded-lg pl-4 pt-4 md:pl-12 md:pt-12 bg-candy h-full overflow-hidden *:object-cover *:object-left">
							<Img
								file={feature1}
								className="absolute rounded-tl-xl shadow-lg"
							/>
						</div>
					</div>
					<div className="grid lg:grid-cols-2 items-start gap-4 group">
						<div className="grid gap-4">
							<Accordion name="features-2" open>
								<AccordionTrigger>
									Automated Contact Management
								</AccordionTrigger>
								<p>
									No more manual reassessments of your suppliers - our system
									handles compliance checks and reminders, ensuring your
									suppliers stay up-to-date with certifications and standards
								</p>
							</Accordion>
							<Accordion name="features-2">
								<AccordionTrigger>
									Compliance with Best-in-Class Standards
								</AccordionTrigger>
								<p>
									Access a library of high-quality, proven assessments to ensure
									your procurement process meets top industry standards with
									ease and confidence.
								</p>
							</Accordion>
							<Accordion name="features-2">
								<AccordionTrigger>Supply Chain Mapping</AccordionTrigger>
								<p>
									Map your supply chains to gain insights and identify potential
									risks, enhancing resilience and reducing vulnerabilities.
								</p>
							</Accordion>
							<Accordion name="features-2">
								<AccordionTrigger>Supporting Suppliers</AccordionTrigger>
								<p>
									Save time by reusing answers from past assessments, and get a
									second chance with improvement plans if standards aren’t met.
									In-tool guidance makes compliance easier and more achievable.
								</p>
							</Accordion>
						</div>
						<div className="relative min-h-64 lg:group-[:nth-child(odd)]:order-first rounded-lg pl-4 pt-4 md:pl-12 md:pt-12 bg-cornflower h-full overflow-hidden">
							<Img
								file={feature2}
								className="absolute h-full top-20 right-12 rounded-tr-xl shadow-lg object-cover object-right-top"
							/>
							<Img
								file={feature2_2}
								className="absolute w-64 top-8 right-20 rounded-xl shadow-lg object-cover object-top"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="py-12 px-6 sm:p-12 sm:py-24 bg-gradient-to-b from-white to-misty-light relative shadow-lg">
				<Img
					file={key}
					className="hidden md:block absolute w-60 bottom-12 left-12 lg:left-24 2xl:left-[28vw] z-0"
				/>
				<Img
					file={shapes}
					className="hidden md:block absolute w-36 right-12 lg:right-24 2xl:right-[28vw] top-12 z-0"
				/>
				<div className="max-w-lg mx-auto grid justify-items-center gap-6 text-center text-balance isolate">
					<h2 className="text-2xl md:text-4xl font-bold">
						A seamless solution for smarter, safer decisions.
					</h2>
					<p>
						Schedule a call and discover how Supply25 can streamline your
						procurement process
					</p>
					<CallToAction />
				</div>
			</section>
			<footer className="py-12 px-6 sm:p-12 sm:pt-32 pb-24 space-y-24 sm:space-y-32 text-sm lg:text-base Squares">
				<a
					href="https://www.civtech.scot/demo-day-9-supply25"
					target="_blank"
					className="max-w-max mx-auto grid grid-cols-[1.5rem_1.5rem_1fr] md:grid-cols-[3rem_3rem_1fr] *:row-span-full items-center group"
				>
					<Img
						aria-hidden="true"
						file={civtech}
						className="col-start-1 col-end-3 z-0 w-12 md:w-24 h-12 md:h-24 p-1 bg-cornflower"
					/>
					<div className="col-start-2 col-end-4 grid rounded-xl border border-misty py-4 pl-10 pr-4 md:py-12 md:pl-20 md:pr-20 bg-white transition-shadow shadow-lg group-hover:shadow-xl">
						<span className="sr-only">Civ Tech</span>
						<span className="text-lg md:text-2xl font-bold">
							2024 Challenge Winner
						</span>
						<span
							aria-hidden="true"
							className="font-medium max-w-max border-b border-current flex items-center gap-1"
						>
							Read more
							<ArrowRight
								size={16}
								className="transition-transform group-hover:translate-x-0.5"
							/>
						</span>
					</div>
				</a>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="grid gap-1 content-start">
						<Img file={logo} className="w-36" />
						<div className="text-xs">© 2024</div>
					</div>
					{/* <div className="grid gap-1 content-start font-bold">
						<a href="/home">Home</a>
						<a href="/team">Team</a>
					</div> */}
					<div className="grid gap-1 content-start">
						<h2>Contact</h2>
						<a href="mailto:hello@supply25.com" className="font-bold">
							hello@supply25.com
						</a>
						{/* <div className="flex gap-4">
							<a href="">
								<Img file={x} />
							</a>
							<a href="">
								<Img file={facebook} />
							</a>
							<a href="">
								<Img file={instagram} />
							</a>
							<a href="">
								<Img file={linkedin} />
							</a>
						</div> */}
					</div>
					<div className="space-y-2">
						<h2 className="text-lg font-bold">
							Get updates straight to your inbox
						</h2>
						<EmailForm />
					</div>
				</div>
			</footer>
		</>
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
		<div className="p-4 sm:p-6 rounded-xl bg-slate text-white text-sm font-medium grid content-center">
			{children}
		</div>
	);
}
