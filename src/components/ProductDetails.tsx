import ScrollFadeInServer from "./ScrollFadeInServer";

interface ProjectCaseStudyProps {
	title: string;
	client: string;
	typeOfClient: string;
	category: string[];
	brief: string;
	whatWeDid: string;
	result: string;
}

export default function ProductDetails({
	title,
	client,
	typeOfClient,
	category,
	brief,
	whatWeDid,
	result,
}: ProjectCaseStudyProps) {
	return (
		<div className="bg-[#f5f0e4] text-black p-8 md:p-16 space-y-12">
			<ScrollFadeInServer yOffset={20} delay={0}>
				<h1 className="text-4xl md:text-5xl font-light">{title}</h1>
			</ScrollFadeInServer>
			<div className="grid md:grid-cols-3 gap-8 text-base md:text-lg">
				<ScrollFadeInServer yOffset={20} delay={0.1}>
					<div className="space-y-6">
						<div>
							<h2 className="uppercase font-semibold tracking-wide">Client</h2>
							<p>{client}</p>
						</div>
						<div>
							<h2 className="uppercase font-semibold tracking-wide">
								Type of Client
							</h2>
							<p>{typeOfClient}</p>
						</div>
						<div>
							<h2 className="uppercase font-semibold tracking-wide">
								Category
							</h2>
							<p>{category.join(", ")}</p>
						</div>
					</div>
				</ScrollFadeInServer>
				<ScrollFadeInServer yOffset={20} delay={0.2}>
					<div className="space-y-4">
						<h2 className="uppercase font-semibold tracking-wide">Brief</h2>
						<p className="leading-relaxed">{brief}</p>
						<h2 className="uppercase font-semibold tracking-wide mt-6">
							What We Did
						</h2>
						<p className="leading-relaxed">{whatWeDid}</p>
					</div>
				</ScrollFadeInServer>
				<ScrollFadeInServer yOffset={20} delay={0.3}>
					<div className="space-y-4">
						<h2 className="uppercase font-semibold tracking-wide">Result</h2>
						<p className="leading-relaxed">{result}</p>
					</div>
				</ScrollFadeInServer>
			</div>
		</div>
	);
}
