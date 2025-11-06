import ShowImage from "@/components/molecules/ShowImage/ShowImage";

import { JobFileType } from "../../types";

const JobFile = ({ jobFiles }: { jobFiles: JobFileType[] }) => {
  const isJobFileAvailable = !jobFiles || jobFiles?.length < 1;
  return (
    <div className="px-10 max-sm:px-5 py-6 w-full border-b">
      <h6 className="text-lg font-semibold max-sm:text-sm font-inter">Files</h6>
      {isJobFileAvailable ? (
        <p className="text-gray-500 text-sm">No file provided</p>
      ) : (
        <div className="flex items-center w-full gap-2 pt-4 flex-wrap">
          {jobFiles?.map((file: JobFileType, index: number) => (
            <ShowImage
              key={index}
              alt="business file"
              src={file?.url}
              extraStyle="w-28 h-28 max-sm:w-20 max-sm:h-20"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default JobFile;
