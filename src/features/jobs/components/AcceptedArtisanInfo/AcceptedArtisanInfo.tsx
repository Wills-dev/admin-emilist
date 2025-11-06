import UserAvatar from "@/features/user/components/UserAvatar/UserAvatar";
import AcceptedArtisanInfoLoader from "@/components/atoms/skeletonLoader/AcceptedArtisanInfoLoader";

import { getLevel } from "@/lib/helpers";
import { useGetUserInfo } from "@/features/user/hooks/useGetUserInfo";
import PaymentInfo from "@/components/molecules/PaymentInfo/PaymentInfo";

const AcceptedArtisanInfo = ({ userId }: { userId: string }) => {
  const { data, isLoading } = useGetUserInfo(userId, "userDetails");

  return (
    <div className="w-full bg-white rounded-lg py-6 sm:px-10 px-4 space-y-6">
      <h6 className="font-semibold max-sm:text-sm">Accepted Artisan Info</h6>
      {isLoading ? (
        <AcceptedArtisanInfoLoader />
      ) : (
        <>
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
          <div className="space-y-4">
            <h6 className="font-semibold text-sm">Artisan Account Info</h6>
            <div className="space-y-2">
              <PaymentInfo
                title="Account Name"
                value={data?.accountDetails?.holdersName}
                extraStyle="text-xs"
              />
              <PaymentInfo
                title="Bank Name"
                value={data?.accountDetails?.bank}
                extraStyle="text-xs"
              />
              <PaymentInfo
                title="Bank Number"
                value={data?.accountDetails?.number}
                extraStyle="text-xs"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AcceptedArtisanInfo;
