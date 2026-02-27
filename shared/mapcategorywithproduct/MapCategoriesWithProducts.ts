import { Category } from "@/features/category/types";
import { Product } from "@/features/products/types";
import { CategoryWithProducts } from "./types";

export const mapCategoriesWithProducts = (
  categories: Category[],
  products: Product[]
): CategoryWithProducts[] => {
  return categories.map((category) => ({
    ...category,
    products: products
      .filter((p) => p.categoryId._id === category._id)
      .slice(0, 4), 
  }));
};