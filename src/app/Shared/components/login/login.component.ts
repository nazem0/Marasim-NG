import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/Auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { Router } from '@angular/router';

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
    private CookieService:CookieService) {
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
    this.data.append('Email', this.LoginForm.get('Email')?.value);
    this.data.append('Password', this.LoginForm.get('Password')?.value);
    this.data.append('RememberMe', this.LoginForm.get('RememberMe')?.value);
    if(this.LoginForm.get('RememberMe')?.value){

    }
    let x : Subscription=this.AuthService.login(this.data).subscribe({
      next:(response)=>{
        console.log(response);
        let LoginResponse = response as LoginResponse;
        // 4 days, then cookie will expire
        this.CookieService.set('Marasim-Login-Token',LoginResponse.token,4)
        this.Router.navigate(["/"]);
      },
      error:()=>{
        this.LoginError = "البريد او كلمة المرور غير صحيح"
      },
      complete:()=>x.unsubscribe()
    });
    

  }
}

interface LoginResponse{
  token:string
}