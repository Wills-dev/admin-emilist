"use client";

import { jobBreadcrumb } from "../../constants";
import { displayError } from "@/lib/helpers/promiseError";
import { useGetJobInfo } from "../../hooks/useGetJobInfo";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import JobDetails from "../JobDetails/JobDetails";
import JobMilestoneWrapper from "../JobMilestoneWrapper/JobMilestoneWrapper";
import ApplicantsWrapper from "../ApplicantsWrapper/ApplicantsWrapper";
import JobInfoWrapperLoader from "@/components/atoms/skeletonLoader/JobInfoWrapperLoader";

const JobInfoWrapper = ({ jobId }: { jobId: string }) => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    currentMilestone,
    setCurrentMilestone,
  } = useGetJobInfo(jobId);

  const errorMessage = displayError(error);

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div className="space-y-6">
      <AppBreadcrumb items={jobBreadcrumb} />
      {isLoading ? (
        <JobInfoWrapperLoader />
      ) : (
        <div className="grid grid-cols-12 gap-6 pb-10">
          <JobDetails jobInfo={data?.job} />
          <JobMilestoneWrapper
            milestones={data?.job?.milestones}
            currentMilestone={currentMilestone}
            setCurrentMilestone={setCurrentMilestone}
            currency={data?.job?.currency}
            jobId={jobId}
          />
          <ApplicantsWrapper applications={data?.job?.applications} />
        </div>
      )}
    </div>
  );
};

export default JobInfoWrapper;
