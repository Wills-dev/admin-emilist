import { fetchDataProps } from "@/features/user/types";
import { axiosInstance } from "../axiosInstance";

export const getVerificationRequest = async ({
  currentPage,
  limit,
  search,
}: fetchDataProps) => {
  try {
    const url = `/admin/fetch-all-verifications?page=${currentPage}&limit=${limit}${
      search ? `&search=${search}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
