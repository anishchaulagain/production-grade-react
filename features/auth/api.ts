import { api } from "@/api/client";

export const Auth = {
  login: async (email: string, password: string) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    const { data } = response;
    if (response.status !== 200) {
      throw new Error("Invalid credentials");
    }
   if(typeof window !== "undefined"){
    document.cookie = `access_token=${data.accessToken}; path=/; max-age=3600; secure; samesite=strict`;
    document.cookie = `refresh_token=${data.refreshToken}; path=/; max-age=3600; secure; samesite=strict`;

   }
    return data;
  },
};
