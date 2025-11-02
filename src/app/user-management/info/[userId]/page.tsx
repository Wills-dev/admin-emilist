"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";
import UserInfoWrapper from "@/features/user/components/UserInfoWrapper/UserInfoWrapper";

const UserInfoPage = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);

  return (
    <UserInfoLayout userId={userId}>
      <UserInfoWrapper userId={userId} />
    </UserInfoLayout>
  );
};

export default UserInfoPage;
