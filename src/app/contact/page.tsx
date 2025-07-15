import Image from "next/image";
import ScrollFadeInServer from "@/components/ScrollFadeInServer";

export default function ContactPage() {
	const description = "LET’S MAKE BEAUTIFUL THINGS TOGETHER";
	const title = "CONTACT US";
	const imageSrc =
		"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Web%20Illustrations/contact.webp";
	const imageAlt = "A collage of Thamba's creative work";

	return (
		<>
			<div className="pt-10 flex flex-col md:flex-row bg-[#facf41] text-black items-start justify-center p-4 border-t-1 border-black">
				<div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
					<ScrollFadeInServer yOffset={20} delay={0}>
						<h1 className="text-2xl md:text-6xl font-light p-2 text-center">
							{title}
						</h1>
					</ScrollFadeInServer>
					<ScrollFadeInServer yOffset={20} delay={0.2}>
						<Image
							src={imageSrc}
							alt={imageAlt}
							width={500}
							height={500}
							priority
						/>
					</ScrollFadeInServer>
				</div>
				<ScrollFadeInServer
					yOffset={20}
					delay={0.4}
					className="w-full md:w-1/2 p-4 md:p-20"
				>
					<p className="text-xl md:text-5xl font-light">{description}</p>
					<div className="font-light text-2xl md:text-4xl pt-10 md:pt-20">
						Mail:
						<a href="mailto:hello@thamba.in">hello@thamba.in</a>
					</div>
					<div className="font-light text-2xl md:text-4xl pt-5">
						Tel: +91 90711 51567
					</div>
				</ScrollFadeInServer>
			</div>

			<div className="flex flex-col md:flex-row ">
				<div className="w-full md:w-1/2 bg-[#ae81ce]">
					<Image
						src={
							"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Static%20/thamba%20contact%20page-9Zu6WzSWVq0LcNv3pWA1Qbeff3h4pq.webp"
						}
						alt="services-1"
						width={800}
						height={800}
						className="p-8 md:p-16"
					/>
				</div>
				<div className="flex flex-col w-full md:w-1/2 bg-[#ec892e] text-black uppercase font-light p-8 md:p-20 lg:p-40 items-start justify-center gap-10">
					<div className="text-4xl md:text-6xl">Location</div>
					<div className="text-3xl md:text-4xl">Nagpur</div>
					<div className="text-lg md:text-xl">
						18, SHIMPLA, Suryoday enclave, opp. Gaurav apartments, Seminary
						Hills, Nagpur-440006
					</div>
					<div>
						<div className="text-xl md:text-2xl">
							<a
								href="mailto:hello@thamba.in"
								className="underline transition-opacity hover:opacity-80"
							>
								hello@thamba.in
							</a>
						</div>
						<div className="text-xl md:text-2xl">+91 90711 51567</div>
					</div>
				</div>
			</div>
		</>
	);
}
