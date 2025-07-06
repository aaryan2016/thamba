import Image from "next/image";

export default function SideBottom() {
	return (
		<div className="bg-[#facf41] flex flex-col items-center justify-center w-full h-full">
			<div className="pt-5">
				<Image
					src={
						"https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Static%20/footer-ISiIhsp24gXyr8oPqDNUSUY8sbnh49.webp"
					}
					alt={"footer"}
					width={500}
					height={400}
				/>
			</div>
			<div className="flex items-center justify-center gap-20 w-full px-5 p-10">
				<div className="uppercase font-extralight text-lg text-white hover:text-gray-300 hover:cursor-pointer ">
					Insagram
				</div>
				<div className="uppercase font-extralight text-lg text-white hover:text-gray-300 hover:cursor-pointer">
					Facebook
				</div>
				<div className="uppercase font-extralight text-lg text-white hover:text-gray-300 hover:cursor-pointer">
					X
				</div>
			</div>
		</div>
	);
}
