import { UserMinInfo } from "./IUser";
import { IVendorMinInfo } from "./IVendor";
import { AdminReservation } from "./Reservation";

export interface Payment {
    instaPay: string,
    dateTime:string,
    reservation: AdminReservation
}