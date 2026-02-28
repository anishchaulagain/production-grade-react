import { api } from "@/api/client";
import { resolve } from "path";

export const Auth = {
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    }, {
      withCredentials: true
    });
    const { data } = response;
    if (response.status !== 200) {
      throw new Error("Invalid credentials");
    }
    // if (typeof window !== "undefined") {
    //   document.cookie = `access_token=${data.accessToken}; path=/; max-age=3600; secure; samesite=strict`;
    //   document.cookie = `refresh_token=${data.refreshToken}; path=/; max-age=3600; secure; samesite=strict`;
    // }
    return data;
  },

  register: async (email: string, name: string, password: string) => {
    const response = await api.post("/auth/register", {
      email,
      name,
      password,
    });
    if (response.status !== 201) {
      throw new Error("Can't create account right now");
    }
    const { data } = response;
    return data;
  },

  logout: () => {
    if (typeof window !== "undefined") {
      document.cookie = `access_token=; path=/; max-age=0; secure; samesite=strict`;
      document.cookie = `refresh_token=; path=/; max-age=0; secure; samesite=strict`;
    }
    api.defaults.headers.common["Authorization"] = "";
    return true;
  },

  otp: async (email: string, otp: string) => {
    const response = await api.post("/auth/verify-otp", {
      email,
      otp,
    });
    if (response.status !== 200) {
      throw new Error("Can't send OTP");
    }
    const { data } = response;
    if (typeof window !== "undefined") {
      document.cookie = `access_token=${data.accessToken}; path=/; max-age=3600; secure; samesite=strict`;
      document.cookie = `refresh_token=${data.refreshToken}; path=/; max-age=3600; secure; samesite=strict`;
    }

    return data;
  },
};
