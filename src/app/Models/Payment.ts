import { UserMinInfo } from "./IUser";
import { AdminReservation } from "./Reservation";

export interface Payment {
    instaPay: string,
    amount: number,
    dateTime:string,
    reservation: AdminReservation
}

export interface VendorPayment{
    userId: string;
    serviceTitle: string;
    amount: number;
    dateTime: string;
    user: UserMinInfo;
}