import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateTransferStatus } from "../api";
import { toastOption } from "@/lib/helpers/toast";
import { ApiErrorResponse } from "@/lib/types";
import { promiseErrorFunction } from "@/lib/helpers/promiseError";

export const useUpdateTransferStatus = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: updateTransferStatus,
    onSuccess: (data, variables) => {
      toast.success("Payment status updated.", toastOption);

      queryClient.invalidateQueries({
        queryKey: ["transaction info", variables.transactionId],
      });
    },
    onError: (error: ApiErrorResponse) => {
      promiseErrorFunction(error);
    },
  });

  return {
    isPending,
    updateTransferStatus: mutate,
  };
};
