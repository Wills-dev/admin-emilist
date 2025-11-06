import { Milestone } from "../../types";
import JobOwnerPaymentInfo from "../JobOwnerPaymentInfo/JobOwnerPaymentInfo";
import MilestoneInfo from "../MilestoneInfo/MilestoneInfo";
import MileStoneInvoice from "../MileStoneInvoice/MileStoneInvoice";
import PayArtisanButton from "../PayArtisanButton/PayArtisanButton";
import ToggleMilestone from "../ToggleMilestone/ToggleMilestone";

interface JobMilestoneWrapperProps {
  milestones: Milestone[];
  currentMilestone: Milestone | null;
  setCurrentMilestone: (currentMilestone: Milestone) => void;
  currency: string;
  jobId: string;
}

const JobMilestoneWrapper = ({
  milestones,
  currentMilestone,
  setCurrentMilestone,
  currency,
  jobId,
}: JobMilestoneWrapperProps) => {
  const showInvoice =
    currentMilestone && currentMilestone?.invoice?.invoiceRaised;
  const showPaymentInfo =
    currentMilestone?.paymentStatus === "processing" ||
    currentMilestone?.paymentStatus === "paid";
  const showPaymentButton =
    currentMilestone && currentMilestone?.paymentStatus === "processing";

  return (
    <div className="col-span-9 max-lg:col-span-12 flex flex-col w-full bg-white rounded-lg py-6 sm:px-10 px-4">
      <ToggleMilestone
        milestones={milestones}
        currentMilestoneId={currentMilestone?._id || ""}
        setCurrentMilestone={setCurrentMilestone}
      />
      {currentMilestone && (
        <MilestoneInfo milestone={currentMilestone} currency={currency} />
      )}
      {showInvoice && (
        <MileStoneInvoice milestone={currentMilestone} currency={currency} />
      )}
      {showPaymentInfo && (
        <JobOwnerPaymentInfo
          date={currentMilestone?.paymentInfo.date}
          amountPaid={currentMilestone?.paymentInfo?.amountPaid}
          paymentMethod={currentMilestone?.paymentInfo?.paymentMethod}
          currency={currency}
          paymentStatus={currentMilestone?.paymentStatus}
        />
      )}
      {showPaymentButton && (
        <PayArtisanButton milestoneId={currentMilestone?._id} jobId={jobId} />
      )}
    </div>
  );
};

export default JobMilestoneWrapper;
