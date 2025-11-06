import { fetchDataProps } from "@/features/user/types";
import { axiosInstance } from "@/lib/axiosInstance";

export const getJobs = async ({
  currentPage,
  limit,
  search,
  status,
}: fetchDataProps) => {
  try {
    // const url = `/admin/fetch-jobs?page=${currentPage}&limit=${limit}${
    //   status ? `&status=${status}` : ""
    // }${search ? `&search=${search}` : ""}`;
    const url = `/admin/fetch-jobs?page=${currentPage}&limit=${limit}${
      status ? `&status=${status}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getJobInfo = async ({ jobId }: { jobId: string }) => {
  try {
    const url = `/admin/fetch-job/${jobId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const updatePaymentStatus = async ({
  jobId,
  milestoneId,
}: {
  jobId: string;
  milestoneId: string;
}) => {
  try {
    const url = `/admin/update-job-payment/${jobId}`;
    const payload = {
      status: "paid",
      milestoneId,
    };
    await axiosInstance.patch(url, payload);
  } catch (error) {
    throw error;
  }
};
