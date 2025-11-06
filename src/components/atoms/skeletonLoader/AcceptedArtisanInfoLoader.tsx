import { Skeleton } from "@/components/ui/skeleton";
import UserAvatarLoader from "./UserAvatarLoader";

const AcceptedArtisanInfoLoader = () => {
  return (
    <div className="space-y-1">
      <UserAvatarLoader />
      <Skeleton className="h-6 max-w-sm w-full rounded-lg bg-gray-300" />
      <Skeleton className="h-6 max-w-sm w-full rounded-lg bg-gray-300" />
      <Skeleton className="h-6 max-w-sm w-full rounded-lg bg-gray-300" />
    </div>
  );
};

export default AcceptedArtisanInfoLoader;
