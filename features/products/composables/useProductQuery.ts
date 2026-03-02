import { useState } from "react"
import {  Product, ProductResponse } from "../types"
import { ProductService } from "../api"

export const useProductQuery = () =>{
    const [data, setData] = useState<ProductResponse | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [product, setProduct] = useState<Product | null>(null)

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

    const fetchProductBySlug = async(slug: string)=>{
        setLoading(true)
        try{
            const response = await ProductService.getProductBySlug(slug)
            setProduct(response)
            setError(null)
            return response
        }
        catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "Failed to fetch product by slug"

    setError(message)
    return null
        }
        finally{
            setLoading(false)
        }
    }
    
    return {data, loading, error, fetchProducts, fetchProductBySlug, product }
}