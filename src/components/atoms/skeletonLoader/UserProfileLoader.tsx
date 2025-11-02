import ButtonLoader from "./ButtonLoader";
import UserAvatarLoader from "./UserAvatarLoader";

const UserProfileLoader = () => {
  return (
    <div className="flex sm:items-center justify-between sm:gap-10 gap-2">
      <UserAvatarLoader />
      <ButtonLoader />
    </div>
  );
};

export default UserProfileLoader;
