import { formatCreatedAt } from "@/lib/helpers";
import { JobType } from "../../types";

import { MapPin } from "lucide-react";

const JobDescription = ({ jobInfo }: { jobInfo: JobType }) => {
  return (
    <div className="sm:px-10 px-4 border-b py-6 space-y-5">
      <p className="text-green-500">{jobInfo?.category}</p>
      <div className="flex gap-10 flex-wrap">
        <p className="text-gray-400 font-light">
          Posted {jobInfo?.createdAt && formatCreatedAt(jobInfo?.createdAt)}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>{jobInfo?.location}</span>
        </p>
        <p>
          <span className="font-medium">Job ID:</span>
          <span> {jobInfo?._id}</span>
        </p>
      </div>
      <p className="text-sm">{jobInfo?.description}</p>
    </div>
  );
};

export default JobDescription;
