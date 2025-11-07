import { useQuery } from "@tanstack/react-query";

import { getTransactionInfo } from "../api";

export const useGetTransactionInfo = (transactionId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["transaction info", transactionId],
    queryFn: () => getTransactionInfo({ transactionId }),
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
