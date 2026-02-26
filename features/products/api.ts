import { api } from "@/api/client";

export const ProductService = {
  getProducts: async () => {
    const response = await api.get("/products");
    if (response.status !== 200) {
      throw new Error("Failed to fetch products");
    }
    const { data} = response;
    return data;
  },
};
