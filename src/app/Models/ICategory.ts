import { IVendor } from "./IVendor"

export interface ICategory {
  id: number,
  name: string,
  vendors: IVendor[]
}