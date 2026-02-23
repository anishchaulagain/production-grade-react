import { useState } from "react";
import { LoginResponse } from "./types";
import { Auth } from "./api";

export const useAuth = () =>{
    const [data, setData] = useState<LoginResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError ] = useState<string | null>(null);

    const login = async (email: string, password: string) => {
        try{
            setLoading(true);
            const response = await Auth.login(email, password);
            setData(response);
            setError(null);
        }
        catch(err: any){
            setError(err.message || "Login failed");
        }
        finally{
            setLoading(false);
        }
    }

    return {data, loading, error, login}
}