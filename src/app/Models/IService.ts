import { IServiceAttachment } from "./IServiceAttachment"

export interface IService {


    id: number,
    vendorId: number,
    title:string,
    description:string,
    price: number,
    street: string,
    district: string,
    governance: string
    serviceAttachments?:IServiceAttachment[]

}
