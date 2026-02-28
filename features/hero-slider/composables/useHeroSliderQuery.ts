import { useState } from "react"
import { HeroSliderData } from "../types"
import { HeroSlider } from "../api"

export const useHeroSliderQuery = () =>{
    const [data, setData] = useState<HeroSliderData[] | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const fetchHeroSliderData = async() =>{
        setLoading(true)
        try{
            const response = await HeroSlider.getAllData()
            setData(response.data)
        }catch(err: unknown){
            if(err instanceof Error){
                setError(err.message)
            }
            
        }finally{
            setLoading(false)
        }
    }
    return {data, loading, error, fetchHeroSliderData}
}