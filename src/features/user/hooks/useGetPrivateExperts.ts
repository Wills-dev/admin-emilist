import { useQuery } from "@tanstack/react-query";

import { getPrivateExperts } from "../api";
import { usePaginationState } from "@/lib/hooks/usePaginationState";

export const useGetPrivateExperts = () => {
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
    queryKey: ["private experts", submittedQuery, limit, currentPage],
    queryFn: () =>
      getPrivateExperts({ currentPage, limit, search: submittedQuery }),
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
