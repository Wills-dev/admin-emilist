"use client";

import { Eye, EyeOff } from "lucide-react";

interface InputProps {
  icon?: React.ReactNode;
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  showPassword?: "text" | "password";
  onTogglePassword?: () => void;
}

const Input = ({
  showPassword,
  placeholder = "",
  onChange,
  value,
  onTogglePassword,
  type,
  icon,
  name,
}: InputProps) => {
  return (
    <div
      className="relative flex items-center backdrop-blur-2xl bg-white/25 rounded-lg border border-white/30 hover:bg-white/30 transition-all"
      style={{
        boxShadow: `0 4px 16px 0 rgba(31, 38, 135, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0 1px 0 0 rgba(255, 255, 255, 0.3) inset`,
      }}
    >
      {icon && icon}
      <input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        className="w-full bg-transparent px-10 h-12 text-gray-900 placeholder-gray-400 outline-none"
        placeholder={placeholder}
      />
      {showPassword !== undefined && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          {showPassword === "text" ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};

export default Input;
