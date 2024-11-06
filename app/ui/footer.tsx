import { EmailForm } from "./email-form.tsx";
import { Img } from "./image.tsx";
import logo from "../images/logo.svg";

export function Footer() {
	return (
		<footer className="py-12 px-6 sm:p-12 sm:pt-32 pb-24 space-y-24 sm:space-y-32 text-sm lg:text-base">
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
	);
}
