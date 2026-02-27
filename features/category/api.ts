import { api } from "@/api/client"

export const CategoryService ={
    getCategories: async() =>{
        const response = await api.get("/categories")
        if(response.status !== 200){
            throw new Error("Failed to fetch categories")
        }
        return response.data
    }
}