import ScrollFadeInServer from "./ScrollFadeInServer";

export default function ServicesCard() {
	const services = [
		{
			title: "Branding & Identity Design",
			desc: "We create distinctive brand identities that reflect your vision and values. From logo design to complete visual systems, we help you build a strong and consistent brand presence.",
		},
		{
			title: "Graphic Design & Visual Communication",
			desc: "Our team delivers impactful designs for packaging, marketing materials, merchandise, and more. Every piece is crafted to communicate clearly and connect with your audience.",
		},
		{
			title: "Social Media & Campaign Design",
			desc: "We design engaging visuals and campaigns for digital platforms that boost your online presence. Our work helps you connect with your audience through consistent and on-brand communication.",
		},
		{
			title: "Fashion & Apparel Design",
			desc: "We offer specialized design solutions for fashion brands — including print development, seasonal collections, and apparel graphics — combining creativity with industry insight.",
		},
		{
			title: "Creative Consultation",
			desc: "We offer expert guidance to shape your brand’s creative direction. Whether you’re launching or growing, we help you make design decisions with clarity and purpose.",
		},
		{
			title: "Printing & Production",
			desc: "We provide reliable, high-quality printing services across formats. With end-to-end execution, you get everything from design to delivery under one roof.",
		},
	];

	return (
		<div className="flex h-full flex-col justify-center space-y-8 bg-[#ec892e] p-8 md:p-20">
			<div className="text-4xl font-light uppercase md:text-6xl text-left text-black">
				Services
			</div>
			<div className="flex flex-col gap-2 md:gap-12">
				{services.map((service, index) => (
					<ScrollFadeInServer
						key={service.title}
						delay={index * 0.1}
						yOffset={20}
					>
						<h2 className="text-2xl font-light uppercase text-black md:text-3xl">
							{service.title}
						</h2>
						<p className="mt-2 text-base font-light text-black md:text-lg">
							{service.desc}
						</p>
					</ScrollFadeInServer>
				))}
			</div>
		</div>
	);
}
