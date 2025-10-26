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

// Generate years dynamically from 2024 to the current year
const currentYear = new Date().getFullYear();

export const years = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => {
  const year = 2024 + i;
  return { label: year.toString(), value: year.toString() };
});
