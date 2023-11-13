import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  data: FormData;
  LoginError : string |  null = null;
  constructor(
    private Router : Router,
    private ScrollReveal: ScrollRevealService,
    private Builder: FormBuilder,
    private AuthService: AuthService,
    private Toastr:ToastrService) {
    this.data = new FormData();
    this.LoginForm = this.Builder.group({
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required]],
      RememberMe: [false, [Validators.required]]
    })
  }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.rightSide', { origin: 'right', duration: 1200, distance: '500px' })
    sr.reveal('.leftSide', { origin: 'left', duration: 1200, distance: '500px' })
  }
  async Login() {
    this.data.set('Email', this.LoginForm.get('Email')?.value);
    this.data.set('Password', this.LoginForm.get('Password')?.value);
    this.data.set('RememberMe', this.LoginForm.get('RememberMe')?.value);
    if(this.LoginForm.get('RememberMe')?.value){

    }
    let x : Subscription=this.AuthService.login(this.data).subscribe({
      next:(response)=>{
        console.log(response);
        let LoginResponse = response as LoginResponse;
        console.log(LoginResponse);
        this.AuthService.addCookies(LoginResponse.token,LoginResponse.profilePicture,LoginResponse.role,LoginResponse.name,LoginResponse.id,LoginResponse.vendorId);
        this.Router.navigate(["/home"]);
      },
      error:()=>{
        this.Toastr.error("البريد او كلمة المرور غير صحيح");
      },
      complete:()=>x.unsubscribe()
    });
    

  }
}

interface LoginResponse{
  token:string
  profilePicture:string
  role:string
  name:string
  id:string
  vendorId?:string
}