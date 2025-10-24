"use client";

import { User } from "lucide-react";
import { useSelector } from "react-redux";

import { RootState } from "@/store";

const UserBadge = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:block text-right">
        <p className="text-sm font-medium text-gray-900">{user?.userName}</p>
        <p className="text-xs text-gray-500 capitalize">{user?.role}</p>
      </div>
      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
    </div>
  );
};

export default UserBadge;
