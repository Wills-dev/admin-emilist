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

export type Job = {
  _id: string;
  category: string;
  service: string;
  title: string;
  description: string;
  duration: {
    number: number;
    period: string;
  };
  type: string;
  budget: number;
  location: string;
  expertLevel: string;
  milestones: Milestone[];
  achievementDetails: string;
  currency: string;
  status: string;
  userId: string;
  applications: Application[];
  isRequestForQuote: boolean;
  isClosed: boolean;
  clicks: Clicks;
  jobFiles: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  acceptedApplicationId: string;
  startDate: string;
};

export type Milestone = {
  timeFrame: {
    number: string;
    period: string;
  };
  invoice: {
    additionalAmount: number;
    invoiceRaised: boolean;
  };
  achievement: string;
  amount: number;
  status: string;
  paymentStatus: string;
  _id: string;
  paymentInfo: {
    amountPaid: number;
    paymentMethod: string;
    date: string;
  };
};

export type Application = {
  _id: string;
  status: string;
};

export type Clicks = {
  users: string[];
  clickCount: number;
};
