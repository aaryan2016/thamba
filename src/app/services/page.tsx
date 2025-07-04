import HeroSectionDetailed from "@/components/HeroSectionDetailed"
import ServicesCard from "@/components/ServicesCard"
import Image from "next/image"

export default function ServicesPage() {
  const description =
    "We innovate and create at the intersection of digital, advertising and design to provide the best possible impact for our clients & partners"

  return (
    <>
      <HeroSectionDetailed
        title="WHAT DO WE DO"
        imageSrc="/services.avif"
        imageAlt="A collage of Thamba's creative work"
        description={description}
      />

      <div className="grid grid-cols-2">
        <Image
          src={
            "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Static%20/services_1.webp"
          }
          alt="services-1"
          width={800}
          height={800}
        />
        <div className="col-start-1 row-start-2">
          <Image
            src={
              "https://vi5tax46l0ad1sws.public.blob.vercel-storage.com/Static%20/services_2.webp"
            }
            alt="services-2"
            width={800}
            height={800}
          />
        </div>
        <div className="row-span-2 col-start-2 row-start-1">
          <ServicesCard />
        </div>
      </div>
    </>
  )
}
