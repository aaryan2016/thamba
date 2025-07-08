import PolicyCard from "@/components/PolicyCard";
import ScrollFadeInServer from "@/components/ScrollFadeInServer";

export default function Page() {
	const title = "PRIVACY POLICY & TERMS OF USE";
	const description =
		"Welcome to Thamba. We provide this website and related content (the “thamba.in”) to showcase our creative work, offer our services, and share information about our studio. By accessing or using this Website, you agree to comply with and be bound by these Terms & Conditions of Use and this Privacy Policy. If you do not agree with them, please refrain from using the Website.";

	const privacypolicies = [
		{
			title: "Intellectual Property",
			desc: "All content on this website — including designs, text, images, and graphics — is the property of Thamba or its licensors. This content is protected by copyright, trademark, and other intellectual property laws. No part of this site may be copied, reproduced, or used commercially without our written consent. To request permission, contact us at hello@thamba.in.",
		},
		{
			title: "Use of the Website",
			desc: "This website is for informational purposes, showcasing our creative work and services. Unauthorized use, copying, or distribution of our content or portfolio is prohibited. Third-party trademarks or content displayed here remain the property of their respective owners.",
		},
		{
			title: "Privacy & Data Collection",
			desc: "We respect your privacy. Information we may collect includes personal details (name, email) when you contact us and general website usage data via cookies and analytics tools. We use this information to respond to inquiries, improve the website and our services, and send updates if you subscribe (optional). We do not sell or share your personal data with third parties, except when required by law or to deliver specific services you’ve requested.",
		},
		{
			title: "Cookies & Third-Party Links",
			desc: "We use cookies to enhance your browsing experience. You can disable cookies anytime in your browser settings. This website may include links to external websites. We are not responsible for their content or privacy practices.",
		},
		{
			title: "Disclaimer & Liability",
			desc: "We provide this website 'as is.' Thamba is not responsible for any errors, interruptions, or damages resulting from your use of this site. Use of third-party links is at your own risk. We may update these terms periodically. Changes will be posted here with a new effective date. These Terms and Conditions were last modified on June 24, 2025.",
		},
	];

	return (
		<>
			<div className="pt-10 flex flex-col md:flex-row bg-[#facf41] text-black items-start justify-center p-4 border-t-1 border-black">
				<div className="w-full md:w-1/2 gap-4">
					<ScrollFadeInServer yOffset={20} delay={0}>
						<h1 className="text-4xl md:text-6xl font-light p-4 text-left">
							{title}
						</h1>
					</ScrollFadeInServer>
				</div>
				<ScrollFadeInServer
					yOffset={20}
					delay={0.4}
					className="w-full md:w-1/2 p-4"
				>
					<p className="text-xl md:text-3xl font-light">{description}</p>
				</ScrollFadeInServer>
			</div>
			{privacypolicies.map((policy) => (
				<PolicyCard
					key={policy.title}
					title={policy.title}
					desc={policy.desc}
				/>
			))}
		</>
	);
}
