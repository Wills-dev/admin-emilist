import { Suspense } from "react";

import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import MaterialWrapper from "@/components/organisms/MaterialWrapper/MaterialWrapper";
import MaterialLayout from "@/components/templates/MaterialLayout/MaterialLayout";

const MaterialsPage = () => {
  return (
    <MaterialLayout>
      <Suspense fallback={<TableLoader />}>
        <MaterialWrapper />
      </Suspense>
    </MaterialLayout>
  );
};

export default MaterialsPage;
