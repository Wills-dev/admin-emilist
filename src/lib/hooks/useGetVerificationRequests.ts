import { useQuery } from "@tanstack/react-query";

import { usePaginationState } from "./usePaginationState";
import { getVerificationRequest } from "../api/verification";

export const useGetVerificationRequests = () => {
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
    queryKey: ["all verification request", submittedQuery, limit, currentPage],
    queryFn: () =>
      getVerificationRequest({ currentPage, limit, search: submittedQuery }),
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
