import { useQuery } from "@tanstack/react-query";

import { getAllSubscriptions } from "../api";
import { usePaginationState } from "@/lib/hooks/usePaginationState";

export const useGetAllSubscriptions = () => {
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
    queryKey: ["all subscriptions", submittedQuery, limit, currentPage],
    queryFn: () =>
      getAllSubscriptions({ currentPage, limit, search: submittedQuery }),
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
