"use client"

export default function ProductPageSkeleton() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 animate-pulse">

          {/* LEFT SIDE - Image Gallery Skeleton */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="h-[450px] w-full bg-gray-200 rounded-lg" />

            {/* Thumbnails */}
            <div className="flex gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 w-20 bg-gray-200 rounded-md"
                />
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - Content Skeleton */}
          <div className="md:py-8 space-y-6">

            {/* Category */}
            <div className="h-4 w-24 bg-gray-200 rounded" />

            {/* Product Name */}
            <div className="h-8 w-3/4 bg-gray-200 rounded" />

            {/* Rating */}
            <div className="flex gap-3 items-center">
              <div className="h-8 w-16 bg-gray-200 rounded-lg" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="h-6 w-32 bg-gray-200 rounded" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>

            {/* Shipping */}
            <div className="h-5 w-40 bg-gray-200 rounded" />

            {/* Buttons */}
            <div className="flex gap-3">
              <div className="h-12 w-40 bg-gray-200 rounded-lg" />
              <div className="h-12 w-40 bg-gray-200 rounded-lg" />
            </div>

            {/* Description */}
            <div className="space-y-3 pt-6">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}