export interface IVendor {
    id:string;
    address: string;
    categoryId: number;
    externalUrl: string | null; 
    gender: boolean;
    latitude: number;
    longitude: number;
    name: string;
    nationalId: string;
    picUrl: string;
    summary: string;
    userId: string;
  }

  export interface VendorMinInfo {
    userId: string;
    id: number;
    name: string;
    picUrl: string;
  }

