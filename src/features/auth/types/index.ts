export interface LoginProps {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  uniqueId: string;
  fullName: string;
  userName: string;
  email: string;
  number2: string;
  profileImage: string;
  role: "admin" | "user" | string;
  status: "Active" | "Inactive" | string;
  level: string;
  isVerified: boolean;
  isEmailVerified: boolean;
  isPrimeMember: boolean;
  requestedVerification: boolean;
  sharedCount: number;
  createdAt: string;
  updatedAt: string;
  businesses: Array<{
    _id: string;
    businessName: string;
  }>;
  mutedBusinesses: string[];
  mutedJobs: string[];
  comparedBusinesses: string[];
  comparedProducts: string[];
  invitedUsers: string[];
  subscription?: {
    _id?: string;
    userId?: string;
    planId: string;
    status: "active" | "inactive" | string;
    startDate: string;
    createdAt: string;
    updatedAt: string;
    perks: Array<{
      _id: string;
      name: string;
      limit: number;
      used: number;
    }>;
    __v?: number;
  };
  wallet: string[];
  wallets: Array<Record<string, string>>;
  registrationOtp: string | null;
  otpExpiresAt: string | null;

  __v: number;
}

export interface UserState {
  user: User | null;
  isAuthenticated: boolean;
}
