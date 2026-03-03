"use client"

const ListProductsSkeleton = () => {
  return (
    <div className="max-w-full mx-auto px-6 py-10">
      <main className="space-y-12">

        {/* Repeat 3 fake categories */}
        {[1, 2, 3].map((category) => (
          <div key={category} className="space-y-6">

            {/* Category Title Skeleton */}
            <div className="h-8 w-48 bg-gray-200 rounded-md animate-pulse" />

            {/* Product Grid Skeleton */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((product) => (
                <div
                  key={product}
                  className="border rounded-xl p-4 space-y-4"
                >
                  {/* Image */}
                  <div className="h-40 w-full bg-gray-200 rounded-lg animate-pulse" />

                  {/* Product Title */}
                  <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />

                  {/* Price */}
                  <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

export default ListProductsSkeleton