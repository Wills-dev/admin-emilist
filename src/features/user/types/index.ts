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
