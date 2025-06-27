import FeaturedBanner from "@/components/FeaturedBanner"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection />
      <FeaturedBanner />
    </div>
  )
}
