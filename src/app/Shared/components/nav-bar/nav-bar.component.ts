import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent   {
  isLogged:boolean=false;
  constructor(private AuthService:AuthService){}
  ngOnInit(){
    this.isLogged=this.AuthService.loggedIn;
  }
}
