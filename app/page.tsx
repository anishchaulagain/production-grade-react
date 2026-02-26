import HeroCarousel from "@/components/homepage/HeroCarousel";
import Navbar from "@/components/homepage/Navbar";
import ListProducts from "@/components/products/ListProducts";
import Image from "next/image";

export default function Home() {
  return (
  <div>
  <Navbar/>
    <HeroCarousel />
    <ListProducts/>
  </div>
  )
}
