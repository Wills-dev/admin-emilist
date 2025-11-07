"use client";

import PageHeader from "@/components/molecules/PageHeader/PageHeader";
import { displayError } from "@/lib/helpers/promiseError";
import { useGetVerificationRequests } from "@/lib/hooks/useGetVerificationRequests";
import { Column } from "./Column";
import { ColumnDef } from "@tanstack/react-table";
import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import TableComponent from "../TableComponent/TableComponent";

const VerificationWrapper = () => {
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
  } = useGetVerificationRequests();

  const errorMessage = displayError(error);
  const typedColumns = Column as ColumnDef<unknown>[];

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }
  return (
    <div>
      <PageHeader
        title="All Verification Request"
        description="Manange all your verification request"
      />
      <div className="">
        {isLoading ? (
          <TableLoader />
        ) : (
          <TableComponent
            columns={typedColumns}
            data={data?.verifications}
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
    </div>
  );
};

export default VerificationWrapper;
