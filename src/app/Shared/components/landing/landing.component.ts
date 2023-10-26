import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit, AfterViewInit {





  isLogged: boolean = this.AuthService.loggedIn;
  constructor(private AuthService: AuthService) { }
  ngOnInit() {
    console.log(this.isLogged)
    this.isLogged = this.AuthService.loggedIn;
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





}

