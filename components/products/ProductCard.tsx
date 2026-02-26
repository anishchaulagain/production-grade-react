'use client'

import Image from "next/image"
import Link from "next/link"

interface Product {
  _id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  images?: string[]
  price: number
  discountPrice?: number
  stockQuantity: number
  isFeatured?: boolean
}

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const hasDiscount = product.discountPrice && product.discountPrice < product.price
  const discountPercent = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice!) / product.price) * 100
      )
    : 0

  const isOutOfStock = product.stockQuantity <= 0

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

        {/* Featured Badge */}
        {product.isFeatured && (
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        )}

        {/* Discount Badge */}
        {hasDiscount && (
          <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
            -{discountPercent}%
          </span>
        )}

        {/* Image Section */}
        <div className="relative w-full h-72 overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Hover Image Swap */}
          {product.images && product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">

          {/* Product Name */}
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h3>

          {/* Price Section */}
          <div className="flex items-center gap-2">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-black">
                  ${product.discountPrice}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-black">
                ${product.price}
              </span>
            )}
          </div>

          {/* Stock Status */}
          {isOutOfStock ? (
            <span className="text-sm text-red-500 font-medium">
              Out of Stock
            </span>
          ) : (
            <span className="text-sm text-green-600 font-medium">
              In Stock
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
