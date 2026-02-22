import { api } from "@/api/client"
import { CreatePost } from "./types";

export const Posts = {
    getPosts: async ()=>{
        const {data} = await api.get("/posts")
        return data;
    },
    createPost: async (postData: Omit<CreatePost, "userId">) => {
         const MOCK_USER_ID = 2;
        const {data} = await api.post("/posts", {...postData, userId: MOCK_USER_ID})
        return data;
    }
}