import { IUser, UserMinInfo } from "./IUser";
import { IServiceMinInfo } from "./IService";
import { IVendorMinInfo } from "./IVendor";
import { ReviewViewModel } from "./IReview";

export interface UserReservation {
  id: number;
  serviceId: number;
  price: number;
  status: string; // Assuming 'char' is mapped to a string
  isDeleted: boolean;
  dateTime: string;
  street?: string;
  city: string;
  gov: string;
  district: string;
  vendor: IVendorMinInfo;
  review?:ReviewViewModel
}

export interface VendorReservation {
  id: number;
  serviceId: number;
  price: number;
  status: string; // Assuming 'char' is mapped to a string
  isDeleted: boolean;
  dateTime: string;
  street?: string;
  city: string;
  gov: string;
  district: string;
  user: IUser;
  service: IServiceMinInfo ;
}

export interface CheckoutReservation {
  dateTime: string;
  street: string;
  city: string;
  gov: string;
  district: string;
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
  street: string;
  city: string;
  gov: string;
  district: string;
  user: UserMinInfo;
  vendor: IVendorMinInfo;
}

// export interface VendorReservationList{
//   count: number;
//   data: VendorReservation[];
//   lastPage: number;
//   pageIndex: number;
//   pageSize: number;
// }