export interface GeneratePackage {
    budget: number;
    categoryPrice: CategoryPrice[];
    govId: number;
    cityId: number;
}

export interface CategoryPrice {
    categoryId: number;
    percentage: number;
}