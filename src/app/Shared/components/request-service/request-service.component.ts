import { CookieService } from 'ngx-cookie-service';
import { ReservationService } from './../../../Services/Reservation.service';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IService } from 'src/app/Models/IService';
import { error } from 'jquery';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent {
  @Input() service: IService | null = null;
  requestServiceForm: FormGroup;
  data: FormData;

  constructor(private builder: FormBuilder, private ReservationService: ReservationService, private CookieService: CookieService) {
    this.data = new FormData()
    this.requestServiceForm = this.builder.group({
      PromoCode: [null],
      DateTime: [null, [Validators.required]],
    })
  }

  request() {
    if (this.requestServiceForm.valid) {
      console.log("valid");
      this.data.set("UserId", this.CookieService.get("Id"));
      this.data.set("ServiceId", this.service!.id.toString())
      this.data.set("PromoCode", this.requestServiceForm.get("PromoCode")?.value)
      this.data.set("DateTime",this.requestServiceForm.get("DateTime")?.value)
      this.ReservationService.addReservation(this.data).subscribe(
        {
          next:(respone)=>console.log(respone),
          error:(error)=>console.log(error)
        }
      )
    }
  }
}
