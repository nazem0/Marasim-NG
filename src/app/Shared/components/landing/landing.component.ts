import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { IVendorMidInfo } from 'src/app/Models/IVendor';
import { eventListeners } from '@popperjs/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {
  slides: IVendorMidInfo[] = [];
  constructor(
    public AuthService: AuthService,
    private VendorService: VendorService,
    private ScrollReveal: ScrollRevealService) { }

  ngOnInit() {
    this.VendorService.GetIntOfVendors()
      .subscribe({
        next: (result) => {
          this.slides = result
        },
        error: (error) => {
          console.log(error)
        }
      })

    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.map-img', { origin: 'left', duration: 2000, distance: '500px' })
    sr.reveal('.txt0', { origin: 'right', duration: 2100, distance: '500px' })
    sr.reveal('.txt1', { origin: 'right', duration: 2100, distance: '500px' })
    sr.reveal('.txt2', { origin: 'right', duration: 2200, distance: '500px' })
    sr.reveal('.txt3', { origin: 'right', duration: 2300, distance: '500px' })
    sr.reveal('.txt4', { origin: 'right', duration: 2400, distance: '500px' })
    sr.reveal('.ic1', { origin: 'right', duration: 2500, distance: '500px' })
    sr.reveal('.ic2' , { origin: 'right', duration: 2600, distance: '500px' })
    sr.reveal('.ic3', { origin: 'right', duration: 2700, distance: '500px' })
    sr.reveal('.ic4', { origin: 'right', duration: 2800, distance: '500px' })
    sr.reveal('.cd1' , { origin: 'left', duration: 2100, distance: '500px' })
    sr.reveal('.cd2', { origin: 'left', duration: 2200, distance: '500px' })
    sr.reveal('.cd3', { origin: 'left', duration: 2300, distance: '500px' })
  }
  ngAfterViewInit(): void {
    let nav = document.querySelector('.navNotLoggedIn');
    if (nav) {
      nav.classList.remove("bg-dark")
      window.addEventListener("scroll", this.scrollHandler);
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener("scroll", this.scrollHandler)
  }
  scrollHandler(): void {
    let nav = document.querySelector('nav');
    if (nav) {
      if (window.scrollY > window.innerHeight - 100) {
        nav.classList.add('bg-dark', 'shadow', 'fixed-top');
        nav.classList.remove('position-absolute', 'top-0');
      } else {
        nav.classList.remove('bg-dark', 'shadow', 'fixed-top');
        nav.classList.add('position-absolute', 'top-0');
      }
    }
  }
  logout() {
    this.AuthService.logout();
  }

  go() {
    document.getElementById('sec2')?.scrollIntoView();

  }

  go2() {
    document.getElementById('map')?.scrollIntoView();

  }

  divPosition: string = 'fixed';


  // HELP ME // HELP ME // HELP ME // HELP ME // HELP ME
  // HELP ME // HELP ME // HELP ME // HELP ME // HELP ME
  // HELP ME // HELP ME // HELP ME // HELP ME // HELP ME
  // @HostListener('window:scroll', ['$event'])
  // onScroll() {
  //   const section = document.querySelector('.section-box') as HTMLElement;
  //   const sectionTop = section.getBoundingClientRect().top;

  //   if (sectionTop <= 0) {
  //     this.divPosition = 'static'; // Switch to normal position
  //   } else {
  //     this.divPosition = 'fixed'; // Stick to the bottom
  //   }
  // }
} 