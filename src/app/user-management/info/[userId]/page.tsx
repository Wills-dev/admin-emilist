"use client";

import { use } from "react";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";

const UserInfoPage = ({ params }: { params: Promise<{ userId: string }> }) => {
  const { userId } = use(params);

  return <UserInfoLayout userId={userId}>UserInfoPage</UserInfoLayout>;
};

export default UserInfoPage;
