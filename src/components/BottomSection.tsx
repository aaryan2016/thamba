export default function BottomSection() {
	return (
		<section className="m-auto flex min-h-[30vh] w-full flex-col items-center justify-center gap-8 bg-[#b8bc6b] p-8 text-white">
			<h2 className="text-center text-4xl font-light uppercase md:text-6xl">
				WHAT’S NEXT STARTS HERE.
			</h2>
			<p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-center text-2xl font-light md:text-4xl">
				<span>Get in touch at</span>
				<a
					href="mailto:hello@thamba.in"
					className="underline transition-opacity hover:opacity-80"
				>
					hello@thamba.in
				</a>
			</p>
		</section>
	);
}
