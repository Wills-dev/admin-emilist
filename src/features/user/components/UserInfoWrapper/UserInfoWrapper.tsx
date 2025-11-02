"use client";

import { displayError } from "@/lib/helpers/promiseError";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import UserCard from "../UserCard/UserCard";
import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import UserInfoWrapperLoader from "@/components/atoms/skeletonLoader/UserInfoWrapperLoader";

const UserInfoWrapper = ({ userId }: { userId: string }) => {
  const { data, error, isError, isPending, refetch } = useGetUserInfo(
    userId,
    "userDetails"
  );

  const errorMessage = displayError(error);

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div className="bg-white p-6 rounded-lg w-full shadow-sm">
      <h2 className="font-medium tex-xl">User Info</h2>
      <div className="pt-6">
        {isPending ? (
          <UserInfoWrapperLoader />
        ) : (
          <>
            <UserCard title="Full Name" value={data?.name || data?.fullName} />
            <UserCard title="Username" value={data?.userName || "N/A"} />
            <UserCard title="Unique ID" value={`EMI-${data?.uniqueId}`} />
            <UserCard title="ID" value={userId || ""} />
            <UserCard title="Level" value={data?.level} />
            <UserCard title="Email" value={data?.email || "N/A"} />
            <UserCard
              title="Phone Number"
              value={data?.phoneNumber[0] || "N/A"}
            />
            <UserCard
              title="Phone Number 2"
              value={data?.phoneNumber[1] || "N/A"}
            />
            <UserCard
              title="Whatsapp Number"
              value={data?.whatsappNumber || "N/A"}
            />
            <UserCard title="Bio" value={data?.bio || "N/A"} />
            <UserCard title="Language" value={data?.languages || "N/A"} />
            <UserCard title="Location" value={data?.location || "N/A"} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserInfoWrapper;
