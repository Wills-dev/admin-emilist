"use client";

import Link from "next/link";

import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import Label from "@/components/atoms/Label/Label";

import { Lock, Mail } from "lucide-react";
import { useLogin } from "../../hooks/useLogin";
import { ROUTES } from "@/lib/helpers/routes";

const LoginForm = () => {
  const {
    showPassword,
    handleChange,
    handleSubmit,
    loginForm,
    isPending,
    togglePasswordVisibility,
  } = useLogin();

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label title="Email" />
        <Input
          value={loginForm.email}
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="you@example.com"
          icon={<Mail className="absolute left-2 w-5 h-5 text-gray-600" />}
        />
      </div>
      <div className="space-y-2">
        <Label title="Password" />
        <Input
          value={loginForm.password}
          onChange={handleChange}
          type={showPassword}
          showPassword={showPassword}
          name="password"
          onTogglePassword={togglePasswordVisibility}
          placeholder="••••••••"
          icon={<Lock className="absolute left-2 w-5 h-5 text-gray-600" />}
        />
      </div>

      <div className="flex justify-end text-sm">
        <Link
          href={ROUTES?.FORGOT_PASSWORD}
          className="text-gray-700 hover:text-green-600 transition-colors font-medium"
        >
          Forgot password?
        </Link>
      </div>
      <Button type="submit" loading={isPending}>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
