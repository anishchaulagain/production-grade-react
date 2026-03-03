import { Product } from "@/features/products/types";
import { useRouter } from "next/navigation";


export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter()
  const handleProductCard = (slug: string) => {
    router.push(`/products/${slug}`)
  }
  return (
    <div className="border rounded-xl cursor-pointer p-3 hover:shadow-md transition" onClick={()=>handleProductCard(product.slug)}>
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