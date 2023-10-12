import { IUser } from "./IUser"
import { IVendor } from "./IVendor"

export interface IVendorWithDetails {
    userDetails : IUser,
    vendorDetails : IVendor
}

