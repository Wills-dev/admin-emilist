import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";

const UserManagementWrapper = () => {
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
    </DashboardLayout>
  );
};

export default UserManagementWrapper;
