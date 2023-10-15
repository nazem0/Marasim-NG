import { IVendor } from "./IVendor"

export interface ICategory {
  id: number,
  name: string,
  photo: string
}


export interface ICategoryWithVendors {
  id: number,
  name: string,
  photo: string,
  vendors: IVendor[]
}