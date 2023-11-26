import { IVendorMinInfo } from "./IVendor"
import { Payment } from "./Payment"

export interface Withdrawal {
    instaPay: string,
    dateTime: string,
    isConfirmed: boolean,
    vendor: IVendorMinInfo,
    payments: Payment[]
}