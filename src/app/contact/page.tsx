import HeroSectionDetailed from "@/components/HeroSectionDetailed"
import Image from "next/image"

export default function ContactPage() {
  const description = "LET’S MAKE BEAUTIFUL THINGS TOGETHER"

  return (
    <>
      <HeroSectionDetailed
        title="CONTACT US"
        imageSrc="/CONTACT-THAMBA.avif"
        imageAlt="A collage of Thamba's creative work"
        description={description}
      />

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 bg-[#ae81ce]">
          <Image
            src={
              "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Static%20/thamba%20contact%20page-9Zu6WzSWVq0LcNv3pWA1Qbeff3h4pq.webp"
            }
            alt="services-1"
            width={800}
            height={800}
            className="p-30"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 bg-[#ec892e] text-black uppercase font-light p-40 items-start justify-center gap-10">
          <div className="text-6xl">Location</div>
          <div className="text-4xl">Napur</div>
          <div className="text-xl">
            18, SHIMPLA, Suryoday enclave, opp. Gaurav apartments, Seminary
            Hills, Nagpur-440006
          </div>
          <div>
            <div className="text-2xl">
              <a
                href="
                mailto:info@mysite.com"
              >
                INFO@MYSITE.COM
              </a>
            </div>
            <div className="text-2xl">+91 90711 51567</div>
          </div>
        </div>
      </div>
    </>
  )
}
