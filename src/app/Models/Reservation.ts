import { IUser } from "./IUser";
import { IVendorMinInfo } from "./IVendor";

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
  user: IUser
}

export interface CheckoutReservation {
  dateTime: Date;
  address: string;
  price: number;
  serviceName: string;
  vendor: IVendorMinInfo;
}