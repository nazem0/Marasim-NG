import { IFollowVendor, IFollowing } from 'src/app/Models/IFollow';
import { UserService } from '../../../Services/User.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FollowService } from 'src/app/Services/follow.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {
  Followings: IFollowVendor[] | null = null;

  constructor(private FollowService: FollowService, private CookieService: CookieService) { }

  deleted() {
    console.log("parent");
    // location.reload();
    this.FollowService.GetWhoUserFollows(this.CookieService.get("Id"))
      .subscribe((result) => {
        this.Followings = result;
      })
  }

  ngOnInit() {
    this.FollowService.GetWhoUserFollows(this.CookieService.get("Id"))
      .subscribe((result) => {
        this.Followings = result;
      })
  }
  

}






