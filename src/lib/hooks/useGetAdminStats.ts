import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import { getAdminStats } from "../api/getAdminStats";

export const useGetAdminStats = () => {
  const currentYear = new Date().getFullYear();

  const [year, setYear] = useState(currentYear);
  const [currency, setCurrency] = useState("");

  const handleYearChange = (value: string) => {
    const newValue = Number(value);
    setYear(newValue);
  };

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["adminStats", year, currency],
    queryFn: () => getAdminStats({ year, currency }),
    staleTime: 5 * 60 * 1000,
    enabled: true,
  });

  return {
    adminStats: data,
    isPending,
    isError,
    error,
    currency,
    handleCurrencyChange,
    year,
    handleYearChange,
  };
};
