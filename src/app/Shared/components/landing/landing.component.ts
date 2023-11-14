import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { IVendorMidInfo } from 'src/app/Models/IVendor';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {
  slides: IVendorMidInfo[] = [];

  isLogged: boolean = this.AuthService.loggedIn;
  constructor(
    private AuthService: AuthService,
    private VendorService: VendorService,
    private ScrollReveal : ScrollRevealService) { }
  ngOnInit() {
    console.log(this.isLogged)
    this.isLogged = this.AuthService.loggedIn;
    this.VendorService.GetVendorsMidInfo().subscribe((result) => this.slides = result)

    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.map-img', { origin: 'left', duration: 2000, distance: '500px' })
    sr.reveal('.txt1', { origin: 'right', duration: 2000, distance: '500px' })
    sr.reveal('.txt2', { origin: 'right', duration: 2100, distance: '500px' })
    sr.reveal('.txt3', { origin: 'right', duration: 2200, distance: '500px' })
    sr.reveal('.txt4', { origin: 'right', duration: 2300, distance: '500px' })
    sr.reveal('.ic1', { origin: 'right', duration: 2300, distance: '500px' })
    sr.reveal('.ic2' , { origin: 'right', duration: 2400, distance: '500px' })
    sr.reveal('.ic3', { origin: 'right', duration: 2500, distance: '500px' })
    sr.reveal('.ic4', { origin: 'right', duration: 2600, distance: '500px' })
    sr.reveal('.cd1' , { origin: 'left', duration: 2000, distance: '500px' })
    sr.reveal('.cd2', { origin: 'left', duration: 2100, distance: '500px' })
    sr.reveal('.cd3', { origin: 'left', duration: 2200, distance: '500px' })
  }
  ngAfterViewInit(): void {
    const nav = document.querySelector('nav') as HTMLElement;
    window.addEventListener('scroll', function () {
      if (window.scrollY > window.innerHeight - 100) {
        nav.classList.add('bg-dark', 'shadow', "fixed-top");
        nav.classList.remove("position-absolute", "top-0")
      } else {
        nav.classList.remove('bg-dark', 'shadow', "fixed-top");
        nav.classList.add("position-absolute", "top-0")
      }
    } as EventListenerOrEventListenerObject);
  }



  logout() {
    this.AuthService.loggedIn = !this.AuthService.loggedIn;
    this.isLogged = this.AuthService.loggedIn;
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
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const section = document.querySelector('.section-box') as HTMLElement;
    // const sectionTop = section.getBoundingClientRect().top;

    // if (sectionTop <= 0) {
    //   this.divPosition = 'static'; // Switch to normal position
    // } else {
    //   this.divPosition = 'fixed'; // Stick to the bottom
    // }
  }
}

