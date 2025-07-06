"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/projects", label: "Projects" },
	{ href: "/services", label: "Services" },
	{ href: "/about", label: "About" },
	{ href: "/jon", label: "Jobs" },
	{ href: "/contact", label: "Contact" },
];

export default function NavBar() {
	const pathname = usePathname();

	return (
		<nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 p-5 md:justify-between">
			{navLinks.map(({ href, label }) => {
				const isActive = pathname === href;
				return (
					<Link
						key={href}
						href={href}
						className={cn(
							"uppercase font-light text-black transition-colors hover:text-gray-500",
							isActive && "border-b-1 border-black",
						)}
					>
						{label}
					</Link>
				);
			})}
		</nav>
	);
}
