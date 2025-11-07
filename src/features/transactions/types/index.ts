import { User } from "@/features/auth/types";
import { ProductType } from "@/features/materials/types";

export interface Transaction {
  _id: string;
  userId: User;
  type: "DEBIT" | "CREDIT";
  amount: number;
  description: string;
  balanceBefore: number;
  status: "completed" | "pending" | "failed";
  recieverId?: User;
  jobId?: ProductType;
  milestoneId?: string;
  paymentMethod: string;
  adminApproval: boolean;
  transferReceipt?: string | null;
  walletId: {
    _id: string;
  };
  currency: string;
  isSettled: boolean;
  serviceType: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  reference?: string;
  transferReceip?: string;
}
