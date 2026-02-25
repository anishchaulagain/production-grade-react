"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const offers = [
  {
    id: 1,
    title: "Mega Summer Sale",
    description: "Up to 50% off on selected collections.",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1600&auto=format&fit=crop",
    cta: "Shop Now",
    link: "/products?offer=summer",
  },
  {
    id: 2,
    title: "New Arrivals 2026",
    description: "Discover the latest trends curated for you.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1600&auto=format&fit=crop",
    cta: "Explore Now",
    link: "/products?filter=new",
  },
  {
    id: 3,
    title: "Limited Time Offer",
    description: "Exclusive deals for premium members.",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop",
    cta: "Grab Deal",
    link: "/deals",
  },
]

export default function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <section className="relative w-full">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {offers.map((offer) => (
            <CarouselItem key={offer.id}>
              <div className="relative h-[65vh] w-full overflow-hidden">

                {/* Background Image */}
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 flex h-full items-center">
                  <div className="mx-auto max-w-7xl px-6 text-white">
                    <h1 className="text-4xl font-bold md:text-6xl">
                      {offer.title}
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-gray-200">
                      {offer.description}
                    </p>

                    <Link
                      href={offer.link}
                      className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                      {offer.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Controls */}
        {/* <CarouselPrevious className="left-4 hidden md:flex" />
        <CarouselNext className="right-4 hidden md:flex" /> */}
      </Carousel>
    </section>
  )
}
