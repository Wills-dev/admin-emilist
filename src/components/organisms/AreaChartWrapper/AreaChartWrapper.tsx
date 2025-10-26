import SelectField from "@/components/molecules/SelectField/SelectField";
import { currencies, years } from "@/lib/helpers";

interface AreaChartWrapperProps {
  year: number;
  currency: string;
  handleYearChange: (year: string) => void;
  handleCurrencyChange: (currency: string) => void;
}

const AreaChartWrapper = ({
  year,
  currency,
  handleYearChange,
  handleCurrencyChange,
}: AreaChartWrapperProps) => {
  return (
    <div className="space-y-2">
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
    </div>
  );
};

export default AreaChartWrapper;
