import { Skeleton } from "@/components/ui/skeleton";

const UserInfoWrapperLoader = () => {
  return (
    <div className="space-y-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((skeleton) => (
        <Skeleton
          key={skeleton}
          className="w-full h-8 bg-gray-300 rounded-lg"
        />
      ))}
    </div>
  );
};

export default UserInfoWrapperLoader;
