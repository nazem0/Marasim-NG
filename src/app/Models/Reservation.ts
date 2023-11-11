import { IUser, UserMinInfo } from "./IUser";
import { IServiceMinInfo } from "./IService";
import { IVendorMinInfo } from "./IVendor";
import { ReviewViewModel } from "./IReview";

export interface UserReservation {
  id: number;
  serviceId: number;
  price: number;
  status: string;
  isDeleted: boolean;
  dateTime: string;
  latitude: number;
  longitude: number;
  address: string;
  vendor: IVendorMinInfo;
  review:ReviewViewModel
}

export interface VendorReservation {
  id: number;
  serviceId: number;
  price: number;
  status: string;
  isDeleted: boolean;
  dateTime: string;
  latitude: number;
  longitude: number;
  address: string;
  user: IUser;
  service: IServiceMinInfo ;
}

export interface CheckoutReservation {
  dateTime: Date;
  address: string;
  price: number;
  serviceName: string;
  vendor: IVendorMinInfo;
}

export interface AdminReservation {
  id: number;
  serviceId: number;
  price: number;
  status: string;
  isDeleted: boolean;
  dateTime: string;
  latitude: number;
  longitude: number;
  address: string;
  user: UserMinInfo;
  vendor: IVendorMinInfo;
}