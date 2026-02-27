import { Category } from "@/features/category/types";
import { Product } from "@/features/products/types";

export interface CategoryWithProducts extends Category {
  products: Product[];
}