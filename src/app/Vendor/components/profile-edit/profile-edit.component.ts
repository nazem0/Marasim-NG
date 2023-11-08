import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent {
User={
  name:"صهيب احمد محمد",
  email:"sohayb@so.com",
  phone:'01159100078',
  password:'sohayb123'
};

cats=[
  {name:"مصور"},
  {name:"طباخ"},
  {name:"منسق حفلات"},
  {name:"قاعة"},
]

}
