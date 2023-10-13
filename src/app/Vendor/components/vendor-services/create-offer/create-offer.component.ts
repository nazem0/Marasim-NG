import { Component, Input } from '@angular/core';
import { IService } from 'src/app/Models/IService';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent {
@Input() service :IService|null=null;
}
