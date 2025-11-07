"use client";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import MaterialInfoWrapper from "@/features/materials/components/MaterialInfoWrapper/MaterialInfoWrapper";
import { use } from "react";

const MaterialInfoPage = ({
  params,
}: {
  params: Promise<{ materialId: string }>;
}) => {
  const { materialId } = use(params);

  return (
    <DashboardLayout>
      <MaterialInfoWrapper materialId={materialId} />
    </DashboardLayout>
  );
};

export default MaterialInfoPage;
