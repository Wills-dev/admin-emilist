import { axiosInstance } from "@/lib/axiosInstance";
import { fetchDataProps } from "../types";

export const getAllUsers = async ({
  currentPage,
  limit,
  search,
  verified,
}: fetchDataProps) => {
  try {
    let url = `/admin/users?page=${currentPage}&limit=${limit}`;
    if (verified) url += `&q=${verified}`;
    if (search) url += `&search=${search}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getPrivateExperts = async ({
  limit,
  currentPage,
  search,
}: fetchDataProps) => {
  try {
    // let url = `/admin/fetch-private-experts?page=${currentPage}&limit=${limit}`;
    // if (search) url += `&search=${search}`;
    const url = `/admin/fetch-private-experts`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async ({
  userId,
  q,
}: {
  userId: string;
  q?: string;
}) => {
  try {
    const url = `/admin/fetch-userDetails/${userId}${q ? `?q=${q}` : ""}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
