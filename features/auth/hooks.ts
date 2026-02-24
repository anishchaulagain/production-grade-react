"use client";
import { useState } from "react";
import { LoginResponse } from "./types";
import { Auth } from "./api";
import { useRouter } from "next/navigation";
import { api } from "@/api/client";

export const useAuth = () => {
  const [data, setData] = useState<LoginResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await Auth.login(email, password);
      setData(response);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const register = async (email: string, name: string, password: string) => {
    try {
      setLoading(true);
      const response = await Auth.register(email, name, password);
      setData(response);
      setError(null);
     
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const otp = async(email: string, otp: string) =>{
    try {
        setLoading(true)
      const response = await Auth.otp(email, otp)
      setData(response)
    }
    catch(err: any){
        setError(err.message || "OTP Invalid" )
    }
    finally{
        setLoading(false)
    }
  }

  return { data, loading, error, login, register, otp };
};
