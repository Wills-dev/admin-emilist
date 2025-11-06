"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import JobInfoWrapper from "@/features/jobs/components/JobInfoWrapper/JobInfoWrapper";

const UserInfoPage = ({ params }: { params: Promise<{ jobId: string }> }) => {
  const { jobId } = use(params);

  return (
    <DashboardLayout>
      <JobInfoWrapper jobId={jobId} />
    </DashboardLayout>
  );
};

export default UserInfoPage;
