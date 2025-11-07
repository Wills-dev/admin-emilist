import React, { useState } from "react";
import { CreateAdminType } from "../types";

export const useCreateAdminState = () => {
  const [showPassword, setShowPassword] = useState<"text" | "password">(
    "password"
  );
  const [createAdminForm, setCreateAdminForm] = useState<CreateAdminType>({
    email: "",
    password: "",
    mobile: "",
    fullName: "",
  });

  const resetForm = () => {
    setCreateAdminForm({
      email: "",
      password: "",
      mobile: "",
      fullName: "",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateAdminForm((prev) => ({ ...prev, [name]: value }));
  };

  return {
    showPassword,
    togglePasswordVisibility,
    handleChange,
    resetForm,
    createAdminForm,
  };
};
