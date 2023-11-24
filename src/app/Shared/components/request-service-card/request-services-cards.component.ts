import { Component, Input } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-request-services-cards',
  templateUrl: './request-services-cards.component.html',
  styleUrls: ['./request-services-cards.component.css']
})
export class RequestServicesCardsComponent {
@Input() vendor: {
  id:number,
  userId:string,
  services: IService[] | null;
} | null = null;
apiUrl= environment.serverUrl
}
