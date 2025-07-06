import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const roboto = Roboto({
	weight: "200", // '300' = Roboto Light
	subsets: ["latin"],
	variable: "--font-roboto", // optional CSS variable
});

export const metadata: Metadata = {
	title: "THAMBA | Road to Great Ideas",
	description:
		"We are a creative design studio where we build brands that look sharp, feel right, and make noise.From strategy to design, we craft everything you need to stand out.",
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${roboto.variable} font-helvetica-light`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
