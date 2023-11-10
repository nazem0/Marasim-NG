import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IFollowUser, IFollowVendor, IFollowing } from 'src/app/Models/IFollow';
import { FollowService } from 'src/app/Services/Follow.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  Followers: IFollowUser[] = [];
  constructor(private FollowService: FollowService, private CookieService: CookieService) { }


  ngOnInit() {
    this.FollowService.GetWhoFollowsVendors(parseInt(this.CookieService.get("VendorId")))
      .subscribe((result) => this.Followers = result)
  }
}
