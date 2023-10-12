import { IFollowing } from 'src/app/Models/IFollowing';
import { UserService } from '../../../Services/User.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent {

  followings: IFollowing[] = [];
  constructor(private UserService: UserService) {
    this.UserService.getFollowing(1).subscribe(
      (result) => {
        this.followings = result
      console.log(result);
      }
      )
  }



}






