import DashboardLayout from "@/components/templates/DashboardLayout/DashboardLayout";
import TransactionWrapper from "@/features/transactions/components/TransactionWrapper/TransactionWrapper";

const TransactionsPage = () => {
  return (
    <DashboardLayout>
      <TransactionWrapper />
    </DashboardLayout>
  );
};

export default TransactionsPage;
