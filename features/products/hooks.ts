import { useEffect, useState } from "react";

import { ProductsApi } from "./api";
import { ProductResponse } from "./types";

export const useProducts = () =>{
  const [data, setData] = useState<ProductResponse | null>(null);
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