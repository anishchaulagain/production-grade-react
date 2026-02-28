import { api } from "@/api/client"

export const HeroSlider = {
    getAllData: async() =>{
        const response = await api.get("/hero")
        if(response.status !== 200){
            throw new Error("Can't fetch Hero Data")
        }
        return response.data
    }
}