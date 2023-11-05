import { CookieService } from 'ngx-cookie-service';
import { UserService } from './../../../Services/User.service';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewUserProfileComponent {
  User : {name:string,picUrl:string} | null = null;
  constructor(private UserService:UserService, private CookieService:CookieService){}
  ngOnInit(){
    console.log(this.CookieService.get("Id"))
    this.UserService.getByID(this.CookieService.get("Id")).subscribe((response)=>{
      console.log(response)
    });
  }
}
