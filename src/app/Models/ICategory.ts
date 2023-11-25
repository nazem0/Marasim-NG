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


export interface CategoryWithMinMaxViewModel {
  id: number;
  name: string;
  min: number;
  max: number;
}
