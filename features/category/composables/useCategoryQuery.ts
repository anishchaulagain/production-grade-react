import { useState } from "react"
import { Category } from "../types"
import { CategoryService } from "../api"

export const useCategoryQuery = () =>{
    const [data, setData] = useState<Category[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchCategories = async() =>{
        setLoading(true)
        try{
            const response = await CategoryService.getCategories()
            setData(response)
        }catch(err: unknown){
            if(err instanceof Error){
                setError(err.message || "Failed to fetch categories")
            }
        }finally{
            setLoading(false)
        }
    }
    return {data, loading, error, fetchCategories}

}