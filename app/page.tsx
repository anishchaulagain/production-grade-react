import HeroCarousel from "@/components/homepage/HeroCarousel";
import ListProducts from "@/components/products/ListProducts";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <HeroCarousel />
    <ListProducts/>
  </div>
  )
}
