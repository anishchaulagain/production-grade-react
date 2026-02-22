import { api } from "@/api/client"

export const Posts = {
    getPosts: async ()=>{
        const {data} = await api.get("/posts")
        return data;
    }
}