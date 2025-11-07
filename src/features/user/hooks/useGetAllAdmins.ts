import { useQuery } from "@tanstack/react-query";

import { getAllAdmin } from "../api";
import { usePaginationState } from "@/lib/hooks/usePaginationState";

export const useGetAllAdmins = () => {
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
    queryKey: ["all admins", submittedQuery, limit, currentPage],
    queryFn: () => getAllAdmin({ currentPage, limit, search: submittedQuery }),
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
