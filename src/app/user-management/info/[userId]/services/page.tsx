"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";
import UserServiceWrapper from "@/features/user/components/UserServiceWrapper/UserServiceWrapper";

const UserServicesPage = ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = use(params);

  return (
    <UserInfoLayout userId={userId}>
      <UserServiceWrapper userId={userId} />
    </UserInfoLayout>
  );
};

export default UserServicesPage;
