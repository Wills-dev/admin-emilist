import TableNavLinkWrapper from "@/components/molecules/TableNavLinkWrapper/TableNavLinkWrapper";
import { userManagementLinks } from "@/features/user/contants/inddex";

const UserHeader = () => {
  return <TableNavLinkWrapper links={userManagementLinks} />;
};

export default UserHeader;
