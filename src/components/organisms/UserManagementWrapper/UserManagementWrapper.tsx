import AllUserWrapper from "@/features/user/components/AllUserWrapper/AllUserWrapper";
import UserLayout from "@/components/templates/UserLayout/UserLayout";

const UserManagementWrapper = () => {
  return (
    <UserLayout>
      <AllUserWrapper />
    </UserLayout>
  );
};

export default UserManagementWrapper;
