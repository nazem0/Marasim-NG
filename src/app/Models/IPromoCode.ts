export interface IPromoCode {
  id: number;
  code: string;
  count: number;
  discount: number;
  limit: number;
  serviceId: number;
  startDate: Date;
  expirationDate: Date;
}
