import { Application } from "../../types";
import { getLevel } from "@/lib/helpers";

import UserProfileCard from "@/components/molecules/UserProfileCard/UserProfileCard";

interface ApplicantsProps {
  applicants: Application[];
}

const Applicants = ({ applicants }: ApplicantsProps) => {
  return (
    <div className="w-full bg-white rounded-lg py-6 sm:px-10 px-4 space-y-6">
      <h6 className="font-semibold max-sm:text-sm">Applicants</h6>
      <div className="">
        {applicants?.map((applicant) => (
          <UserProfileCard
            key={applicant?._id}
            profileImage={applicant?.user?.profileImage}
            name={applicant?.user?.fullName || applicant?.user?.userName}
            rating={applicant?.user?.level && getLevel(applicant?.user?.level)}
            id={applicant?.user?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Applicants;
