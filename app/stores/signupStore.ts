import { create } from "zustand";

interface SignupState {
  email: string;
  setEmail: (email: string) => void;
  clear: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  email: "",
  setEmail: (email) => set({ email }),
  clear: () => set({ email: "" }),
}));