import {
  differenceInHours,
  differenceInMinutes,
  differenceInDays,
  differenceInWeeks,
} from "date-fns";

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

const currentYear = new Date().getFullYear();

export const years = Array.from({ length: currentYear - 2024 + 1 }, (_, i) => {
  const year = 2024 + i;
  return { label: year.toString(), value: year.toString() };
});

export const convertDateFormat = (oldDate: string | Date) => {
  const date = new Date(oldDate).toString().split(" ");
  const newFormat = ` ${date[2]}  ${date[1]}, ${date[3]}`;
  return newFormat;
};

export const formatCreatedAt = (date: string): string => {
  const createdAt = date;
  const now = new Date();

  const hoursDiff = differenceInHours(now, createdAt);
  const minutesDiff = differenceInMinutes(now, createdAt);
  const daysDiff = differenceInDays(now, createdAt);
  const weeksDiff = differenceInWeeks(now, createdAt);

  if (hoursDiff < 1) {
    if (minutesDiff < 1) {
      return "Just now";
    } else if (minutesDiff < 2 && minutesDiff >= 1) {
      return `${minutesDiff}m ago`;
    } else {
      return `${minutesDiff}m ago`;
    }
  } else if (hoursDiff < 24) {
    return `${hoursDiff}h ago`;
  } else if (daysDiff <= 7) {
    return `${daysDiff}d ago`;
  } else {
    return `${weeksDiff}w ago`;
  }
};

export const getCurrencySign = (currency: string): string => {
  switch (currency.toUpperCase()) {
    case "NGN":
      return "₦";
    case "USD":
      return "$";
    case "EUR":
      return "€";
    case "GBP":
      return "£";
    default:
      return "₦";
  }
};

export function getLevel(input: string | number): number {
  const str = String(input).trim().toLowerCase();

  const wordMap: { [key: string]: number } = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };

  const num = Number(str);
  if (!isNaN(num) && num >= 1 && num <= 5 && Number.isInteger(num)) {
    return num;
  }

  return wordMap[str] ?? 5;
}
