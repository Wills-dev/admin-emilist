"use client";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import { useGetMaterials } from "@/features/materials/hooks/useGetMaterials";
import { displayError } from "@/lib/helpers/promiseError";
import { ColumnDef } from "@tanstack/react-table";
import { useSearchParams } from "next/navigation";
import { Column } from "./Column";
import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import TableComponent from "../TableComponent/TableComponent";

const MaterialWrapper = () => {
  const searchParams = useSearchParams();
  const materialType = searchParams.get("material") || "";

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
  } = useGetMaterials(materialType);

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
          data={data?.materials}
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

export default MaterialWrapper;
