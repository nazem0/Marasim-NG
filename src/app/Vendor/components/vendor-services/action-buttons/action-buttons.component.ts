import { Component, Input } from '@angular/core';
import { IService } from 'src/app/Models/IService';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent {
@Input() service:IService|null=null;
}
