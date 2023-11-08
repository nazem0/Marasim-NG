import { VendorMinInfo } from "./IVendor";

export interface Reservation {
    userId: string;
    serviceId: number;
    price: number;
    status: string;
    isDeleted: boolean;
    dateTime: string;
    vendor: VendorMinInfo;
  }
  
 