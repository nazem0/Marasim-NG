import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';
import { IFollowUser } from 'src/app/Models/IFollow';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent {
  apiUrl=environment.serverUrl;

  @Input() Follower: IFollowUser | null = null;
  constructor() {

  }

}


