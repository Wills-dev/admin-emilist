import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useDispatch } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getCurrentUser } from "../api";
import { clearAuthClear } from "@/lib/helpers/cookie";
import { clearUser, setUser } from "@/store/features/auth/authSlice";
import { ROUTES } from "@/lib/helpers/routes";

export const useCurrentUser = (enabled: boolean = true) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const queryClient = useQueryClient();

  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    enabled,
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (data?.data) {
      dispatch(setUser(data.data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (isError) {
      dispatch(clearUser());
      router.push(ROUTES?.LOGIN);
      clearAuthClear("sessionId");
      queryClient.clear();
      console.log("error fetching current user", error);
    }
  }, [isError, error, dispatch, router, queryClient]);

  return {
    isLoading,
    isError,
    error,
    refetch,
  };
};
