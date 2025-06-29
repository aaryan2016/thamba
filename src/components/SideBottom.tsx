import Image from "next/image"

export default function SideBottom() {
  return (
    <>
      <div className="bg-[#facf41] flex flex-col items-center justify-center w-full h-full">
        <div className="pt-5">
          <Image src={"/footer.avif"} alt={"footer"} width={500} height={400} />
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
    </>
  )
}
