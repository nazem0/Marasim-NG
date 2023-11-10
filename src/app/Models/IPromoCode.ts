export interface IPromoCode {
  serviceId: number;
  code: string;
  discount: number;
  limit: number;
  count: number;
  startDate: Date;
  expirationDate: Date;
}
