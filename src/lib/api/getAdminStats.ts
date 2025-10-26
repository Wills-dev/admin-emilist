import { axiosInstance } from "../axiosInstance";
import { AdminStatsType } from "../types";

interface GetAdminStatsParams {
  currency?: string;
  year: number | undefined;
}

export const getAdminStats = async ({
  currency,
  year,
}: GetAdminStatsParams): Promise<AdminStatsType> => {
  try {
    const url = `/admin/dashboard?year=${year}${
      currency ? `&currency=${currency}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
