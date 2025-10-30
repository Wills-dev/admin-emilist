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
