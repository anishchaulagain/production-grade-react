'use client'

import { useEffect, useState } from "react"
import { useProductQuery } from "@/features/products/composables/useProductQuery"
import { useCategoryQuery } from "@/features/category/composables/useCategoryQuery"
import { mapCategoriesWithProducts } from "@/shared/mapcategorywithproduct/MapCategoriesWithProducts"
import CategorySection from "../categorysection/CategorySection"
import ListProductsSkeleton from "./ListProductsSkeleton"

const ListProducts = () => {
  const { fetchProducts, loading: productLoading } = useProductQuery()
  const { fetchCategories, loading: categoryLoading } = useCategoryQuery()

  const [data, setData] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [categories, products] = await Promise.all([
          fetchCategories(),
          fetchProducts(),
        ])

        console.log("ListProducts - Loaded categories:", categories);
        console.log("ListProducts - Loaded products:", products);

        const mapped = mapCategoriesWithProducts(categories, products)
        console.log("ListProducts - Mapped data:", mapped);
        setData(mapped)
      } catch (err) {
        console.error("ListProducts - Error loading data:", err);
        setError("Failed to load products")
      }
    }

    loadData()
  }, [])

  if (productLoading || categoryLoading) {
    return <div><ListProductsSkeleton/></div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="max-w-full mx-auto px-6 py-10">
      <main className="space-y-12">
        {data.length === 0 && <div>No categories found.</div>}
        {data.map((category) => (
          <CategorySection key={category._id} category={category} />
        ))}
      </main>
    </div>
  )
}

export default ListProducts