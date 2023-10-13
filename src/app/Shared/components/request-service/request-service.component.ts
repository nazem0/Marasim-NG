import { Component, Input } from '@angular/core';
import { IService } from 'src/app/Models/IService';

@Component({
  selector: 'app-request-service',
  templateUrl: './request-service.component.html',
  styleUrls: ['./request-service.component.css']
})
export class RequestServiceComponent {
  @Input() service :IService|null=null;
}
