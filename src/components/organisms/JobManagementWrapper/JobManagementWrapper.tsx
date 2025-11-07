"use client";

import { Suspense } from "react";

import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { displayError } from "@/lib/helpers/promiseError";
import { useSearchParams } from "next/navigation";
import { useGetJobs } from "@/features/jobs/hooks/useGetJobs";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import TableComponent from "../TableComponent/TableComponent";

const JobManagementContent = () => {
  const searchParams = useSearchParams();
  const jobType = searchParams.get("job") || "";

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
  } = useGetJobs(jobType);

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
          data={data?.jobs}
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

const JobManagementWrapper = () => {
  return (
    <Suspense fallback={<TableLoader />}>
      <JobManagementContent />
    </Suspense>
  );
};

export default JobManagementWrapper;
