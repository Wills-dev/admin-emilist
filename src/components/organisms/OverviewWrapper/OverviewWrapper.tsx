import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import GeneralStats from "../GeneralStats/GeneralStats";

const OverviewWrapper = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
          Overview
        </h1>
        <p className="text-gray-600 mt-1">
          Welcome back! Here&apos;s what&apos;s happening today.
        </p>
      </div>
      <GeneralStats />
    </DashboardLayout>
  );
};

export default OverviewWrapper;
