import AreaChartContent from "@/components/molecules/charts/AreaChartContent/AreaChartContent";
import ChartLoader from "@/components/atoms/skeletonLoader/ChartLoader";
import SelectField from "@/components/molecules/SelectField/SelectField";
import PieChartContent from "@/components/molecules/charts/PieChartContent/PieChartContent";
import SelectFieldLoader from "@/components/atoms/skeletonLoader/SelectFieldLoader";

import { currencies, getCurrencyColor, years } from "@/lib/helpers";
import { AdminStatsType } from "@/lib/types";

interface AreaChartWrapperProps {
  year: number;
  currency: string;
  handleYearChange: (year: string) => void;
  handleCurrencyChange: (currency: string) => void;
  adminStats: AdminStatsType | undefined;
  isPending: boolean;
}

const AreaChartWrapper = ({
  year,
  currency,
  handleYearChange,
  handleCurrencyChange,
  adminStats,
  isPending,
}: AreaChartWrapperProps) => {
  const totalByCurrency = adminStats?.totalTransactions?.totalsByCurrency || {};

  const chartData = Object.entries(totalByCurrency).map(
    ([currency, amount]) => ({
      currency: currency,
      amount: amount,
      fill: getCurrencyColor(currency),
    })
  );

  return (
    <div className="space-y-2 pt-10">
      <div className="flex flex-wrap gap-2">
        {isPending ? (
          <>
            <SelectFieldLoader />
            <SelectFieldLoader />
          </>
        ) : (
          <>
            <SelectField
              value={year.toString()}
              onChange={handleYearChange}
              options={years}
              label="Year"
              placeholder="Select year"
            />
            <SelectField
              value={currency}
              onChange={handleCurrencyChange}
              options={currencies}
              label="Currency"
              placeholder="Select currency"
            />
          </>
        )}
      </div>
      <div className="space-y-6">
        <div className="flex gap-6 flex-wrap">
          <div className="max-w-lg w-full">
            {isPending ? (
              <ChartLoader />
            ) : (
              <AreaChartContent
                title="Revenue"
                chartData={adminStats?.totalTransactions?.transactions}
              />
            )}
          </div>
          <div className="flex-1 w-full min-w-[300px]">
            {isPending ? (
              <ChartLoader />
            ) : (
              <PieChartContent chartData={chartData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaChartWrapper;
