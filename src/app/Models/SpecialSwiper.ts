export interface SpecialSwiper {
    snapGrid: any;
    activeIndex: number;
    el: HTMLElement;
    slides: HTMLElement[];
    size: number;
    touches: {
      currentX: number;
      startX: number;
      currentY: number;
      startY: number;
    };
    params: {
      containerModifierClass: string;
      effect: string;
      longSwipesRatio: number;
      loop: boolean;
      // Add other parameters as needed
    };
    originalParams: {
      // Define the original parameters
    };
    classNames: string[];
    animating: boolean;
    slideNext(): void;
    emit(event: string, data: any): void;
    setTranslate(translate: number): void;
    tinder:any;
    // Add other methods and properties as needed
  }