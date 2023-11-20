export interface IVendor {
  id: number,
  city: string,
  district: string,
  governorate: string,
  street?: string | null,
  category: string,
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
  phoneNumber: string
}

export interface IVendorMidInfo {
  id: number,
  name: string,
  picUrl: string,
  userId: string,
  summary: string,
  category: string,
  city: string,
  district: string,
  governorate: string,
  street?: string | null,
}

export interface address {
  city: string,
  district: string,
  governorate: string,
  street?: string | null,
}

export interface iVendorCard {
  id: number,
  userId: string,
  name: string,
  picUrl: string,
  summary: string,
  category: string,
  city: string,
  district: string,
  governorate: string,
  street?: string | null,
}