import Image from "next/image";
import Link from "next/link";

export default function SideBottom() {
	return (
		<div className="bg-[#facf41] flex flex-col gap-10 items-center justify-center w-full h-full">
			<div className="pt-30">
				<Image
					src={
						"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Static%20/footer-ISiIhsp24gXyr8oPqDNUSUY8sbnh49.webp"
					}
					alt={"footer"}
					width={500}
					height={400}
				/>
			</div>
			<div className="flex items-center justify-between gap-5 md:pt-10 p-5">
				<div className="uppercase font-extralight text-lg text-white hover:text-gray-300 hover:cursor-pointer">
					<Link
						href="https://www.linkedin.com/company/thamba-studio/"
						target="_blank"
						rel="noopener noreferrer"
					>
						linkedin
					</Link>
				</div>
				<div className="uppercase font-extralight text-lg text-white hover:text-gray-300 hover:cursor-pointer">
					<Link
						href="https://www.instagram.com/thamba.studio/#"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</Link>
				</div>
				<div className="uppercase font-extralight text-lg text-white hover:text-gray-300 hover:cursor-pointer ">
					<Link
						href="https://www.threads.com/@thamba.studio"
						target="_blank"
						rel="noopener noreferrer"
					>
						Threads
					</Link>
				</div>
			</div>
		</div>
	);
}
