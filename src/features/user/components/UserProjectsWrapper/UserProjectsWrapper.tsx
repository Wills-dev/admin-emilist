"use client";

import { FileX } from "lucide-react";

import { displayError } from "@/lib/helpers/promiseError";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import TitleCtn from "@/components/atoms/TitleCtn/TitleCtn";
import UserInfoWrapperLoader from "@/components/atoms/skeletonLoader/UserInfoWrapperLoader";
import EmptyState from "@/components/molecules/EmptyState/EmptyState";
import { ProjectType } from "@/features/jobs/types";

const UserProjectsWrapper = ({ userId }: { userId: string }) => {
  const { data, error, isError, isPending, refetch } = useGetUserInfo(
    userId,
    "projects"
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
          {data?.projects?.length < 1 ? (
            <EmptyState
              icon={FileX}
              title="No Projecct Found!"
              description="This user doesn't have any project."
            />
          ) : (
            <>
              {data?.projects?.map((project: ProjectType) => {
                return (
                  <TitleCtn
                    key={project?._id}
                    title={project?.job?.title}
                    id={project?._id}
                    idTyoe="Project ID:"
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

export default UserProjectsWrapper;
