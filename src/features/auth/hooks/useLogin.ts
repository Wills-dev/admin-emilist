import { FormEvent } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { loginAdmin } from "../api";
import { useLoginState } from "./useLoginState";
import { toastOption } from "@/lib/helpers/toast";
import { ROUTES } from "@/lib/helpers/routes";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { ApiErrorResponse } from "@/lib/types";

export const useLogin = () => {
  const router = useRouter();

  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    loginForm,
    resetForm,
  } = useLoginState();

  const { mutate, isPending } = useMutation({
    mutationFn: loginAdmin,
    onSuccess: () => {
      resetForm();
      toast.success("Login successful", toastOption);
      router.push(ROUTES?.OVERVIEW);
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error logging admin", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!loginForm.email) {
      return toast.error("Email is required", toastOption);
    } else if (!loginForm.password) {
      return toast.error("Password is required", toastOption);
    }
    mutate(loginForm);
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    loginForm,
    isPending,
  };
};
