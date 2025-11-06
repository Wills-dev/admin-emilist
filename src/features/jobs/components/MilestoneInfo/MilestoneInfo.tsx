import { getCurrencySign } from "@/lib/helpers";
import { Milestone } from "@/features/jobs/types";
import { numberWithCommas } from "@/lib/helpers";

import IconInfo from "@/components/atoms/IconInfo/IconInfo";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";

interface MilestoneInfoProps {
  currency: string;
  milestone: Milestone;
  border?: boolean;
}

const MilestoneInfo = ({
  milestone,
  currency,
  border = true,
}: MilestoneInfoProps) => {
  return (
    <div
      className={`w-full px-10 max-sm:px-4 py-6 space-y-6 ${
        border && "border-b border-gray-300"
      }`}
    >
      <div className="">
        <div className="w-full flex items-center justify-between py-2">
          <h6 className="font-semibold max-sm:text-sm">Details</h6>
          <div className="flex justify-end">
            <StatusBubble status={milestone.status || "pending"} />
          </div>
        </div>
        <p className="max-sm:text-sm">
          {milestone?.achievement && milestone?.achievement}
        </p>
      </div>
      <div className="w-full">
        <div className="flex  gap-10 flex-wrap max-sm:gap-5  py-6">
          <IconInfo
            imgUrl="/assets/icons/clock.jpg"
            alt="clock-icon"
            value={`${milestone?.timeFrame?.number} ${milestone?.timeFrame?.period}`}
            title="Milestone duration"
          />
          <IconInfo
            imgUrl="/assets/icons/empty-wallet.jpg"
            alt="wallet-icon"
            value={`${currency && getCurrencySign(currency)} ${
              milestone?.amount && numberWithCommas(milestone?.amount)
            }`}
            title="Amount"
          />
        </div>
      </div>
    </div>
  );
};

export default MilestoneInfo;
