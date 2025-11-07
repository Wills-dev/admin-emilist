"use client";

import { displayError } from "@/lib/helpers/promiseError";
import { transactionBreadcrumb } from "../../constants";
import { useGetTransactionInfo } from "../../hooks/useGetTransactionInfo";

import ErrorMessage from "@/components/molecules/ErrorMessage/ErrorMessage";
import AppBreadcrumb from "@/components/molecules/AppBreadcrumb/AppBreadcrumb";
import UserInfoWrapperLoader from "@/components/atoms/skeletonLoader/UserInfoWrapperLoader";
import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import TransactionActions from "../TransactionActions/TransactionActions";
import TransactionDetails from "../TransactionDetails/TransactionDetails";

const TransactionInfoWrapper = ({
  transactionId,
}: {
  transactionId: string;
}) => {
  const { data, isPending, isError, error, refetch } =
    useGetTransactionInfo(transactionId);

  const showConfirmBtn = data?.status === "processing";
  const showTransferActions =
    data?.paymentMethod === "BankTransfer" && !data?.adminApproval;

  const isTransationBtnVisible = showConfirmBtn || showTransferActions;

  const errorMessage = displayError(error);

  if (isError && errorMessage) {
    return <ErrorMessage message={errorMessage} onRetry={refetch} />;
  }

  return (
    <div className="space-y-6">
      <AppBreadcrumb items={transactionBreadcrumb} />
      <div className="bg-white p-6 rounded-lg w-full shadow-sm">
        {isPending ? (
          <UserInfoWrapperLoader />
        ) : (
          <>
            {isTransationBtnVisible && (
              <TransactionActions
                showConfirmBtn={showConfirmBtn}
                showTransferActions={showTransferActions}
                transactionId={transactionId}
                jobId={data?.jobId?._id}
                milestoneId={data?.milestoneId}
              />
            )}
            <div className="py-6">
              <StatusBubble status={data?.status} />
            </div>
            <TransactionDetails transaction={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionInfoWrapper;
