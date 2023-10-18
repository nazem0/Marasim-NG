import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
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
  constructor(private ScrollReveal: ScrollRevealService, private builder: FormBuilder) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      name: [null, [Validators.required, Validators.minLength(2)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]], // Pattern for password 
      phoneNumber: [null, [Validators.required, Validators.minLength(11)]],
      SSN: [null, [Validators.required, Validators.minLength(11)]],
      gender: [null, [Validators.required]],
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
    console.log(this.registerForm.value)
    //////API (BOOKING REQUEST) (use FormData to collect data)
  }

}