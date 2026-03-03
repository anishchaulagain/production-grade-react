import axios from "axios";


export const api =  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api",
    headers: {
        "Content-Type": "application/json",

    },
    withCredentials: true
})

api.interceptors.response.use((res)=> res,
(err) => {
    const errorMessage = err.response?.data?.message || err.response?.data?.detail || "An unexpected error occurred";
    console.log("API Error:", errorMessage);
    err.message = errorMessage; // Override axios error message with API's message
    return Promise.reject(err);
})
