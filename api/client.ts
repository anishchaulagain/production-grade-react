import axios from "axios";


export const api =  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
    headers: {
        "Content-Type": "application/json",

    }
})

api.interceptors.request.use((res)=> res,
(err) => {
    const {detail} = err.response.data
    console.log("API Error", detail)
    return Promise.reject(err)
})