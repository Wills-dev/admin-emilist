"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";
import UserSubscriptionsWrapper from "@/features/user/components/UserSubscriptionsWrapper/UserSubscriptionsWrapper";

const UserSubscriptionsPage = ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = use(params);

  return (
    <UserInfoLayout userId={userId}>
      <UserSubscriptionsWrapper userId={userId} />
    </UserInfoLayout>
  );
};

export default UserSubscriptionsPage;
