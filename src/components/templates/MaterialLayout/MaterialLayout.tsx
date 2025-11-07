import DashboardLayout from "../DashboardLayout/DashboardLayout";
import PageHeader from "@/components/molecules/PageHeader/PageHeader";
import TableNavLinkWrapper from "@/components/molecules/TableNavLinkWrapper/TableNavLinkWrapper";

import { materialsNavLinks } from "@/features/materials/constants";

const MaterialLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardLayout>
      <PageHeader
        title="Materials"
        description=" View and manage details of materials on Emilist"
      />
      <div className="space-y-6">
        <TableNavLinkWrapper links={materialsNavLinks} queryTitle="material" />
        {children}
      </div>
    </DashboardLayout>
  );
};

export default MaterialLayout;
