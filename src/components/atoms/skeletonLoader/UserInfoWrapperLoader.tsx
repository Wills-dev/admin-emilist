import { Skeleton } from "@/components/ui/skeleton";

interface UserInfoWrapperLoader {
  height?: string;
}

const UserInfoWrapperLoader = ({ height = "h-8" }: UserInfoWrapperLoader) => {
  return (
    <div className="space-y-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => (
        <Skeleton
          key={skeleton}
          className={`${height} w-ful bg-gray-300 rounded-lg`}
        />
      ))}
    </div>
  );
};

export default UserInfoWrapperLoader;
