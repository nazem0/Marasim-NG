import { IFollowUser } from "./IFollow";
import { IPost } from "./IPost";
import { IService } from "./IService";

export interface FullVendorInfo {
  id: string;
  address: string;
  categoryId: number;
  externalUrl: string | null;
  gender: boolean;
  latitude: number;
  longitude: number;
  name: string;
  nationalId: string;
  picUrl: string;
  summary: string;
  userId: string;
  posts: IPost[];
  services: IService[];
  followers: IFollowUser[];
}

