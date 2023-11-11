import { IUser } from "./IUser";
import { VendorMinInfo } from "./IVendor";
import { IServiceMinInfo } from "./IService";


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
  vendor: VendorMinInfo;
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
  vendor: VendorMinInfo;
}