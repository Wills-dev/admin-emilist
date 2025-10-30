"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Columns";
import { displayError } from "@/lib/helpers/promiseError";
import { useGetPrivateExperts } from "@/features/user/hooks/useGetPrivateExperts";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import TableComponent from "@/components/organisms/TableComponent/TableComponent";

const PrivateExpertsWrapper = () => {
  const {
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
    isLoading,
    isError,
    error,
    handleSearch,
    handleClear,
    currentPage,
    limit,
    refetch,
  } = useGetPrivateExperts();

  const errorMessage = displayError(error);
  const typedColumns = Column as ColumnDef<unknown>[];

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div className="">
      {isLoading ? (
        <TableLoader />
      ) : (
        <TableComponent
          columns={typedColumns}
          data={data?.experts}
          totalPages={data?.totalPages}
          currentPage={currentPage}
          prevPage={prevPage}
          nextPage={nextPage}
          goToFirstPage={goToFirstPage}
          goToLastPage={goToLastPage}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
          limit={limit}
          setLimit={setLimit}
          search={search}
          handleSearchange={handleSearchChange}
          handleClear={handleClear}
          onSubmit={handleSearch}
        />
      )}
    </div>
  );
};

export default PrivateExpertsWrapper;
