import UserLayout from "@/components/templates/UserLayout/UserLayout";
import VerifiedUserWrapper from "@/features/user/components/VerifiedUserWrapper/VerifiedUserWrapper";

const VerifiedUsersPage = () => {
  return (
    <UserLayout>
      <VerifiedUserWrapper />
    </UserLayout>
  );
};

export default VerifiedUsersPage;
