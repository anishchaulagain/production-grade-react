import { api } from "@/api/client"

export const ProductsApi ={
    getProducts: async () => {
        const {data} = await api.get("/products")
        return data
    }
}