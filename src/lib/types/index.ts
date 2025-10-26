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

export interface AdminStatsType {
  totalUsers: number;
  totalJobs: number;
  totalProducts: number;
  totalPrivateExperts: number;
}

export interface SelectOptionType {
  label: string;
  value: string;
}
