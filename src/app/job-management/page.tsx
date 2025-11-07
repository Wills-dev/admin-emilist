import { Suspense } from "react";

import TableLoader from "@/components/atoms/skeletonLoader/TableLoader";
import JobManagementWrapper from "@/components/organisms/JobManagementWrapper/JobManagementWrapper";
import JobLayout from "@/components/templates/JobLayout/JobLayout";

const JobManagementPage = () => {
  return (
    <JobLayout>
      <Suspense fallback={<TableLoader />}>
        <JobManagementWrapper />
      </Suspense>
    </JobLayout>
  );
};

export default JobManagementPage;
