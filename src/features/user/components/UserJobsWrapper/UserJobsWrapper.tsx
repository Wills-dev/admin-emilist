"use client";

import { FileX } from "lucide-react";

import { Job } from "../../types";
import { displayError } from "@/lib/helpers/promiseError";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TitleCtn from "@/components/atoms/TitleCtn/TitleCtn";
import UserInfoWrapperLoader from "@/components/atoms/skeletonLoader/UserInfoWrapperLoader";
import EmptyState from "@/components/molecules/EmptyState/EmptyState";

const UserJobsWrapper = ({ userId }: { userId: string }) => {
  const { data, error, isError, isPending, refetch } = useGetUserInfo(
    userId,
    "jobs"
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
          {data?.jobs?.length < 1 ? (
            <EmptyState
              icon={FileX}
              title="No Job Found!"
              description="This user doesn't have any job."
            />
          ) : (
            <>
              {data?.jobs?.map((job: Job) => {
                return (
                  <TitleCtn
                    key={job?._id}
                    title={job?.title}
                    id={job?._id}
                    idTyoe="Job ID:"
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

export default UserJobsWrapper;
