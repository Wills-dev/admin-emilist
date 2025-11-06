import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updatePaymentStatus } from "../api";
import { ApiErrorResponse } from "@/lib/types";
import { toastOption } from "@/lib/helpers/toast";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useUpdatePaymentStatus = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updatePaymentStatus,
    onSuccess: (data, variables) => {
      toast.success("Payment status updated.", toastOption);

      queryClient.invalidateQueries({
        queryKey: ["job info", variables.jobId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  return {
    isPending,
    markMilestonePaid: mutate,
  };
};
