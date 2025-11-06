import UserAvatar from "@/features/user/components/UserAvatar/UserAvatar";
import AcceptedArtisanInfoLoader from "@/components/atoms/skeletonLoader/AcceptedArtisanInfoLoader";

import { getLevel } from "@/lib/helpers";
import { useGetUserInfo } from "@/features/user/hooks/useGetUserInfo";

const AcceptedArtisanInfo = ({ userId }: { userId: string }) => {
  const { data, isLoading } = useGetUserInfo(userId, "userDetails");

  return (
    <div className="w-full bg-white rounded-lg py-6 sm:px-10 px-4 space-y-6">
      <h6 className="font-semibold max-sm:text-sm">Accepted Artisan Info</h6>
      {isLoading ? (
        <AcceptedArtisanInfoLoader />
      ) : (
        <div className="space-y-1">
          <UserAvatar
            imgUrl={data?.profileImage || ""}
            name={data?.userName || data?.fullName}
            rating={data?.level && getLevel(data?.level)}
            level={`${data?.level && getLevel(data?.level)}`}
          />
          <p className="text-sm">{data?.fullName || data?.fullName}</p>
          <p className="text-sm">{data?.email || data?.email}</p>
          {data?.phoneNumber &&
            data?.phoneNumber?.map((phone: string, index: number) => (
              <p className="text-sm" key={index}>
                {phone && phone}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default AcceptedArtisanInfo;
