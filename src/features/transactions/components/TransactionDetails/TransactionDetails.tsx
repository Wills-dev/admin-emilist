import { Transaction } from "../../types";
import { ROUTES } from "@/lib/helpers/routes";
import { getCurrencySign, numberWithCommas } from "@/lib/helpers";

import ShowImage from "@/components/molecules/ShowImage/ShowImage";
import UserCard from "@/features/user/components/UserCard/UserCard";

interface TransactionDetailsProps {
  transaction: Transaction;
}

const TransactionDetails = ({ transaction }: TransactionDetailsProps) => {
  const currency =
    transaction?.currency && getCurrencySign(transaction?.currency);
  const amount = transaction?.amount
    ? numberWithCommas(transaction?.amount)
    : "0.00";
  const amountWithCurrency = `${currency}${amount}`;

  return (
    <div className="">
      <UserCard title="Transaction  ID" value={transaction?._id} />
      <UserCard title="Reference" value={transaction?.reference || ""} />
      <UserCard title="Description" value={transaction?.description} />
      {transaction?.jobId?.title && (
        <UserCard
          title="Job Title"
          value={transaction?.jobId?.title}
          href={ROUTES?.JOB_INFO(transaction?.jobId?._id)}
        />
      )}
      <UserCard title="Amount" value={amountWithCurrency} />
      <UserCard title="Sender ID" value={transaction?.userId?._id} />
      <UserCard
        title="user's name"
        href={ROUTES?.USER_INFO(transaction?.userId?._id)}
        value={transaction?.userId?.fullName || transaction?.userId?.userName}
      />
      {transaction?.recieverId?._id && (
        <UserCard title="Reciever ID" value={transaction?.recieverId?._id} />
      )}
      {transaction?.recieverId?._id && (
        <UserCard
          title="Reciever name"
          href={ROUTES?.USER_INFO(transaction?.recieverId?._id)}
          value={
            transaction?.recieverId?.fullName ||
            transaction?.recieverId?.userName
          }
        />
      )}
      <UserCard title="Payment Method" value={transaction?.paymentMethod} />
      <UserCard title="Type" value={transaction?.type} />
      {transaction?.transferReceipt && (
        <ShowImage
          alt="transaction  receipt"
          src={transaction?.transferReceipt}
          extraStyle="w-28 h-28 max-sm:w-20 max-sm:h-20 rounded-lg"
        />
      )}
    </div>
  );
};

export default TransactionDetails;
