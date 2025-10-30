import UserAvatar from "../UserAvatar/UserAvatar";
import Button from "@/components/atoms/Button/Button";

// interface UserProfileProps {
//   id: string;
// }

const UserProfile = () => {
  const isUserActive = true;
  return (
    <div className="flex sm:items-center justify-between sm:gap-10 gap-2">
      <UserAvatar name="Wills" rating={5} level="5" />
      <div className="">
        {isUserActive ? (
          <Button bgColor="bg-red-500" bgHoverColor="hover:bg-red-600">
            Deactivate user
          </Button>
        ) : (
          <Button>Activate user</Button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
