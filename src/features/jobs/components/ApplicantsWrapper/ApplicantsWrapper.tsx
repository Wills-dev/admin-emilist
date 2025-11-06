import { Application } from "../../types";
import AcceptedArtisanInfo from "../AcceptedArtisanInfo/AcceptedArtisanInfo";
import Applicants from "../Applicants/Applicants";

interface ApplicantsWrapperProps {
  applications: Application[];
}

const ApplicantsWrapper = ({ applications }: ApplicantsWrapperProps) => {
  const acceptedApplication = applications?.find(
    (app) => app.status === "accepted"
  );

  return (
    <div className="lg:col-span-3 col-span-12 space-y-6">
      {acceptedApplication && (
        <AcceptedArtisanInfo userId={acceptedApplication?.user?._id} />
      )}
      <Applicants applicants={applications} />
    </div>
  );
};

export default ApplicantsWrapper;
