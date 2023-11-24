import { IService } from "./IService";

export interface GeneratePackage {
    budget: number;
    categoryPrice: CategoryPrice[];
    govId: number;
    cityId?: number;
    rate?: number;
}

export interface CategoryPrice {
    categoryId: number;
    price: number;
}

export interface GeneratedPackage {
    id: number;
    name: string;
    picUrl: string;
    userId: string;
    summary: string;
    city: string;
    district: string;
    governorate: string;
    street: string;
    category: string;
    services: IService[] | null;
}