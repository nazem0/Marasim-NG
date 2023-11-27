import { IVendorMinInfo } from "./IVendor"
import { Payment } from "./Payment"

export interface Withdrawal {
    id: number,
    instaPay: string,
    dateTime: string,
    isConfirmed: boolean,
    vendor: IVendorMinInfo,
    totalWithdrawal: number,
    payments: Payment[]
}