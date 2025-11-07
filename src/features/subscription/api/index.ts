import { fetchDataProps } from "@/features/user/types";
import { axiosInstance } from "@/lib/axiosInstance";

export const getAllSubscriptions = async ({
  currentPage,
  limit,
  search,
}: fetchDataProps) => {
  try {
    const url = `/admin/fetch-all-subscriptions?page=${currentPage}&limit=${limit}${
      search ? `&search=${search}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
