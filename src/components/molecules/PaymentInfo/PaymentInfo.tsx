interface PaymentInfoProps {
  value: string | number;
  title: string;
  extraStyle?: string;
}
const PaymentInfo = ({ title, value, extraStyle }: PaymentInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className={`font-medium ${extraStyle}`}>{title}</p>
      <p className={`text-gray-500 ${extraStyle}`}>{value}</p>
    </div>
  );
};

export default PaymentInfo;
