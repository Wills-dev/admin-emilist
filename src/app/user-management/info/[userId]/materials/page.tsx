"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";
import UserMaterialWrapper from "@/features/user/components/UserMaterialWrapper/UserMaterialWrapper";

const UserMaterialsPage = ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = use(params);

  return (
    <UserInfoLayout userId={userId}>
      <UserMaterialWrapper userId={userId} />
    </UserInfoLayout>
  );
};

export default UserMaterialsPage;
