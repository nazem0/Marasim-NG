import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @Input()
  slides: Array<{ title: string, description: string, image: string }> = [
    {
      title: 'Guardians Of The Galaxy',
      description: 'A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.',
      image: 'https://carousel-slider.uiinitiative.com/images/guardians-of-the-galaxy.jpg'
    },
    {
      title: 'Justice League',
      description: 'Determined to ensure Superman\'s ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.',
      image: 'https://carousel-slider.uiinitiative.com/images/justice-league.jpg'
    },
    {
      title: 'Spider-Man: Far from Home',
      description: 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.',
      image: 'https://carousel-slider.uiinitiative.com/images/spider-man.jpg'
    },
    {
      title: 'The Suicide Squad',
      description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
      image: 'https://carousel-slider.uiinitiative.com/images/suicide-squad.jpg'
    },
    {
      title: 'Thor: Ragnarok',
      description: 'Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.',
      image: 'https://carousel-slider.uiinitiative.com/images/thor-ragnarok.jpg'
    },
    {
      title: 'Doctor Strange',
      description: 'America Chavez and a version of Stephen Strange are chased by a demon in the space between universes while searching for the Book of Vishanti',
      image: 'https://carousel-slider.uiinitiative.com/images/dr-strange.jpg'
    },
    {
      title: 'Eternals',
      description: 'In 5000 BC, ten superpowered Eternals—Ajak, Sersi, Ikaris, Kingo, Sprite, Phastos, Makkari, Druig, Gilgamesh, and Thena—are sent by the Celestial Arishem to Earth on their starship, the Domo, to exterminate the invasive Deviants.',
      image: 'https://carousel-slider.uiinitiative.com/images/eternals.jpg'
    }
  ];

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
      slidesPerView: "auto",
      // Because of rtl dir i had to replace the prev and next buttons :p
      navigation: { nextEl: ".swiper-button-prev", prevEl: ".swiper-button-next" },
      pagination: { el: ".swiper-pagination" },
      autoplay: { delay: 3000 },
    });
  }
}
