import { UserMinInfo } from "./IUser";
import { VendorMinInfo } from "./IVendor";

export interface Payment {
    instaPay: string,
    servicePrice:number,
    user: UserMinInfo,
    vendor: VendorMinInfo,
}
