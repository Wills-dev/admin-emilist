"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";
import UserProjectsWrapper from "@/features/user/components/UserProjectsWrapper/UserProjectsWrapper";

const UserProjectPage = ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = use(params);
  return (
    <UserInfoLayout userId={userId}>
      <UserProjectsWrapper userId={userId} />
    </UserInfoLayout>
  );
};

export default UserProjectPage;
