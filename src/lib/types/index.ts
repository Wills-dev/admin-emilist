export interface ApiErrorResponse {
  response?: {
    data?: {
      message?: string;
      detail?: string;
      errors?: string[];
    };
  };
}
export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "7xl";
  className?: string;
}

export interface TransactionRecord {
  period: string;
  NGN: number;
  USD: number;
  GBP: number;
  EUR: number;
}

export interface AdminStatsType {
  totalProducts: number;
  totalUsers: number;
  totalJobs: number;
  totalPrivateExperts: number;
  totalTransactions: {
    totalsByCurrency: {
      NGN: number;
      USD: number;
      GBP: number;
      EUR: number;
    };
    transactions: TransactionRecord[];
  };
}

export interface SelectOptionType {
  label: string;
  value: string;
}

export type Currency = "USD" | "NGN" | "EUR" | "GBP";
