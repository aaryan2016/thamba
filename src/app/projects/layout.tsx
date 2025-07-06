"use client";

import { Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import BottomNavBar from "@/components/BottomNavBar";

const roboto = Roboto({
	weight: "200", // '300' = Roboto Light
	subsets: ["latin"],
	variable: "--font-roboto", // optional CSS variable
});

// `metadata` and `viewport` exports are not supported in Client Components.
// You can move them to a Server Component, such as your page.tsx file.
//
// import type { Metadata, Viewport } from "next"
// export const metadata: Metadata = {
//   title: "THAMBA | Road to Great Ideas",
//   description:
//     "We are a creative design studio where we build brands that look sharp, feel right, and make noise.From strategy to design, we craft everything you need to stand out.",
// }
//
// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// }

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const projects = ["pirul", "dravyas", "browser", "oasis", "blueone", "hola"]; // This could be fetched from a CMS or a data file
	const pathname = usePathname();
	const currentSlug = pathname.startsWith("/projects/")
		? pathname.split("/")[2]
		: null;

	return (
		<div className={`${roboto.variable}`}>
			{children}
			{currentSlug && projects.includes(currentSlug) && (
				<BottomNavBar projects={projects} currentSlug={currentSlug} />
			)}
		</div>
	);
}
