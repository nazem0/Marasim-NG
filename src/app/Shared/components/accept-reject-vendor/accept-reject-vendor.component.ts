import { AfterViewInit, Component } from '@angular/core';
import { SpecialSwiper } from 'src/app/Models/SpecialSwiper';
import Swiper from 'swiper';
@Component({
  selector: 'app-accept-reject-vendor',
  templateUrl: './accept-reject-vendor.component.html',
  styleUrls: ['./effect.css','./accept-reject-vendor.component.css']
})

export class AcceptRejectVendorComponent implements AfterViewInit {

  
  tinderEffect({ swiper, on }: { swiper: SpecialSwiper; on: (event: string, handler: Function) => void }): void {
    let r: HTMLElement, s: boolean|number, n: boolean, i: number, o: boolean, a: boolean, c: number;
  
    swiper.tinder = {
      no() {
        swiper.touches.currentX = 0;
        swiper.touches.startX = swiper.size / 2;
        const t = swiper.slides[swiper.activeIndex];
        t.style.transformOrigin = "center bottom";
        t.style.transformOrigin = "bottom";
        swiper.slideNext();
        swiper.animating = false;
      },
      yes() {
        swiper.touches.currentX = swiper.size;
        swiper.touches.startX = swiper.size / 2;
        const t = swiper.slides[swiper.activeIndex];
        t.style.transform = 'translateY(0)';
        t.style.transformOrigin = "center bottom";
        t.style.transformOrigin = "bottom";
        swiper.slideNext();
        swiper.animating = false;
      },
    };
  
    const d = (element: HTMLElement | null, callback: (element: HTMLElement) => void) => {
      element && callback(element);
    };
  
    const l = (transformOrigin: string, transformOriginValue: string) => {
      swiper.slides.forEach((slide, index) => {
        if (index < swiper.activeIndex) {
          slide.style.transformOrigin = transformOrigin;
          slide.style.transformOrigin = transformOriginValue;
        }
      });
    };
  
    const u = (
      labelElements: HTMLElement,
      longSwipesRatio: number,
      slideProgress: number,
      isAnimating: boolean,
      isLongSwipe: boolean
    ) => {
      if (n || isLongSwipe) {
        if (isAnimating) {
          d(document.querySelector(".swiper-tinder-button-yes"), (element) =>
            element.classList.add("swiper-tinder-button-hidden")
          );
          d(document.querySelector(".swiper-tinder-button-no"), (element) =>
            element.classList.add("swiper-tinder-button-hidden")
          );
        } else {
          const opacity = Math.max(Math.min(10 * longSwipesRatio - 0.5, 1), 0);
          d(labelElements.querySelector(".swiper-tinder-label-yes"), (element) =>
            (element.style.opacity = slideProgress > 0 ? opacity.toString() : "0")
          );
          d(labelElements.querySelector(".swiper-tinder-label-no"), (element) =>
            (element.style.opacity = slideProgress < 0 ? opacity.toString() : "0")
          );
          d(document.querySelector(".swiper-tinder-button-yes"), (element) =>
            element.classList.remove("swiper-tinder-button-hidden")
          );
          d(document.querySelector(".swiper-tinder-button-no"), (element) =>
            element.classList.remove("swiper-tinder-button-hidden")
          );
          if (longSwipesRatio >= swiper.params.longSwipesRatio && !isAnimating) {
            if (slideProgress > 0) {
              d(document.querySelector(".swiper-tinder-button-yes"), (element) =>
                element.classList.add("swiper-tinder-button-active")
              );
              d(document.querySelector(".swiper-tinder-button-no"), (element) =>
                element.classList.remove("swiper-tinder-button-active")
              );
            } else {
              d(document.querySelector(".swiper-tinder-button-yes"), (element) =>
                element.classList.remove("swiper-tinder-button-active")
              );
              d(document.querySelector(".swiper-tinder-button-no"), (element) =>
                element.classList.add("swiper-tinder-button-active")
              );
            }
          } else {
            d(document.querySelector(".swiper-tinder-button-yes"), (element) =>
              element.classList.remove("swiper-tinder-button-active")
            );
            d(document.querySelector(".swiper-tinder-button-no"), (element) =>
              element.classList.remove("swiper-tinder-button-active")
            );
          }
        }
      }
    };
  
    on("beforeInit", () => {
      if (swiper.params.effect !== "tinder") return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}tinder`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      const swiperParams = {
        watchSlidesProgress: true,
        virtualTranslate: true,
        longSwipesRatio: 0.1,
        oneWayMovement: true,
        // Add other parameters as needed
      };
      Object.assign(swiper.params, swiperParams);
      Object.assign(swiper.originalParams, swiperParams);
    });
  
    on("init", () => {
      if (swiper.el && swiper.el.addEventListener) {
        swiper.el.addEventListener("click", (event) => {
          const element = event.target as Element;
          const closestAncestorYes = element.closest('.swiper-tinder-button-yes');
          const closestAncestorNo = element.closest('.swiper-tinder-button-yes');
          if (closestAncestorYes) {
            swiper.tinder.yes();
          } else if (closestAncestorNo) {
            swiper.tinder.no();
          }
        });
      }
    });
    on("touchStart", (event: any, touchData: { target?: any; clientY?: any; }) => {
      if (swiper.params.effect !== "tinder") return;
      n = true;
      o = true;
      a = true;
      const { clientY: clientY } = touchData;
      const { top: top, height: height } = swiper.el.getBoundingClientRect();
      s = false;
      const targetSlide = touchData.target.closest(".swiper-slide, swiper-slide");
      if (targetSlide && targetSlide.classList.contains("swiper-slide-active")) {
        r = targetSlide;
        i = swiper.activeIndex;
        if (clientY - top > height / 2) {
          l("center top", "top");
        } else {
          l("center bottom", "bottom");
        }
      }
    });
  
    on("touchMove", (event: { touches: { currentY: number; startY: number; currentX: number; startX: number; }; }) => {
      if (swiper.params.effect !== "tinder") return;
      const deltaY = event.touches.currentY - event.touches.startY;
      const deltaX = event.touches.currentX - event.touches.startX;
      s = Math.abs(deltaX);
      if (r) {
        r.style.transform = `translateY(${deltaY})`;
      }
    });
  
    on("touchEnd", () => {
      if (swiper.params.effect === "tinder") {
        s = false;
        o = false;
        requestAnimationFrame(() => {
          n = false;
        });
      }
    });
  
    on("setTransition", (event: { slides: any[]; }, duration: any) => {
      if (swiper.params.effect === "tinder") {
        event.slides.forEach((slide) => {
          slide.style.transitionDuration = `${duration}ms`;
          slide.querySelectorAll(".swiper-tinder-label").forEach((label: { style: { transitionDuration: string; opacity: number; }; }) => {
            label.style.transitionDuration = `${duration}ms`;
            if (slide.progress <= 0) {
              label.style.opacity = 0;
            }
          });
        });
        requestAnimationFrame(() => {
          d(document.querySelector(".swiper-tinder-button-yes"), (element) =>
            element.classList.remove("swiper-tinder-button-active")
          );
          d(document.querySelector(".swiper-tinder-button-no"), (element) =>
            element.classList.remove("swiper-tinder-button-active")
          );
        });
      }
    });
  
    on("slideChange", () => {
      if (swiper.activeIndex === swiper.slides.length - 1 && !swiper.params.loop) {
        const lastSlide = swiper.slides[swiper.slides.length - 1] as any;
        const slideProgress = lastSlide.progress;
        const sanitizedProgress = Math.min(Math.max(slideProgress, -2), 2);
        const deltaX = swiper.touches.currentX - swiper.touches.startX;
        u(lastSlide, sanitizedProgress, deltaX, true, true);
      }
      if (!o) {
        a = false;
        swiper.emit("tinderSwipe", c < 0 ? "left" : "right");
      }
    });
  
    on("transitionStart", () => {
      if (a && swiper.activeIndex !== i) {
        a = false;
        swiper.emit("tinderSwipe", c < 0 ? "left" : "right");
      }
    });
  
    on("setTranslate", (event: any, translate: number) => {
      if (swiper.params.effect !== "tinder") return;
      if (s) return;
      if (o && typeof i !== "undefined" && typeof swiper.snapGrid[i + 1] !== "undefined") {
        const snapGridValue = Math.abs(swiper.snapGrid[i]);
        const snapGridSize = Math.abs(snapGridValue + swiper.size) - 8;
        if (Math.abs(translate) > snapGridSize) {
          return void swiper.setTranslate(-snapGridSize);
        }
      }
      const deltaX = swiper.touches.currentX - swiper.touches.startX;
      c = deltaX;
      const { slides: slides } = swiper;
      const isLastSlide = swiper.activeIndex === slides.length - 1 && !swiper.params.loop;
      slides.forEach((slide:any, index) => {
        const slideProgress = slide.progress;
        const sanitizedProgress = Math.min(Math.max(slideProgress, -2), 2);
        let slideOffset = -slide.swiperSlideOffset;
        let translateY = 0;
        let zTranslate = 100 * sanitizedProgress;
        let rotateZ = 0;
        let opacity = 1;
        if (sanitizedProgress > 0 || (sanitizedProgress === 0 && n)) {
          zTranslate = 0;
          rotateZ = 45 * sanitizedProgress * (deltaX < 0 ? -1 : 1);
          slideOffset = swiper.size * (deltaX < 0 ? -1 : 1) * sanitizedProgress + slideOffset;
          if (typeof slide.translateY !== "undefined") {
            translateY = slide.translateY;
          }
          // is long swipe boolean
          u(slide, sanitizedProgress, deltaX, isLastSlide,false);
        }
        if (slide.transformOrigin === "top") {
          rotateZ = -rotateZ;
        }
        if (sanitizedProgress > 1) {
          opacity = 5 * (1.2 - sanitizedProgress);
        }
        const transformStyle = `
          translate3d(${slideOffset}px, ${translateY}px, ${zTranslate}px)
          rotateZ(${rotateZ}deg)
        `;
        if (sanitizedProgress >= 1 && !slide.tinderTransform) {
          slide.tinderTransform = transformStyle;
          slide.tinderTransformSlideIndex = index;
        }
        if ((slide.tinderTransform && slide.tinderTransformSlideIndex !== index) || !n) {
          slide.tinderTransform = "";
        }
        slide.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
        slide.style.transform = slide.tinderTransform || transformStyle;
        slide.style.opacity = opacity;
      });
    });
  }
  ngAfterViewInit(): void {
    let swiper = new Swiper(".swiper",
    {
        modules: [this.tinderEffect], effect: "tinder", grabCursor: !0
    });  
  }

}
