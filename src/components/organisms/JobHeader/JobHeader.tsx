import TableNavLinkWrapper from "@/components/molecules/TableNavLinkWrapper/TableNavLinkWrapper";
import { jobNavLinks } from "@/features/jobs/constants";

const JobHeader = () => {
  return <TableNavLinkWrapper links={jobNavLinks} />;
};

export default JobHeader;
