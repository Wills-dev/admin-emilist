"use client";

import { useGetMaterialInfo } from "../../hooks/useGetMaterialInfo";
import { displayError } from "@/lib/helpers/promiseError";
import { materialBreadcrumb } from "../../constants";

import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import MaterialInfo from "../MaterialInfo/MaterialInfo";
import MaterialOwner from "../MaterialOwner/MaterialOwner";
import MaterialInfoWrapperLoader from "@/components/atoms/skeletonLoader/MaterialInfoWrapperLoader";

const MaterialInfoWrapper = ({ materialId }: { materialId: string }) => {
  const { data, isLoading, isError, error, refetch } =
    useGetMaterialInfo(materialId);

  const errorMessage = displayError(error);

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div className="space-y-6">
      <AppBreadcrumb items={materialBreadcrumb} />
      {isLoading ? (
        <MaterialInfoWrapperLoader />
      ) : (
        <div className="grid grid-cols-12 gap-6 pb-10">
          <MaterialInfo materialInfo={data} />
          <MaterialOwner materialOwnner={data?.userId} />
        </div>
      )}
    </div>
  );
};

export default MaterialInfoWrapper;
