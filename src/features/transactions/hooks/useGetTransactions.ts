import { useQuery } from "@tanstack/react-query";

import { getTransactions } from "../api";
import { usePaginationState } from "@/lib/hooks/usePaginationState";

export const useGetTransactions = () => {
  const {
    currentPage,
    limit,
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    handleClear,
    submittedQuery,
    handleSearch,
  } = usePaginationState();

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["transactions", submittedQuery, limit, currentPage],
    queryFn: () =>
      getTransactions({ currentPage, limit, search: submittedQuery }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  return {
    setLimit,
    nextPage,
    prevPage,
    goToFirstPage,
    goToLastPage,
    isFirstPage,
    isLastPage,
    search,
    handleSearchChange,
    data,
    isPending,
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
  };
};
