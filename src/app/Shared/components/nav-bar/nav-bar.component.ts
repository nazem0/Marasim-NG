import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent   {
  isLogged:boolean=this.AuthService.loggedIn;
  constructor(private AuthService:AuthService){}
  ngOnInit(){
    console.log(this.isLogged)
    this.isLogged=this.AuthService.loggedIn;
  }
  logout(){
    this.AuthService.loggedIn=!this.AuthService.loggedIn;
    this.isLogged=this.AuthService.loggedIn;
  }
}
