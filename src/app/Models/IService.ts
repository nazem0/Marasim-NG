import { IPromoCode } from "./IPromoCode"

export interface IService {
    id: number,
    userId: string,
    vendorId: number,
    title: string,
    description: string,
    price: number,
    serviceAttachments: IServiceAttachment[]
    promoCode: IPromoCode
}

export interface IServiceAttachment {
    id: number,
    serviceId: number,
    attachmentUrl: string
}

export interface IServiceMinInfo {
    vendorId: number,
    title: string,
}
export interface IServiceAttachmentCustom {
    serviceId: number,
    attachmentUrl: string,
    userId: string,
    vendorId: number
}
