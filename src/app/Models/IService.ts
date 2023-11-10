import { IPromoCode } from "./IPromoCode"

export interface IService {
    id: number,
    userId: string,
    vendorID: number,
    title: string,
    description: string,
    price: number,
    serviceAttachments: IServiceAttachment[]
    promoCode: IPromoCode
}

export interface IServiceAttachment {
    id: number,
    serviceID: number,
    attachmentUrl: string
}

export interface IServiceAttachmentCustom {
    serviceId: number,
    attachmentUrl: string,
    userId: string,
    vendorId: number
}
