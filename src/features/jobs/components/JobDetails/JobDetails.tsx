import { JobType } from "../../types";

import Title from "@/components/atoms/Title/Title";
import JobDescription from "../JobDescription/JobDescription";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import OtherJobInfo from "../OtherJobInfo/OtherJobInfo";
import JobFile from "../JobFile/JobFile";

interface JobDetailsProps {
  jobInfo: JobType;
}

const JobDetails = ({ jobInfo }: JobDetailsProps) => {
  return (
    <div className="col-span-12 flex flex-col w-full bg-white rounded-lg py-6">
      <div className="flex justify-between sm:px-10 px-4 border-b pb-6">
        <Title
          title={jobInfo?.title}
          className="sm:text-3xl max-sm:text-2xl font-semibold"
        />
        <StatusBubble status={jobInfo?.status} />
      </div>
      <JobDescription jobInfo={jobInfo} />
      <OtherJobInfo jobInfo={jobInfo} />
      <JobFile jobFiles={jobInfo?.jobFiles} />
    </div>
  );
};

export default JobDetails;
