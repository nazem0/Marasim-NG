import { IUser, UserMinInfo } from "./IUser";
import { VendorMinInfo } from "./IVendor";

export interface UserReservation {
  id: number;
  serviceId: number;
  price: number;
  status: string;
  isDeleted: boolean;
  dateTime: string;
  vendor: VendorMinInfo;
}

export interface VendorReservation {
  Id: number
  ServiceId: number
  Price: number
  Status: string
  IsDeleted: boolean
  DateTime: string
  User: IUser
}

