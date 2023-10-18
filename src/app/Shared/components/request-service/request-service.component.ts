import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/Models/IService';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent {
  @Input() service: IService | null = null;
  requestServiceForm: FormGroup;
  data: FormData;

  constructor(private builder: FormBuilder) {
    this.data = new FormData()
    this.requestServiceForm = this.builder.group({
      discount: [null, [Validators.required]],
      date: [null, [Validators.required]],
    })
  }

  request() {
    console.log(this.requestServiceForm.value)
    //////API (BOOKING REQUEST) (use FormData to collect data)
  }
}
