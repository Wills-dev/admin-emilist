import { axiosInstance } from "@/lib/axiosInstance";
import { LoginProps } from "../types";

export const loginAdmin = async ({ email, password }: LoginProps) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
