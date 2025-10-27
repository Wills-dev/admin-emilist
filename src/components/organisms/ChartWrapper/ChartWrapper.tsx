import AreaChartContent from "@/components/molecules/charts/AreaChartContent/AreaChartContent";
import SelectField from "@/components/molecules/SelectField/SelectField";

import { currencies, getCurrencyColor, years } from "@/lib/helpers";
import { AdminStatsType } from "@/lib/types";
import PieChartContent from "@/components/molecules/charts/PieChartContent/PieChartContent";

interface AreaChartWrapperProps {
  year: number;
  currency: string;
  handleYearChange: (year: string) => void;
  handleCurrencyChange: (currency: string) => void;
  adminStats: AdminStatsType | undefined;
}

const AreaChartWrapper = ({
  year,
  currency,
  handleYearChange,
  handleCurrencyChange,
  adminStats,
}: AreaChartWrapperProps) => {
  const totalByCurrency = adminStats?.totalTransactions?.totalsByCurrency || {};

  const chartData = Object.entries(totalByCurrency).map(
    ([currency, amount]) => ({
      currency: currency,
      amount: amount,
      fill: getCurrencyColor(currency),
    })
  );

  console.log("chartData", chartData);

  return (
    <div className="space-y-2 pt-10">
      <div className="flex flex-wrap gap-2">
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
      </div>
      <div className="space-y-6">
        <div className="flex gap-6 flex-wrap">
          <div className="max-w-lg w-full">
            <AreaChartContent
              title="Revenue"
              chartData={adminStats?.totalTransactions?.transactions}
            />
          </div>
          <div className="flex-1 w-full min-w-[300px]">
            <PieChartContent chartData={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaChartWrapper;
