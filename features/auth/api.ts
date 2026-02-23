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
    localStorage.setItem("access_token", data.accessToken);
    localStorage.setItem("refresh_token", data.refreshToken);
    return data;
  },
};
