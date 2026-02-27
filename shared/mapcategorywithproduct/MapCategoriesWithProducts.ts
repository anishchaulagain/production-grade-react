import { Category } from "@/features/category/types";
import { Product } from "@/features/products/types";
import { CategoryWithProducts } from "./types";

export const mapCategoriesWithProducts = (
  categories: Category[] = [],
  products: Product[] = []
): CategoryWithProducts[] => {
  if (!Array.isArray(categories)) return [];
  const safeProducts = Array.isArray(products) ? products : [];

  return categories.map((category) => ({
    ...category,
    products: safeProducts
      .filter((p) => {
        if (!p || !p.categoryId) return false;
        const pCatId = typeof p.categoryId === "string" ? p.categoryId : p.categoryId._id;
        return pCatId === category._id;
      })
      .slice(0, 4),
  }));
};