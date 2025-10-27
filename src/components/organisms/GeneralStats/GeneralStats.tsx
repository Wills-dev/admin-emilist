"use client";

import { useGetAdminStats } from "@/lib/hooks/useGetAdminStats";

import MetricsWrapper from "../MetricsWrapper/MetricsWrapper";
import AreaChartWrapper from "../ChartWrapper/ChartWrapper";

const GeneralStats = () => {
  const {
    adminStats,
    isPending,
    year,
    handleYearChange,
    currency,
    handleCurrencyChange,
  } = useGetAdminStats();

  return (
    <div className="space-y-6">
      <MetricsWrapper adminStats={adminStats} isPending={isPending} />
      <AreaChartWrapper
        year={year}
        handleYearChange={handleYearChange}
        currency={currency}
        handleCurrencyChange={handleCurrencyChange}
        adminStats={adminStats}
      />
    </div>
  );
};

export default GeneralStats;
