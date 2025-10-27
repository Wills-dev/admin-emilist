export function numberWithCommas(x: number) {
  const newNum = Number(x.toFixed(2));
  return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const currencies = [
  { label: "NGN", value: "NGN" },
  { label: "USD", value: "USD" },
  { label: "GBP", value: "GBP" },
  { label: "EUR", value: "EUR" },
];

export const getCurrencyColor = (currency: string): string => {
  const colors: Record<string, string> = {
    USD: "#9ef769",
    NGN: "#054753",
    EUR: "#fee300",
    GBP: "#ff9933",
  };
  return colors[currency];
};

export const currencyConfig = {
  USD: { symbol: "$", name: "US Dollar", color: "text-green-600" },
  NGN: { symbol: "₦", name: "Nigerian Naira", color: "text-emerald-600" },
  EUR: { symbol: "€", name: "Euro", color: "text-blue-600" },
  GBP: { symbol: "£", name: "British Pound", color: "text-indigo-600" },
};

// Generate years dynamically from 2024 to the current year
const currentYear = new Date().getFullYear();

export const years = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => {
  const year = 2024 + i;
  return { label: year.toString(), value: year.toString() };
});
