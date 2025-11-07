import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import AdminWrapper from "@/features/user/components/AdminWrapper/AdminWrapper";

const page = () => {
  return (
    <DashboardLayout>
      <AdminWrapper />
    </DashboardLayout>
  );
};

export default page;
