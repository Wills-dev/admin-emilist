import { useQuery } from "@tanstack/react-query";

import { getMaterialInfo } from "../api";

export const useGetMaterialInfo = (materialId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["material info", materialId],
    queryFn: () => getMaterialInfo({ materialId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
  };
};
