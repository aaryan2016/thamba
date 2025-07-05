"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			// Use 'unset' to revert to the stylesheet's value
			document.body.style.overflow = "unset";
		}
		// Cleanup function to restore scroll on component unmount
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		// Use a fragment to allow the menu to be a sibling of the header
		// This is better for managing stacking contexts (z-index)
		<>
			<header className="bg-[#facf41] text-black p-4 pt-10 sticky top-0 z-10 flex justify-between">
				<div className="container mx-auto flex justify-between items-center">
					{/* Logo */}
					<Link href="/">
						<Image
							src="/logo.avif"
							alt="brand-logo"
							width={200}
							height={50}
							priority // Prioritize loading for LCP
						/>
					</Link>

					{/* Hamburger Menu Button */}
					<div>
						<button
							type="button"
							onClick={() => setIsOpen(!isOpen)}
							className="text-black focus:outline-none flex items-center align-baseline space-x-2 pr-10"
							aria-controls="slide-out-menu"
							aria-expanded={isOpen}
						>
							<svg
								className="w-8 h-8"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
							>
								{/* The icon changes based on the menu state */}
								{isOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1"
										d="M6 18L18 6M6 6l12 12"
									></path>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								)}
							</svg>
							<div className="hiden md:block md:text-xl">Menu</div>
						</button>
					</div>
				</div>
			</header>

			{/* Overlay: covers the page behind the menu */}
			<div
				className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-200 ease-in-out ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				onClick={() => setIsOpen(false)}
				aria-hidden="true"
			/>

			{/* Expanded Menu Panel */}
			<div
				id="slide-out-menu"
				className={`fixed top-0 right-0 h-screen w-4/5 md:w-1/2 bg-[#af82cf] p-8 transform transition-transform duration-300 ease-in-out z-30 ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
				role="dialog"
				aria-modal="true"
			>
				{/* Close Button */}
				<button
					onClick={() => setIsOpen(false)}
					className="absolute top-12 right-20 text-white hover:text-gray-200 focus:outline-none"
					aria-label="Close menu"
					type="button"
				>
					<svg
						className="w-8 h-8"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1"
							d="M6 18L18 6M6 6l12 12"
						></path>
					</svg>
				</button>
				<nav className="flex flex-col items-end space-y-8 mt-20 pr-10">
					<Link
						href="/"
						className="text-3xl md:text-6xl uppercase md:text-nowrap text-black hover:text-gray-200 transition-colors duration-50"
						onClick={() => setIsOpen(false)}
					>
						Home
					</Link>
					<Link
						href="/projects"
						className="text-3xl md:text-6xl uppercase md:text-nowrap text-black hover:text-gray-200 transition-colors duration-50"
						onClick={() => setIsOpen(false)}
					>
						Projects
					</Link>
					<Link
						href="/services"
						className="text-3xl md:text-6xl uppercase md:text-nowrap text-black hover:text-gray-200 transition-colors duration-50"
						onClick={() => setIsOpen(false)}
					>
						Services
					</Link>
					<Link
						href="/about"
						className="text-3xl md:text-6xl uppercase md:text-nowrap text-black hover:text-gray-200 transition-colors duration-50"
						onClick={() => setIsOpen(false)}
					>
						About
					</Link>
					<Link
						href="/contact"
						className="text-3xl md:text-6xl uppercase md:text-nowrap text-black hover:text-gray-200 transition-colors duration-50"
						onClick={() => setIsOpen(false)}
					>
						Contact
					</Link>
				</nav>
			</div>
		</>
	);
}
