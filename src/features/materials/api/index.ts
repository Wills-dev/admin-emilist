import { fetchDataProps } from "@/features/user/types";
import { axiosInstance } from "@/lib/axiosInstance";

export const getMaterials = async ({
  currentPage,
  limit,
  search,
  status,
}: fetchDataProps) => {
  try {
    // const url = `/admin/fetch-all-materials?page=${currentPage}&limit=${limit}${
    //   status ? `&status=${status}` : ""
    // }${search ? `&search=${search}` : ""}`;
    const url = `/admin/fetch-all-materials?page=${currentPage}&llimit=${limit}${
      status ? `&q=${status}` : ""
    }`;
    const { data } = await axiosInstance.get(url);
    return data.data;
  } catch (error) {
    throw error;
  }
};

export const getMaterialInfo = async ({
  materialId,
}: {
  materialId: string;
}) => {
  try {
    const url = `/admin/fetch-material/${materialId}`;
    const { data } = await axiosInstance.get(url);
    return data?.data;
  } catch (error) {
    throw error;
  }
};
