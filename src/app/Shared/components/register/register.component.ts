import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterUserViewModel } from 'src/app/Models/IRegisterModel';
import { IUser } from 'src/app/Models/IUser';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { RegisterService } from 'src/app/Services/Register.service';
import { RegisterationErrorResponse } from 'src/app/Models/RegisterationErrorResponse';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  @ViewChild("UploadPic") UploadPic: ElementRef | null = null;
  PicName: string = "";

  registerForm: FormGroup;
  data: FormData;
  PasswordRegEx = (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
  PhoneNumberRegEx = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
  ErrorResponse: RegisterationErrorResponse | null = null;

  constructor(private ScrollReveal: ScrollRevealService, private builder: FormBuilder, private RegisterService: RegisterService,private Router:Router) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      Name: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required,Validators.pattern(this.PasswordRegEx)]],
      ConfirmPassword: [null, [Validators.required]],
      PhoneNumber: [null, [Validators.required, Validators.minLength(11),Validators.pattern(this.PhoneNumberRegEx)]],
      NationalID: [null, [Validators.required, Validators.minLength(11)]],
      Gender: [null, [Validators.required]],
      Picture: [null, [Validators.required]]
    })
  }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.rightSide', { origin: 'right', duration: 1200, distance: '500px' })
    sr.reveal('.leftSide', { origin: 'left', duration: 1200, distance: '500px' })
  }

  ngAfterViewInit(): void {
    this.UploadPic?.nativeElement.addEventListener('change', (e: any) => {
      this.PicName = e.target?.files[0].name;
    });

  }
  register() {
    if(this.registerForm.valid)
    {
      this.data.set('Name', this.registerForm.get('Name')?.value);
      this.data.set('Email', this.registerForm.get('Email')?.value);
      this.data.set('Password', this.registerForm.get('Password')?.value);
      this.data.set('ConfirmPassword', this.registerForm.get('ConfirmPassword')?.value);
      this.data.set('PhoneNumber', this.registerForm.get('PhoneNumber')?.value);
      this.data.set('NationalID', this.registerForm.get('NationalID')?.value);
      this.data.set('Gender', this.registerForm.get('Gender')?.value);
      this.data.set('Picture', this.UploadPic?.nativeElement.files[0]);
      this.RegisterService.registerUser(this.data).subscribe({
        next: (response) => {
          console.log(response)
          this.Router.navigate(["/login"]);
        },
        error: (error) => {
          console.log(this.data)
          console.log(error);
        }
      })
    }
  }

}


