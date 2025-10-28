import { useQuery } from "@tanstack/react-query";

import { getAllUsers } from "../api";
import { usePaginationState } from "@/lib/hooks/usePaginationState";
import { useDebounce } from "@/lib/hooks/useDebounce";

export const useGetAllUsers = (verified?: string) => {
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
  } = usePaginationState();

  const debouncedSearch: string = useDebounce(search, 500);

  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["all users", debouncedSearch, limit, currentPage, verified],
    queryFn: () =>
      getAllUsers({ currentPage, limit, debouncedSearch, verified }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const totalPages = Math.ceil(data?.totalUsers / limit) || 0;

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
    refetch,
    handleClear,
    currentPage,
    limit,
    totalPages,
  };
};
