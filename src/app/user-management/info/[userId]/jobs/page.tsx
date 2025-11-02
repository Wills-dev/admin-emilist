"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";
import UserJobsWrapper from "@/features/user/components/UserJobsWrapper/UserJobsWrapper";

const UserJobsPage = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);

  return (
    <UserInfoLayout userId={userId}>
      <UserJobsWrapper userId={userId} />
    </UserInfoLayout>
  );
};

export default UserJobsPage;
