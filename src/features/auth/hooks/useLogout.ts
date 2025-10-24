import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import { logoutAdmin } from "../api";
import { clearAuthClear } from "@/lib/helpers/cookie";
import { clearUser } from "@/store/features/auth/authSlice";
import { ROUTES } from "@/lib/helpers/routes";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";
import { ApiErrorResponse } from "@/lib/types";
import { toastOption } from "@/lib/helpers/toast";

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: logoutAdmin,
    onSuccess: () => {
      toast.success("Logged out successfully", toastOption);
      clearAuthClear("sessionId");
      dispatch(clearUser());
      queryClient.clear();
      router.push(ROUTES?.LOGIN);
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
      console.log("error logging out", error);
    },
  });

  return { isLoggingOut: isPending, logout: () => mutate() };
};
