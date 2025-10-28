import { axiosInstance } from "@/lib/axiosInstance";

interface getAllUsersProps {
  currentPage: number;
  limit: number;
  verified?: string;
  debouncedSearch: string;
}

export const getAllUsers = async ({
  currentPage,
  limit,
  debouncedSearch,
  verified,
}: getAllUsersProps) => {
  try {
    let url = `/admin/users?page=${currentPage}&limit=${limit}`;
    if (verified) url += `&q=${verified}`;
    if (debouncedSearch) url += `&search=${debouncedSearch}`;
    const { data } = await axiosInstance.get(url);
    console.log("data", data);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
