import { useEffect, useState } from "react";
import { Products } from "./types";
import { ProductsApi } from "./api";

export const useProducts = () =>{
  const [data, setData] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await ProductsApi.getProducts();
        setData(productsData);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { data, loading, error };

}