import { UserMinInfo } from "./IUser";
import { IVendorMinInfo } from "./IVendor";

export interface Payment {
    instaPay: string,
    servicePrice:number,
    user: UserMinInfo,
    vendor: IVendorMinInfo,
}
