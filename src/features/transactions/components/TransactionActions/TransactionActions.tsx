"use client";

import { useUpdatePaymentStatus } from "@/features/jobs/hooks/useUpdatePaymentStatus";
import { useUpdateTransferStatus } from "../../hooks/useUpdateTransferStatus";

import WhiteBg from "@/components/atoms/WhiteBg/WhiteBg";
import ConfirmAction from "@/components/molecules/ConfirmAction/ConfirmAction";

interface TransactionActionsProps {
  jobId?: string;
  milestoneId?: string;
  transactionId: string;
  showConfirmBtn: boolean;
  showTransferActions: boolean;
}

const TransactionActions = ({
  jobId,
  milestoneId,
  transactionId,
  showConfirmBtn,
  showTransferActions,
}: TransactionActionsProps) => {
  const { isPending, updateTransferStatus } = useUpdateTransferStatus();
  const { isPending: isUpdating, markMilestonePaid } = useUpdatePaymentStatus();

  const isLoadinng = isPending || isUpdating;

  const handlePaymentUpdate = () => {
    if (jobId && milestoneId) markMilestonePaid({ jobId, milestoneId });
  };

  const confirmTransfer = () => {
    updateTransferStatus({ transactionId, status: "Approved" });
  };

  const declineTransfer = () => {
    updateTransferStatus({ transactionId, status: "Decline" });
  };

  return (
    <div className="flex justify-end gap-2">
      {isLoadinng && <WhiteBg />}
      {showConfirmBtn && (
        <ConfirmAction
          onClick={handlePaymentUpdate}
          description="Are you sure you have made payment to artisan?"
          buttonTitle="Confirm payment"
        />
      )}
      {showTransferActions && (
        <>
          <ConfirmAction
            onClick={confirmTransfer}
            description="Are you sure you have seen this transfer? This action can not be reverted"
            buttonTitle="Confirm transfer"
          />
          <ConfirmAction
            onClick={declineTransfer}
            description="Are you sure you have not seen this transfer? This action can not be reverted"
            buttonTitle="Decline transfer"
            buttonStyle="bg-red-500 hover:bg-red-600 text-white"
          />
        </>
      )}
    </div>
  );
};

export default TransactionActions;
