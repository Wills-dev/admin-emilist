import { FormEvent } from "react";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createAdmin } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { useCreateAdminState } from "./useCreateAdminState";

export const useCreateAdmin = () => {
  const {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    resetForm,
    createAdminForm,
  } = useCreateAdminState();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createAdmin,
    onSuccess: () => {
      resetForm();
      toast.success("Admin created successful", toastOption);
      queryClient.invalidateQueries({
        queryKey: ["all admins"],
      });
    },
    onError: (error: ApiErrorResponse) => {
      console.log("error logging admin", error);
      promiseErrorFunction(error);
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!createAdminForm.fullName) {
      return toast.error("Full name is required", toastOption);
    } else if (!createAdminForm.email) {
      return toast.error("Email is required", toastOption);
    } else if (!createAdminForm.mobile) {
      return toast.error("Mobile number is required", toastOption);
    } else if (!createAdminForm.password) {
      return toast.error("Password is required", toastOption);
    }
    mutate(createAdminForm);
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    isPending,
    createAdminForm,
  };
};
