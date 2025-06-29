import FeaturedBanner from "@/components/FeaturedBanner"
import HeroSection from "@/components/HeroSection"
import ProductCard from "@/components/ProductCard"
import ProductCardHorizontal from "@/components/ProductCardHorizontal"
import StackingImages from "@/components/StackingImages"

export default function Home() {
  const products = [
    {
      direction: false,
      image:
        "https://static.wixstatic.com/media/66afa0_0fc1af3eb324451db1a1a2792b2c48c7~mv2.jpg/v1/fill/w_950,h_913,fp_0.58_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/OASIS%20BRANDGUIDELINES-01.jpg",
      tag: "IDENTITY, communication STRATEGY",
      path: "/",
      title: "OASIS VENTURES",
    },
    {
      direction: true,
      image:
        "https://static.wixstatic.com/media/66afa0_02b43e57c11e43eeae0480630b6b91ed~mv2.jpg/v1/fill/w_950,h_1063,fp_0.58_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Soda%20or%20Juice%20Can%20Mockup.jpg",
      tag: "LABEL & PACKAGING DESIGN",
      path: "/",
      title: "DRAVYAS",
    },
    {
      direction: false,
      image:
        "https://static.wixstatic.com/media/66afa0_52884639175243b9a6a1f2a2e9c5126b~mv2.jpg/v1/crop/x_0,y_48,w_662,h_908/fill/w_662,h_636,fp_0.50_0.52,q_85,enc_avif,quality_auto/portfolio_graphic%20design.jpg",
      tag: "BOOK COVER, SOCIAL & STATIONERY DESIGN",
      path: "/",
      title: "BROWSER",
    },
  ]

  const productsHorizontal = [
    {
      image: "/images/pirul.gif",
      path: "/",
      title: "PIRUL HANDICARFTS",
      tag: "BRAND IDENTITY, SOCIAL CAMPAIGN",
    },
  ]

  return (
    <main>
      <HeroSection />
      <FeaturedBanner />
      {products.map((product) => (
        <ProductCard key={product.title} {...product} />
      ))}
      {productsHorizontal.map((product) => (
        <ProductCardHorizontal key={product.title} {...product} />
      ))}
      <StackingImages />
    </main>
  )
}
