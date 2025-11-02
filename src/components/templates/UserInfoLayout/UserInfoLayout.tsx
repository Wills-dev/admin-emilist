"use client";

import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import UserProfile from "@/features/user/components/UserProfile/UserProfile";
import TableNavLinkWrapper from "@/components/molecules/TableNavLinkWrapper/TableNavLinkWrapper";

import { userBreadcrumb, userInfoLinks } from "@/features/user/contants/inddex";

interface UserInfoLayout {
  children: React.ReactNode;
  userId: string;
}

const UserInfoLayout = ({ children, userId }: UserInfoLayout) => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AppBreadcrumb items={userBreadcrumb} />
        <UserProfile userId={userId} />
        <TableNavLinkWrapper
          links={userInfoLinks(userId)}
          activeLink="text-green-500 font-medium"
          normalLink="text-gray-700 hover:text-black"
        />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default UserInfoLayout;
