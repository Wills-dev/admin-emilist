"use client";

import { getLevel } from "@/lib/helpers";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";

import UserAvatar from "../UserAvatar/UserAvatar";
import Button from "@/components/atoms/Button/Button";
import UserProfileLoader from "@/components/atoms/skeletonLoader/UserProfileLoader";

const UserProfile = ({ userId }: { userId: string }) => {
  const { data, isLoading } = useGetUserInfo(userId);

  return (
    <>
      {isLoading ? (
        <UserProfileLoader />
      ) : (
        <div className="flex sm:items-center justify-between sm:gap-10 gap-2">
          <UserAvatar
            imgUrl={data?.profileImage || ""}
            name={data?.name || data?.fullName}
            rating={data?.level && getLevel(data?.level)}
            level={`${data?.level && getLevel(data?.level)}`}
          />
          <div className="">
            {data?.status === "Active" ? (
              <Button bgColor="bg-red-500" bgHoverColor="hover:bg-red-600">
                Deactivate user
              </Button>
            ) : (
              <Button>Activate user</Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
