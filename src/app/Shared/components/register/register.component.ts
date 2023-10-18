import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  data: FormData;
  constructor(private ScrollReveal: ScrollRevealService, private builder: FormBuilder) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      SSN: [null, [Validators.required]],
      gender: [null, [Validators.required]],
    })
  }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.rightSide', { origin: 'right', duration: 1200, distance: '500px' })
    sr.reveal('.leftSide', { origin: 'left', duration: 1200, distance: '500px' })
  }

  register() {
    console.log(this.registerForm.value)
    //////API (BOOKING REQUEST) (use FormData to collect data)
  }
}
