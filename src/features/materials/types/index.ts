import { Clicks, Review } from "@/lib/types";

export type ProductType = {
  _id: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  description: string;
  images: string[];
  availableQuantity: number;
  price: number;
  storeName: string;
  location: string;
  currency: string;
  userId: string;
  isDiscounted: boolean;
  reviews: Review[];
  clicks: Clicks;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
