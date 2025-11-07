import UserProfileLoader from "./UserProfileLoader";
import { Skeleton } from "@/components/ui/skeleton";

const MaterialInfoWrapperLoader = () => {
  return (
    <div className="grid grid-cols-12 gap-6 pb-10">
      <div className="col-span-9 max-lg:col-span-12 flex flex-col w-full bg-white rounded-lg py-6">
        <div className="sm:px-10 px-4 space-y-2 border-b pb-6">
          <Skeleton className="h-6 w-40 rounded-lg bg-gray-300" />
          <Skeleton className="h-6 max-w-md w-full rounded-lg bg-gray-300" />
        </div>
        <div className="sm:px-10 px-4 py-6 border-b space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((skeleton) => (
              <Skeleton
                key={skeleton}
                className="h-10 w-48 rounded-lg bg-gray-300"
              />
            ))}
          </div>
          <div className="">
            <Skeleton className="h-14 w-full rounded-lg bg-gray-300" />
          </div>
        </div>
        <div className="sm:px-10 px-4 py-6 flex flex-wrap gap-4">
          {[1, 2, 3, 4].map((skeleton) => (
            <Skeleton
              key={skeleton}
              className="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-lg bg-gray-300"
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:col-span-3 col-span-12 bg-white rounded-lg py-6 sm:px-10 px-4 space-y-6 h-fit">
        <UserProfileLoader />
      </div>
    </div>
  );
};

export default MaterialInfoWrapperLoader;
