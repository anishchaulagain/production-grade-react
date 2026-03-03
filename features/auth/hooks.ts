"use client";
import { useState } from "react";
import { LoginResponse, User } from "./types";
import { Auth } from "./api";
import { useAuthStore } from "@/app/stores/authStore";

export const useAuth = () => {
  const { user, setUser, isAuthenticated, setIsAuthenticated, loading, setLoading, logout: storeLogout } = useAuthStore();
  const [data, setData] = useState<LoginResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await Auth.login(email, password);
      setData(response);
      setIsAuthenticated(true);
      return response;
    } catch (err: any) {
      const errorMessage = err.message || "Login failed";
      setError(errorMessage);
      throw err; // Re-throw to allow caller to handle if needed
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
      setIsAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const otp = async(email: string, otp: string) =>{
    try {
        setLoading(true);
      const response = await Auth.otp(email, otp);
      setData(response);
      setIsAuthenticated(true);
    }
    catch(err: any){
        setError(err.message || "OTP Invalid" );
    }
    finally{
        setLoading(false);
    }
  };

  const UserDetail = async() =>{
    try{
      const response = await Auth.me();
      setUser(response);
    }
    catch(err: any){
      setError(err.message || "Failed to fetch user details");
    }
    finally{
      setLoading(false);
    }
  };

  const logout = () => {
    Auth.logout();
    storeLogout();
  };

  return { data, loading, error, login, register, otp, isAuthenticated, UserDetail, user, logout };
};
