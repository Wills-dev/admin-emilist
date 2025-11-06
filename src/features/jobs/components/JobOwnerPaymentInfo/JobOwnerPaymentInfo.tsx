import Image from "next/image";

import {
  convertDateFormat,
  getCurrencySign,
  numberWithCommas,
} from "@/lib/helpers";

interface JobOwnerPaymentInfoProps {
  amountPaid: number;
  currency: string;
  paymentMethod: string;
  date: string;
  paymentStatus: string;
}

const JobOwnerPaymentInfo = ({
  amountPaid,
  currency,
  paymentMethod,
  date,
  paymentStatus,
}: JobOwnerPaymentInfoProps) => {
  return (
    <div className="px-10 max-sm:px-4 py-6 space-y-6">
      <h6 className="font-semibold max-sm:text-sm">Job Owner Payment Info</h6>
      <div className="flex gap-4">
        <Image
          src="/assets/icons/tick-circle.svg"
          alt="tick circle icon"
          width={20}
          height={20}
          className="w-8 h-8"
        />
        <div className="space-y-2">
          <h6 className="text-2xl font-bold capitalize">{paymentStatus}</h6>
          <p className="">
            {currency && getCurrencySign(currency)}
            {amountPaid && numberWithCommas(amountPaid)} (
            {paymentMethod && paymentMethod})
          </p>
          <p className="flex items-center gap-1">
            <Image
              src="/assets/icons/calendar-2.svg"
              alt="calendar"
              width={14}
              height={14}
              className="w-5 h-5"
            />{" "}
            {date && convertDateFormat(date)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobOwnerPaymentInfo;
