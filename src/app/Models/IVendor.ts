export interface IVendor {
    id: number;
    userId: number;
    categoryId: number;
    summary: string;
    location: {
        lat: number,
        lng: number
    }
}

