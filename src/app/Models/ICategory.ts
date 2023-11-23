import { IVendor } from "./IVendor"

export interface ICategory {
  id: number,
  name: string,
  vendors: IVendor[]
}

export interface CategoryName {
  id:number
  name:string
}
