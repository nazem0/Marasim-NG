import { Component } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewUserProfileComponent {
  user:IUser ={   "id": 1,
  "name": "John Doe",
  "phone": "123-456-7890",
  "email": "john@example.com",
  "password": "password123",
  "photo": "https://example.com/john.jpg",
  "gender": "male",
  "role": "user",
  "nationalID": "123-45-6789",
  "location":"سان فرانسيسكو -شارع مارتنيز ويليم"
}}
