"use client";

import { Column } from "./Column";
import { ColumnDef } from "@tanstack/react-table";
import { displayError } from "@/lib/helpers/promiseError";
import { useGetTransactions } from "../../hooks/useGetTransactions";

import PageHeader from "@/components/molecules/PageHeader/PageHeader";
import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import TableComponent from "@/components/organisms/TableComponent/TableComponent";

const TransactionWrapper = () => {
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
  } = useGetTransactions();

  const errorMessage = displayError(error);
  const typedColumns = Column as ColumnDef<unknown>[];

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div>
      <PageHeader
        title="Transactions"
        description="Manange all your transactions here"
      />
      <div className="">
        {isLoading ? (
          <TableLoader />
        ) : (
          <TableComponent
            columns={typedColumns}
            data={data?.transactions}
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

export default TransactionWrapper;
