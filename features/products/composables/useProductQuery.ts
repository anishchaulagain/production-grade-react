import { useState } from "react"
import {  ProductResponse } from "../types"
import { ProductService } from "../api"

export const useProductQuery = () =>{
    const [data, setData] = useState<ProductResponse | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchProducts = async() =>{
        setLoading(true)
        try{
           const response = await ProductService.getProducts()
           setData(response)
           setError(null)
           return response.products
        }
        catch(err: unknown){
            if(err instanceof Error){
                setError(err.message || "Failed to fetch products")
                throw err
            }
            throw new Error("An unknown error occurred")
        }
            finally{
                setLoading(false)

            }
        
    }
    return {data, loading, error, fetchProducts}
}