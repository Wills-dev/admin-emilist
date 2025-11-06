import React from "react";
import { Application } from "../../types";
import UserAvatar from "@/features/user/components/UserAvatar/UserAvatar";
import { getLevel } from "@/lib/helpers";

interface ApplicantsProps {
  applicants: Application[];
}

const Applicants = ({ applicants }: ApplicantsProps) => {
  return (
    <div className="w-full bg-white rounded-lg py-6 sm:px-10 px-4 space-y-6">
      <h6 className="font-semibold max-sm:text-sm">Applicants</h6>
      <div className="">
        {applicants?.map((applicant) => (
          <div key={applicant?._id} className="space-y-1 border-b py-2">
            <UserAvatar
              imgUrl={applicant?.user?.profileImage || ""}
              name={applicant?.user?.userName || applicant?.user?.fullName}
              rating={
                applicant?.user?.level && getLevel(applicant?.user?.level)
              }
            />
            <p className="text-sm">
              {applicant?.user?.fullName || applicant?.user?.fullName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applicants;
