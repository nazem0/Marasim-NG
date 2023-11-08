import { ActivatedRoute } from '@angular/router';
import { ReservationService } from 'src/app/Services/Reservation.service';
import { Component } from '@angular/core';
import { CheckoutReservation } from 'src/app/Models/Reservation';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  apiUrl = environment.serverUrl;
  Reservation: CheckoutReservation | null = null;
  constructor(
    private ReservationService: ReservationService,
    private ActivatedRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    let ReservationIdString = this.ActivatedRoute.snapshot.paramMap.get("id");
    if (ReservationIdString != null) {
      this.ReservationService.CheckoutReservationById(parseInt(ReservationIdString)).subscribe(
        {
          next:(response)=>this.Reservation=response
        }
      )
    }
  }
}
