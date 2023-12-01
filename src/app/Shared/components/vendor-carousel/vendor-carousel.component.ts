import { AfterViewInit, Component, ElementRef, HostBinding, Input } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { environment } from 'src/environments/environment.development';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-vendor-carousel',
  templateUrl: './vendor-carousel.component.html',
  styleUrls: ['./vendor-carousel.component.css']
})
export class VendorCarouselComponent implements AfterViewInit {
  apiUrl = environment.serverUrl;
  @Input() @HostBinding('style.--slide-width') slideWidth = '520px';
  @Input() @HostBinding('style.--slide-height') slideHeight = '380px';
  @Input() slides: IVendorMidInfo[] = [];

  constructor(public UserService: UserService) { }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay, function ({ swiper: e, on: r }: { swiper: any, on: any }) {
        r('beforeInit', () => {
          if (e.params.effect !== 'carousel') return;

          // Add CSS classes and configuration for the carousel effect
          e.classNames.push(`${e.params.containerModifierClass}carousel`);
          const carouselConfig: Record<string, any> = { watchSlidesProgress: true, centeredSlides: true };
          Object.assign(e.params, carouselConfig);
          Object.assign(e.originalParams, carouselConfig);
        });

        r('progress', () => {
          if (e.params.effect !== 'carousel') return;

          const numSlides = e.slides.length;
          for (let slideIndex = 0; slideIndex < numSlides; slideIndex++) {
            const slide = e.slides[slideIndex];
            const progress = e.slides[slideIndex].progress;
            const absoluteProgress = Math.abs(progress);
            let scale = 1;

            if (absoluteProgress > 1) {
              scale = 0.3 * (absoluteProgress - 1) + 1;
            }

            const opacityElements = slide.querySelectorAll('.swiper-carousel-animate-opacity');
            const translateX = progress * scale * 50 * (e.rtlTranslate ? -1 : 1) + '%';
            const scaleValue = 1 - 0.2 * absoluteProgress;
            const zIndex = numSlides - Math.abs(Math.round(progress));

            slide.style.transform = `translateX(${translateX}) scale(${scaleValue})`;
            slide.style.zIndex = zIndex;
            slide.style.opacity = absoluteProgress > 3 ? 0 : 1;

            opacityElements.forEach((element: HTMLElement) => {
              element.style.opacity = (1 - absoluteProgress / 3).toString();
            });
          }
        });

        r('setTransition', (transitionDuration: string, s: number) => {
          if (e.params.effect === 'carousel') {
            for (let slideIndex = 0; slideIndex < e.slides.length; slideIndex++) {
              const slide = e.slides[slideIndex];
              const opacityElements = slide.querySelectorAll('.swiper-carousel-animate-opacity');
              slide.style.transitionDuration = `${s}ms`;

              opacityElements.forEach((element: HTMLElement) => {
                element.style.transitionDuration = `${s}ms`;
              });
            }
          }
        });
      }],
      effect: "carousel",
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      // Because of rtl dir i had to replace the prev and next buttons :p
      // navigation: { nextEl: ".swiper-button-prev", prevEl: ".swiper-button-next" },
      pagination: { el: ".swiper-pagination" },
      autoplay: { delay: 3000 },

    });
  }
}
