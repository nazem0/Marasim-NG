import Swiper from "swiper";

export interface SpecialSwiper extends Swiper {
    size: number;
    params: {
      containerModifierClass: string;
      effect: string;
      longSwipesRatio: number;
      loop: boolean;
      // Add other parameters as needed
    };
    classNames: string[];
    emit(event: string, data: any): void;
    tinder:any;
    // Add other methods and properties as needed
  }