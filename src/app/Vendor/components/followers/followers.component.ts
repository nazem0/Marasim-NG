import { Component } from '@angular/core';
import { IFollowing } from 'src/app/Models/IFollowing';
import { UserService } from '../../../Services/User.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent {
  Followers: IFollowing[] = [];
  constructor(private UserService: UserService) {
    this.UserService.getFollowing(2).subscribe(
      (result) => {
        this.Followers = result
      console.log(result);
      }
      )
  }}
