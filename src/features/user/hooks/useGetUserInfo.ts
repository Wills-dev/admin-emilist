import { useQuery } from "@tanstack/react-query";

import { getUserInfo } from "../api";

export const useGetUserInfo = (userId: string, q?: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["user info", userId, q],
    queryFn: () => getUserInfo({ userId, q }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return { data, isPending, isLoading, isError, error, refetch };
};
