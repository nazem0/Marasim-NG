import { IService } from './IService';
import { UserMinInfo } from './IUser';

export interface IReview {
  id: number,
  serviceId: number,
  serviceTitle: string,
  rate: number,
  message: string,
  dateTime: string,
  user: UserMinInfo,
}

export interface AddReview {
  serviceId: number,
  rate: number,
  message: string,
}

export interface ReviewViewModel {
  dateTime: string,
  message: string,
  rate: number,
}

export interface ReviewList{
  count: number;
  data: IReview[];
  lastPage: number;
  pageIndex: number;
  pageSize: number;
}
