"use client";

import { FileX } from "lucide-react";

import { displayError } from "@/lib/helpers/promiseError";
import { ExpertProfile } from "@/lib/types";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TitleCtn from "@/components/atoms/TitleCtn/TitleCtn";
import UserInfoWrapperLoader from "@/components/atoms/skeletonLoader/UserInfoWrapperLoader";
import EmptyState from "@/components/molecules/EmptyState/EmptyState";

const UserServiceWrapper = ({ userId }: { userId: string }) => {
  const { data, error, isError, isPending, refetch } = useGetUserInfo(
    userId,
    "services"
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
          {data?.businesses?.length < 1 ? (
            <EmptyState
              icon={FileX}
              title="No Service Found!"
              description="This user doesn't have any service."
            />
          ) : (
            <>
              {data?.businesses?.map((service: ExpertProfile) => {
                return (
                  <TitleCtn key={service?._id} title={service?.services} />
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserServiceWrapper;
