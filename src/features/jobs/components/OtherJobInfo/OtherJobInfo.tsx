import IconInfo from "@/components/atoms/IconInfo/IconInfo";

import { JobType } from "../../types";
import { getCurrencySign, getLevel, numberWithCommas } from "@/lib/helpers";

const OtherJobInfo = ({ jobInfo }: { jobInfo: JobType }) => {
  const currencySign = jobInfo?.currency && getCurrencySign(jobInfo?.currency);
  const amount = jobInfo?.maxPrice
    ? numberWithCommas(jobInfo?.maxPrice)
    : jobInfo?.budget
    ? numberWithCommas(jobInfo?.budget)
    : "N/A";
  const projectDuration = `${
    jobInfo?.duration?.number && numberWithCommas(jobInfo?.duration?.number)
  } ${jobInfo?.duration?.period}`;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-b sm:px-10 px-4 py-6 w-full">
      <IconInfo
        imgUrl="/assets/icons/empty-wallet.jpg"
        title={jobInfo?.type === "biddable" ? "Max price" : "Budget"}
        value={`${currencySign} ${amount}`}
        alt="amount"
      />
      <IconInfo
        imgUrl="/assets/icons/layer.png"
        title="Milestone"
        value={jobInfo?.milestones?.length || 1}
        alt="milestone"
      />
      <IconInfo
        imgUrl="/assets/icons/guru.png"
        title="Expert level"
        value={` Level ${
          jobInfo?.expertLevel && getLevel(jobInfo?.expertLevel)
        } & above`}
        alt="level"
      />
      <IconInfo
        imgUrl="/assets/icons/clock.jpg"
        title="Project duration"
        value={projectDuration}
        alt="duration"
      />
      <IconInfo
        imgUrl="/assets/icons/face.png"
        title="Applicants"
        value={jobInfo?.applications?.length || 0}
        alt="applicants"
      />
    </div>
  );
};

export default OtherJobInfo;
