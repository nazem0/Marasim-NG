import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {
  @Input() service: IService | null = null;
  @Output() refresh = new EventEmitter();

  constructor(private ServiceService: ServiceService) { }

  DeleteSrvice() {
    this.ServiceService.DeleteService(this.service?.id!)
      .subscribe({
        next: (data) => {
          console.log("Service Deleted");
          this.refresh.emit();
        },
        error: (error) => {
          console.log(error);
        }
      })
  }
}
