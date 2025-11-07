"use client";

import { use } from "react";

import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import TransactionInfoWrapper from "@/features/transactions/components/TransactionInfoWrapper/TransactionInfoWrapper";

const TransactionInfoPage = ({
  params,
}: {
  params: Promise<{ transactionId: string }>;
}) => {
  const { transactionId } = use(params);
  return (
    <DashboardLayout>
      <TransactionInfoWrapper transactionId={transactionId} />
    </DashboardLayout>
  );
};

export default TransactionInfoPage;
