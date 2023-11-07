export interface IService {
    id: number,
    vendorID: number,
    title: string,
    description: string,
    price: number,
    serviceAttachments: IServiceAttachment[]
}

export interface IServiceAttachment {
    id: number,
    serviceId: number,
    attachmentUrl: string
}
