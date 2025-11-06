import Button from "@/components/atoms/Button/Button";

import { useUpdatePaymentStatus } from "../../hooks/useUpdatePaymentStatus";

interface PayArtisanButtonProps {
  jobId: string;
  milestoneId: string;
}

const PayArtisanButton = ({ jobId, milestoneId }: PayArtisanButtonProps) => {
  const { isPending, markMilestonePaid } = useUpdatePaymentStatus();

  const handlePaymentUpdate = () => {
    markMilestonePaid({ jobId, milestoneId });
  };

  return (
    <div className="flex flex-col items-center w-full justify-center py-6">
      <div className="">
        <Button loading={isPending} onClick={handlePaymentUpdate}>
          Confirm payment
        </Button>
      </div>

      <p className="text-sm text-red-600">
        Click button above to confirm you have paid artisan for this milestone.
      </p>
    </div>
  );
};

export default PayArtisanButton;
