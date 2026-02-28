import { create } from "zustand";
import { User } from "@/features/auth/types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  setUser: (user: User | null) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setIsAuthenticated: (isAuthenticated) => set({ isAuthenticated }),
  setLoading: (loading) => set({ loading }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));
