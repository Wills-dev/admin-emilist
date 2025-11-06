import { Skeleton } from "@/components/ui/skeleton";

const UserAvatarLoader = () => {
  return (
    <div className="flex items-center gap-2">
      <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />
      <div className="flex items-center flex-wrap gap-1 text-gray-500">
        <Skeleton className="h-6 w-36 rounded-lg bg-gray-300" />
      </div>
    </div>
  );
};

export default UserAvatarLoader;
