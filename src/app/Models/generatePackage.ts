export interface GeneratePackage {
    budget: number;
    categoryPrice: CategoryPrice[];
    govId: number;
    cityId?: number;
    rate?:number;
}

export interface CategoryPrice {
    categoryId: number;
    percentage: number;
}