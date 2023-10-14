import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-vendor-card',
  templateUrl: './vendor-card.component.html',
  styleUrls: ['./vendor-card.component.css']
})
export class VendorCardComponent {
@Input() vendor:IUser|null = null
}
