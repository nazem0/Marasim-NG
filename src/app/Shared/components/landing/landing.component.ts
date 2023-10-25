import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {





  isLogged:boolean=this.AuthService.loggedIn;
  constructor(private AuthService:AuthService){;

  const nav = document.querySelector('nav') as HTMLElement;
  window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
      nav.classList.add('bg-dark', 'shadow');
    } else {
      nav.classList.remove('bg-dark', 'shadow');
    }
  } as EventListenerOrEventListenerObject);}
  ngOnInit(){
    console.log(this.isLogged)
    this.isLogged=this.AuthService.loggedIn;
  }
  logout(){
    this.AuthService.loggedIn=!this.AuthService.loggedIn;
    this.isLogged=this.AuthService.loggedIn;
  }





}

