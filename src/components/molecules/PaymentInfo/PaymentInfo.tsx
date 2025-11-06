interface PaymentInfoProps {
  value: string | number;
  title: string;
}
const PaymentInfo = ({ title, value }: PaymentInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className="font-medium">{title}</p>
      <p className="text-gray-500">{value}</p>
    </div>
  );
};

export default PaymentInfo;
