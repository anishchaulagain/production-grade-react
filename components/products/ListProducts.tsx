'use client'

import { useProductQuery } from "@/features/products/composables/useProductQuery"
import { useEffect } from "react"
import ProductCard from "./ProductCard"

const ListProducts = () => {
  const { loading, data, error, fetchProducts } = useProductQuery()

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Our Collection
      </h1>

      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="h-80 bg-gray-100 animate-pulse rounded-xl" />
          ))}
        </div>
      )}

      {error && (
        <p className="text-red-500 text-center">
          Error: {error}
        </p>
      )}

      {data && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.products.map((product: any) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ListProducts
