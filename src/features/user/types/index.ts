export interface TotalEarninng {
  currency: string;
  totalEarnings: number;
}

export interface UserTableInfo {
  name?: string;
  userName: string;
  email: string;
  phoneNumber: string;
  subscriptionn?: string;
  status: string;
  dateRegistered: string;
  totalEarnings: TotalEarninng[];
  userId: string;
}

export interface fetchDataProps {
  currentPage: number;
  limit: number;
  verified?: string;
  search: string | null;
  status?: string;
}

export interface UserAvailability {
  time: string;
  date: string;
  _id: string;
}

export interface PrivateExpertTableType {
  _id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  typeOfExpert: string;
  details: string;
  availability: UserAvailability[];
  createdAt: string;
  updatedAt: string;
}

export type UserSubscriptionInfo = {
  profileImage: string;
  name: string;
  level: string;
  uniqueId: string;
  fullName: string;
  status: string;
  subscription: Subscription;
  price: number;
  subscriptionTransactions: SubscriptionTransaction[];
};

export type Subscription = {
  _id: string;
  userId: string;
  planId: string;
  status: string;
  startDate: string;
  endDate: string;
  perks: Perk[];
  subscriptionPeriod: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Perk = {
  _id: string;
  name: string;
  limit: number;
  used: number;
};

export type SubscriptionTransaction = {
  _id?: string;
  amount?: number;
  method?: string;
  reference?: string;
  status?: string;
  date?: string;
};

export interface CreateAdminType {
  email: string;
  mobile: string;
  fullName: string;
  password: string;
}
