import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
			<body className={`${mona.className} text-slate-dark`}>{children}</body>
		</html>
	);
}
