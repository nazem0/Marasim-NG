import { IPost } from "./IPost"
import { IVendorMidInfo } from "./IVendor"

export interface IFollowing {
    id: number,
    userId: number,
    vendorId: number,
    date: string
}

export interface IFollowVendor {
    dateTime: string,
    name: string,
    userId: string,
    picUrl: string,
    vendorId: number
}

export interface IFollowUser {
    dateTime: string,
    name: string,
    userId: string,
    picUrl: string
}