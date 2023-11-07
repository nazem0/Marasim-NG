import { CookieService } from 'ngx-cookie-service';
import { Reservation } from 'src/app/Models/Reservation';
import { ReservationService } from './../../../Services/Reservation.service';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-pending',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  activeTab: string = 'المعلقـة';
  apiUrl=environment.serverUrl;
  PendingReservations:Reservation[]|null = null;
  AcceptedReservations:Reservation[]|null = null;
  RejectedReservations:Reservation[]|null = null;
  constructor(
    private ReservationService:ReservationService,
    private CookieService:CookieService
    ){}
  ngOnInit(){
    this.ReservationService.GetPendingByUserId(this.CookieService.get("Id")).subscribe({
      next:(response)=>{
        this.PendingReservations=response
        console.log(this.PendingReservations);
      }
    })
    this.ReservationService.GetAcceptedByUserId(this.CookieService.get("Id")).subscribe({
      next:(response)=>{
        this.AcceptedReservations=response
        console.log(this.AcceptedReservations);
      }
    })
    this.ReservationService.GetRejectedByUserId(this.CookieService.get("Id")).subscribe({
      next:(response)=>{
        this.RejectedReservations=response
        console.log(this.RejectedReservations);
      }
    })
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  
}
