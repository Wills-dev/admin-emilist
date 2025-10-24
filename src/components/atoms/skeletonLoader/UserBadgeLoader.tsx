import { Skeleton } from "@/components/ui/skeleton";

const UserBadgeLoader = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:block space-y-1">
        <Skeleton className="h-4 w-[80px] bg-gray-300" />
        <Skeleton className="h-4 w-[60px] bg-gray-300" />
      </div>
      <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
    </div>
  );
};

export default UserBadgeLoader;
