"use client";

import { LogOut } from "lucide-react";

import { useLogout } from "@/features/auth/hooks/useLogout";

const LogoutFooter = () => {
  const { logout, isLoggingOut } = useLogout();
  return (
    <div className="p-4 border-t border-gray-200">
      <button
        onClick={logout}
        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
        disabled={isLoggingOut}
      >
        <LogOut className="w-5 h-5" />
        <span>{isLoggingOut ? "Logging out..." : "Logout"}</span>
      </button>
    </div>
  );
};

export default LogoutFooter;
