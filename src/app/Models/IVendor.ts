export interface IVendor {
  id: string,
  address: string,
  categoryId: number,
  externalUrl: string | null,
  gender: boolean,
  latitude: number,
  longitude: number,
  name: string,
  nationalId: string,
  picUrl: string,
  summary: string,
  userId: string,
}

export interface IVendorMinInfo {
  userId: string,
  id: number,
  name: string,
  picUrl: string,
}

export interface IVendorMidInfo {
  id: number,
  userId: string,
  name: string,
  picUrl: string,
  summary: string,
  categoryName: string,
}
