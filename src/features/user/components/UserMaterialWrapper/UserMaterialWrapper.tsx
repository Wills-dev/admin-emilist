"use client";

import { FileX } from "lucide-react";

import { displayError } from "@/lib/helpers/promiseError";
import { ProductType } from "@/features/materials/types";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TitleCtn from "@/components/atoms/TitleCtn/TitleCtn";
import UserInfoWrapperLoader from "@/components/atoms/skeletonLoader/UserInfoWrapperLoader";
import EmptyState from "@/components/molecules/EmptyState/EmptyState";

const UserMaterialWrapper = ({ userId }: { userId: string }) => {
  const { data, error, isError, isPending, refetch } = useGetUserInfo(
    userId,
    "materials"
  );

  const errorMessage = displayError(error);

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }
  return (
    <>
      {isPending ? (
        <UserInfoWrapperLoader height="h-12" />
      ) : (
        <div className="space-y-2">
          {data?.materials?.length < 1 ? (
            <EmptyState
              icon={FileX}
              title="No Material Found!"
              description="This user doesn't have any material."
            />
          ) : (
            <>
              {data?.materials?.map((material: ProductType) => {
                return (
                  <TitleCtn
                    key={material?._id}
                    title={material?.name}
                    id={material?._id}
                    idTyoe="Material ID:"
                  />
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserMaterialWrapper;
