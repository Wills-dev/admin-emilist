import { Clicks } from "@/lib/types";

export type ProjectType = {
  _id: string;
  job: {
    _id: string;
    title: string;
    description: string;
    budget: number;
  };
  user: string;
  creator: string;
  status: string;
  directJobStatus: string;
  biddableDetails: {
    milestones: Milestone[];
  };
  appliedAt: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

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
    note?: string;
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
  acceptedAt: string;
  appliedAt: string;
  biddableDetails: {
    milestones: Milestone[];
  };
  businessId: string;
  createdAt: string;
  creator: string;
  job: string;
  status: string;
  updatedAt: string;
  user: {
    email: string;
    fullName: string;
    level: "one" | "two" | "three" | "four" | "five";
    profileImage: string;
    userName: string;
    _id: string;
  };
  _id?: string;
};

export interface JobTableInfo {
  title: string;
  userName: string;
  type: string;
  poster?: string;
  status: string;
  createdAt: string;
  jobId: string;
}

export interface JobFileType {
  url: string;
  _id: string;
}

export interface JobType {
  _id: string;
  acceptedApplicationId: string;
  achievementDetails: string;
  applications: Application[];
  budget?: number;
  maxPrice?: number;
  category: string;
  clicks: Clicks;
  createdAt: string;
  updatedAt: string;
  currency: string;
  description: string;
  dueDate: string | null;
  duration: {
    number: number;
    period: string;
  };
  expertLevel: string;
  isClosed: boolean;
  isRequestForQuote: boolean;
  jobFiles: JobFileType[];
  location: string;
  milestones: Milestone[];
  service: string;
  startDate: string;
  status: string;
  title: string;
  type: string;
  userId: {
    _id: string;
    email: string;
    fullName: string;
    level: string;
    location: string;
    profileImage: string;
    userName: string;
  };
}

export type JobInfoType = {
  job: JobType;
  totalArtisansHired: number;
  totalJobsPosted: number;
  __v: number;
};
