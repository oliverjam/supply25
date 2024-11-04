import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { Img } from "./image.tsx";
import logo from "./images/logo.svg";
import { CallToAction } from "./cta.tsx";

const mona = localFont({
	src: "./fonts/mona-sans.woff2",
	variable: "--font-mona-sans",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Supply25",
	description: "@todo",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${mona.className} text-slate-dark`}>
				<nav className="ScrollShrink max-w-7xl z-50 rounded-2xl p-2 sm:p-4 text-sm sm:text-base bg-white/90 shadow-lg backdrop-blur-[2px] flex items-center justify-between gap-4 md:gap-8 lg:gap-16 fixed top-8 left-2 right-2 mx-auto">
					<Img file={logo} alt="Supply25" className="w-24 sm:w-32 md:w-40" />
					{/* <div className="flex gap-4 md:gap-8 flex-1 font-medium text-slate-dark">
						<Link href="/" className="hover:underline">
							Home
						</Link>
						<Link href="/team" className="hover:underline">
							Team
						</Link>
					</div> */}
					<CallToAction />
				</nav>
				{children}
				<script
					async
					src="https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"
				></script>
			</body>
		</html>
	);
}
