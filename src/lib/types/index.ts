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

export interface ExpertProfile {
  _id: string;
  services: string[];
  firstName: string;
  lastName: string;
  languages: string[];
  address: string;
  phoneNumber: string;
  bio: string;
  renderedServices: RenderedService[];
  certification: Certification[];
  membership: Membership[];
  insurance: Insurance[];
  coverageArea: string[];
  userId: string;
  businessName: string;
  yearFounded: string;
  numberOfEmployee: number;
  businessAddress: string;
  businessCity: string;
  businessState: string;
  businessCountry: string;
  startingPrice: number;
  noticePeriod: string;
  currency: string;
  businessDescription: string;
  expertType: string;
  reviews: Review[];
  clicks: Clicks;
  businessImages: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  isVerified: boolean;
}

export interface RenderedService {
  name: string;
  status: string;
  _id: string;
}

export interface Certification {
  issuingOrganisation: string;
  verificationNumber: string;
  issuingDate: string;
  expiringDate: string;
  isCertificateExpire: boolean;
  _id: string;
  isVerified?: boolean;
}

export interface Membership {
  organisation: string;
  positionHeld: string;
  startDate: string;
  endDate: string;
  isMembershipExpire: boolean;
  _id: string;
}

export interface Insurance {
  issuingOrganisation: string;
  coverage: string;
  description: string;
  _id: string;
}

export interface Clicks {
  users: string[];
  clickCount: number;
}

export interface Review {
  [key: string]: string;
}
