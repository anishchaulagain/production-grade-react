import { Product } from "@/features/products/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-xl p-3 hover:shadow-md transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-lg h-48 w-full object-cover"
      />

      <h3 className="mt-2 font-semibold">{product.name}</h3>

      <div className="flex gap-2 items-center">
        <span className="font-bold">${product.discountPrice}</span>
        <span className="line-through text-gray-400 text-sm">
          ${product.price}
        </span>
      </div>
    </div>
  );
}