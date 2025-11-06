import Avatar from "@/components/atoms/Avatar/Avatar";
import Rating from "@/components/molecules/Rating/Rating";

interface UserAvatarProps {
  name: string;
  level?: string;
  rating: number;
  imgUrl?: string;
}

const UserAvatar = ({ name, level, rating, imgUrl }: UserAvatarProps) => {
  return (
    <div className="flex items-center gap-2 ">
      <Avatar name={name} imgUrl={imgUrl} />
      <div className="flex items-center flex-wrap gap-1 text-gray-500">
        {level && (
          <p>
            {" "}
            <span>Level {level}</span>
            <span>|</span>
          </p>
        )}
        <Rating rating={rating} />
      </div>
    </div>
  );
};

export default UserAvatar;
