import { CookieService } from 'ngx-cookie-service';
import { UserReservation } from 'src/app/Models/Reservation';
import { ReservationService } from './../../../Services/Reservation.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-pending',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  activeTab: string = 'p';
  apiUrl=environment.serverUrl;
  Reservations:UserReservation[]|null = null;
  constructor(
    private ReservationService:ReservationService,
    private CookieService:CookieService
    ){}
  ngOnInit(){
    this.getReservations();
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
    this.getReservations();
  }
  getReservations(){
    this.ReservationService.GetForUserByStatus(this.activeTab).subscribe({
      next:(response)=>{
        this.Reservations=response
        console.log(this.Reservations);
      }
    })
  }
}
