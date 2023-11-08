import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { Component } from '@angular/core';
import { CheckoutReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  apiUrl = environment.serverUrl;
  checkoutForm: FormGroup;
  data: FormData;
  Reservation: CheckoutReservation | null = null;
  ReservationId = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!)
  constructor(
    private ReservationService: ReservationService,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.data = new FormData();
    this.checkoutForm = new FormGroup({
      InstaPay: new FormControl('', [Validators.required]),
      ReservationId: new FormControl(this.ReservationId)
    });
  }
  ngOnInit() {
    this.ReservationService.CheckoutReservationById(this.ReservationId).subscribe(
      {
        next: (response) => this.Reservation = response
      }
    )
  }

  submitForm() {
    if(this.checkoutForm.valid){
      this.data.set('InstaPay', this.checkoutForm.get('InstaPay')?.value);
      this.data.set('ReservationId', this.checkoutForm.get('ReservationId')?.value);
      console.log(this.checkoutForm.value);
    }
  }
}
