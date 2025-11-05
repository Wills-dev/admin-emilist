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

export interface JobTableInfo {
  title: string;
  userName: string;
  type: string;
  poster?: string;
  status: string;
  createdAt: string;
  jobId: string;
}
