import UserHeader from "@/components/organisms/UserHeader/UserHeader";
import DashboardLayout from "../DashboardLayout/DashboardLayout";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          User Management
        </h1>
        <p className="text-gray-600 mt-1">
          View and manage details of user on Emilist
        </p>
      </div>
      <div className="space-y-6">
        <UserHeader />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default UserLayout;
