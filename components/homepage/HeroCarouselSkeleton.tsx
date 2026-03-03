"use client"

export default function HeroCarouselSkeleton() {
  return (
    <section className="relative w-full">
      <div className="relative h-[65vh] w-full overflow-hidden animate-pulse">

        {/* Image Skeleton */}
        <div className="absolute inset-0 bg-gray-200" />

        {/* Overlay Skeleton Content */}
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6 w-full">

            {/* Title */}
            <div className="h-10 w-1/2 bg-gray-300 rounded-md mb-6" />

            {/* Subtitle */}
            <div className="h-5 w-1/3 bg-gray-300 rounded-md mb-4" />

            {/* Button */}
            <div className="h-10 w-32 bg-gray-300 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}