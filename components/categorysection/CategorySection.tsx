'use client'
import { CategoryWithProducts } from "@/shared/mapcategorywithproduct/types";
import ProductCard from "../products/ProductCard";

interface Props {
  category: CategoryWithProducts;
}

export default function CategorySection({ category }: Props) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold">{category.name}</h2>
        <p className="text-gray-500">{category.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {category.products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}