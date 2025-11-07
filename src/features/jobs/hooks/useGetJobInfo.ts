import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { Milestone } from "../types";
import { getJobInfo } from "../api";

export const useGetJobInfo = (jobId: string) => {
  const { data, isPending, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["job info", jobId],
    queryFn: () => getJobInfo({ jobId }),
    enabled: true,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const [currentMilestone, setCurrentMilestone] = useState<Milestone | null>(
    null
  );

  useEffect(() => {
    if (data?.job?.milestones?.[0]) {
      setCurrentMilestone(data.job.milestones[0]);
    }
  }, [data]);

  return {
    data,
    isPending,
    isLoading,
    isError,
    error,
    refetch,
    currentMilestone,
    setCurrentMilestone,
  };
};
