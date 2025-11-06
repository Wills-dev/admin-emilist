import StatusBubble from "@/components/atoms/StatusBubble/StatusBubble";
import PaymentInfo from "@/components/molecules/PaymentInfo/PaymentInfo";

import { Milestone } from "../../types";
import { getCurrencySign, numberWithCommas } from "@/lib/helpers";

interface MileStoneInvoiceProps {
  milestone: Milestone;
  currency: string;
}

const MileStoneInvoice = ({ milestone, currency }: MileStoneInvoiceProps) => {
  return (
    <div className="px-10 max-sm:px-4 py-6 space-y-6">
      <div className="w-full flex items-center justify-between">
        <h6 className="font-semibold max-sm:text-sm">Invoice Details</h6>
        <div className="flex justify-end">
          <StatusBubble status={milestone?.paymentStatus} />
        </div>
      </div>
      <div className="space-y-2">
        <PaymentInfo
          title="Amount:"
          value={`${currency && getCurrencySign(currency)}${
            milestone?.amount && numberWithCommas(milestone?.amount)
          }`}
        />
        <PaymentInfo
          title="Additional amount:"
          value={`${currency && getCurrencySign(currency)}${
            milestone?.invoice?.additionalAmount &&
            numberWithCommas(milestone?.invoice?.additionalAmount)
          }`}
        />
        {milestone?.invoice?.note && (
          <PaymentInfo title="Note:" value={milestone?.invoice?.note} />
        )}
      </div>
    </div>
  );
};

export default MileStoneInvoice;
