import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRegisterUserViewModel } from 'src/app/Models/IRegisterModel';
import { IUser } from 'src/app/Models/IUser';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { RegisterService } from 'src/app/Services/Register.service';
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
  constructor(private ScrollReveal: ScrollRevealService, private builder: FormBuilder, private RegisterService: RegisterService) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      Name: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required]],
      ConfirmPassword: [null, [Validators.required]],
      PhoneNumber: [null, [Validators.required, Validators.minLength(11)]],
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
    this.data.append('Name',this.registerForm.get('Name')?.value);
    this.data.append('Email',this.registerForm.get('Email')?.value);
    this.data.append('Password',this.registerForm.get('Password')?.value);
    this.data.append('ConfirmPassword',this.registerForm.get('ConfirmPassword')?.value);
    this.data.append('PhoneNumber',this.registerForm.get('PhoneNumber')?.value);
    this.data.append('NationalID',this.registerForm.get('NationalID')?.value);
    this.data.append('Gender',this.registerForm.get('Gender')?.value);
    // this.registerForm.get('Picture')?.updateValueAndValidity();
    this.data.append('Picture',this.UploadPic?.nativeElement.files[0]);
    this.data.forEach(i => console.log(i));
    // console.log(this.data);
    this.RegisterService.registerUser(this.data).subscribe(
      (response) => console.log(response),
      (error) => {
        console.log(error.message);
      }
    );
  }

}