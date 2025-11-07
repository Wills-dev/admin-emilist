import Link from "next/link";

import UserAvatar from "@/features/user/components/UserAvatar/UserAvatar";
import { ROUTES } from "@/lib/helpers/routes";

interface UserProfileCardProps {
  profileImage?: string;
  name: string;
  rating: number;
  id?: string;
}

const UserProfileCard = ({
  name,
  rating,
  profileImage,
  id,
}: UserProfileCardProps) => {
  const userName = id ? (
    <Link
      href={ROUTES?.USER_INFO(id)}
      className="text-sm hover:text-green-500 transition-all duration-300"
    >
      {name}
    </Link>
  ) : (
    <p className="text-sm">{name}</p>
  );
  return (
    <div className="space-y-1 border-b py-2">
      <UserAvatar imgUrl={profileImage || ""} name={name} rating={rating} />
      {userName}
    </div>
  );
};

export default UserProfileCard;
