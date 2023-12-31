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
    private ScrollReveal: ScrollRevealService,
    private Builder: FormBuilder,
    private AuthService: AuthService) {
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
    
    this.AuthService.login(this.data);
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