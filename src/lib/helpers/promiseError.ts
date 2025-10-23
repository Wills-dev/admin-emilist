import toast from "react-hot-toast";
import { toastOption } from "./toast";
import { ApiErrorResponse } from "../types";

export const promiseErrorFunction = (error: ApiErrorResponse) => {
  if (error?.response?.data?.message) {
    toast.error(`${error?.response?.data?.message}`, toastOption);
  } else if (error?.response?.data?.detail) {
    toast.error(`${error?.response?.data?.detail}`, toastOption);
  } else if (
    error?.response?.data?.errors &&
    error?.response?.data?.errors?.length > 0
  ) {
    toast.error(`${error?.response?.data?.errors[0]}`, toastOption);
  } else {
    return toast.error(`Internal Server Error! Contact support`, toastOption);
  }
};
