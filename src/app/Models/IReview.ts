export interface IReview {
    id: number,
    userId: number,
    serviceId: number, 
    rate: number,
    message: string,
    dateTime: Date
  }