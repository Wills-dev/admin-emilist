import Image from "next/image";

interface AvatarProps {
  name: string;
  imgUrl?: string;
}

const Avatar = ({ name, imgUrl }: AvatarProps) => {
  const initials = name?.[0]?.toUpperCase();

  return (
    <div className="flex w-12 h-12 min-w-12 min-h-12 bg-gray-400 rounded-full items-center justify-center text-white uppercase">
      {imgUrl ? (
        <Image
          src={imgUrl}
          width={20}
          height={20}
          alt={name}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        initials
      )}
    </div>
  );
};

export default Avatar;
