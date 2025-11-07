"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Column } from "./Column";
import { displayError } from "@/lib/helpers/promiseError";
import { useGetAllAdmins } from "../../hooks/useGetAllAdmins";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import PageHeader from "@/components/molecules/PageHeader/PageHeader";
import AdminAction from "../AdminAction/AdminAction";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import TableComponent from "@/components/organisms/TableComponent/TableComponent";

const AdminWrapper = () => {
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
  } = useGetAllAdmins();

  const errorMessage = displayError(error);
  const typedColumns = Column as ColumnDef<unknown>[];

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div>
      <PageHeader title="Manage Admin" description="Manange all admins here" />
      <AdminAction />
      {/* <div className="">
        {isLoading ? (
          <TableLoader />
        ) : (
          <TableComponent
            columns={typedColumns}
            data={data?.admins}
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
      </div> */}
    </div>
  );
};

export default AdminWrapper;
