interface PaymentInfoProps {
  value: string | number;
  title: string;
  extraStyle?: string;
  fontWeight?: string;
}
const PaymentInfo = ({
  title,
  value,
  extraStyle,
  fontWeight = "font-medium",
}: PaymentInfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className={`${fontWeight} ${extraStyle}`}>{title}</p>
      <p className={`text-gray-500 ${extraStyle}`}>{value}</p>
    </div>
  );
};

export default PaymentInfo;
