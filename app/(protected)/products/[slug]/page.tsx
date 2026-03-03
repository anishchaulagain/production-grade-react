
"use client"

import AddToCart from "@/components/products/AddToCart"
import ImageGallery from "@/components/products/ImageGallery"
import ProductPageSkeleton from "@/components/products/ProductPageSkeleton"
import { Button } from "@/components/ui/button"
import { useProductQuery } from "@/features/products/composables/useProductQuery"
import { Star, Truck, Loader2 } from "lucide-react"
import React, { useEffect, use } from "react"

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const { fetchProductBySlug, product, loading, error } = useProductQuery()

  useEffect(() => {
    fetchProductBySlug(slug)
  }, [])

  if (loading) {
    return (
      <div>
        <ProductPageSkeleton/>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-red-500 font-medium">
        {error}
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex min-h-[400px] items-center justify-center text-gray-500 font-medium">
        Product not found
      </div>
    )
  }

  return (
    <div className="max-w-full mx-auto px-6 py-10">
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <ImageGallery images={product.images} />
            <div className="md:py-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-gray-500 font-bold">
                  {product.categoryId?.name}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                  {product.name}
                </h2>
              </div>
              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <Button className="rounded-lg gap-x-2">
                  <span className="font-bold text-sm">4.2</span>
                  <Star className="h-5 w-5" />
                </Button>
                <span className="text-sm text-gray-500 transition duration-100 font-bold">
                  56 Rating
                </span>
              </div>
              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-xl font-bold text-gray-800 md:text-2xl">
                    Rs. {product.discountPrice}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    Rs. {product.price}
                  </span>
                </div>
                <span className="text-sm text-gray-500">Incl. Vat plus shipping</span>
              </div>
              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">2-4 Day Shipping</span>
              </div>
              <div className="flex gap-2.5">
                <AddToCart
                  currency="USD"
                  description={product.description}
                  image={product.images[0]}
                  name={product.name}
                  price={product.discountPrice}
                  key={product._id}
                  price_id={product._id}
                />
                <Button
                  variant="secondary"
                  className="hover:bg-gray-300 font-bold rounded-lg"
                >
                  Checkout Now
                </Button>
              </div>
              <p className="mt-12 text-base text-gray-500 leading-relaxed tracking-wide">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
