import { City } from "./City";
import { IFollowUser } from "./IFollow";
import { IPost } from "./IPost";
import { IService } from "./IService";
import { Governorate } from "./governorate";

export interface FullVendorInfo {
  id: number;
  userId: string;
  summary: string;
  latitude?: number | null;
  longitude?: number | null;
  street: string;
  district: string;
  categoryId: number;
  externalUrl: string;
  name: string;
  picUrl: string;
  gender: boolean;
  nationalId: string;
  phoneNumber: string;
  posts: IPost[];
  services: IService[];
  followers: IFollowUser[];
  city:City;
  governorate:Governorate;
}