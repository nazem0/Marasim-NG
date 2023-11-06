export interface IVendor {
    userID: number,
    summary: string,
    latitude: number,
    longitude: number,
    adddress: string
    categoryId: number,
    externalUrl: string,
    id: number,
    user: {
        name: string,
        picUrl: string,
        gender: boolean,
        nationalID: number
    }
}

