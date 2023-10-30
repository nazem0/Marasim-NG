import { IService } from "./IService";
import { IUser } from "./IUser";

export interface IReview {
    id: number,
    userId: string,
    serviceId: number, 
    rate: number,
    message: string,
    dateTime: Date,
    User : IUser,
    Service : IService
  }