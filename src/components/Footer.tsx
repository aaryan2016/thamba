import Link from "next/link";
import BottomSection from "@/components/BottomSection";
import HireUsForm from "@/components/ContactForm";
import SideBottom from "@/components/SideBottom";
import NavBar from "./ui/NavBar";

export default function Footer() {
	return (
		<>
			<BottomSection />
			<div
				id="footer-form"
				className="flex flex-col md:flex-row justify-between  border-b-2 border-black"
			>
				<div className="w-full md:w-1/2 h-full flex flex-col justify-between gap-4">
					<HireUsForm />
					<NavBar />
				</div>
				<div className="w-full md:w-1/2">
					<SideBottom />
				</div>
			</div>
			<div className="flex justify-between items-center p-5">
				<div>
					<Link href="/privacy-policy">Privacy Policy</Link>
				</div>
				<div>
					&copy; 2025 by THAMBA
					<sup>TM</sup>
				</div>
			</div>
		</>
	);
}
