"use client";

import { Loader } from "lucide-react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  height?: string;
  width?: string;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
}

const Button = ({
  children,
  onClick,
  href,
  type = "button",
  width = "w-full",
  height = "h-12",
  disabled = false,
  loading = false,
  className = `relative flex items-center justify-center bg-green-600 text-white font-semibold px-6 rounded-lg transform hover:scale-[1.02] transition-all ${
    !loading && "hover:bg-green-700"
  } `,
}: ButtonProps) => {
  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${width} ${height} ${
        loading || disabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
      }`}
      disabled={disabled || loading}
    >
      {loading ? <Loader className="animate-spin w-8 h-8" /> : children}
    </button>
  );

  return href ? <Link href={href}>{buttonElement}</Link> : buttonElement;
};

export default Button;
