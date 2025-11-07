import { fetchDataProps } from "@/features/user/types";
import { axiosInstance } from "@/lib/axiosInstance";

export const getTransactions = async ({
  currentPage,
  limit,
  search,
}: fetchDataProps) => {
  try {
    const url = `/admin/fetch-all-transactions?page=${currentPage}&limit=${limit}${
      search ? `&search=${search}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionInfo = async ({
  transactionId,
}: {
  transactionId: string;
}) => {
  try {
    const url = `/admin/fetch-transaction/${transactionId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const updateTransferStatus = async ({
  transactionId,
  status,
}: {
  transactionId: string;
  status: string;
}) => {
  try {
    const url = `/admin/verify-bank-transfer`;
    const payload = {
      transactionId,
      status, // Approved, Declined
    };
    await axiosInstance.post(url, payload);
  } catch (error) {
    throw error;
  }
};
