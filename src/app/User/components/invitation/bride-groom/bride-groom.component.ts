import { Component, Input } from '@angular/core';
import { Invitation } from 'src/app/Models/Invitation';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-bride-groom',
  templateUrl: './bride-groom.component.html',
  styleUrls: ['./bride-groom.component.css'],
})
export class BrideGroomComponent {
@Input() invitation! : Invitation;
apiUrl=environment.serverUrl;
}
