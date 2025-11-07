import { Clicks, Review } from "@/lib/types";

export interface MaterialImages {
  imageUrl: string;
  _id: string;
}

export interface MaterialOwnerType {
  _id: string;
  userName: string;
  fullName?: string;
  profileImage?: string;
  level: string;
}

export type ProductType = {
  _id: string;
  name: string;
  title: string;
  category: string;
  subCategory: string;
  brand: string;
  description: string;
  images: MaterialImages[];
  availableQuantity: number;
  price: number;
  discountedPrice: number;
  storeName: string;
  location: string;
  currency: string;
  userId: MaterialOwnerType;
  isDiscounted: boolean;
  reviews: Review[];
  clicks: Clicks;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
