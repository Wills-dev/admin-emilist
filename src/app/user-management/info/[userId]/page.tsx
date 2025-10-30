"use client";

import UserInfoLayout from "@/components/templates/UserInfoLayout/UserInfoLayout";

const page = ({ params }: { params: { userId: string } }) => {
  const userId = params?.userId;

  return <UserInfoLayout userId={userId}>page</UserInfoLayout>;
};

export default page;
