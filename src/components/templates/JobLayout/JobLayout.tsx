import JobHeader from "@/components/organisms/JobHeader/JobHeader";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import PageHeader from "@/components/molecules/PageHeader/PageHeader";

const JobLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout>
      <PageHeader
        title="Job Management"
        description=" View and manage details of jobs on Emilist"
      />
      <div className="space-y-6">
        <JobHeader />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default JobLayout;
