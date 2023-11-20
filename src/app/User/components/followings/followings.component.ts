import { IFollowVendor } from 'src/app/Models/IFollow';
import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/Services/Follow.service';
import { CookieService } from 'ngx-cookie-service';
import { PaginationViewModel } from 'src/app/Models/PaginationViewModel';
@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {
  Followings: PaginationViewModel<IFollowVendor> | null = null;

  constructor(private FollowService: FollowService, private CookieService: CookieService) { }

  refresh() {
    this.FollowService.GetWhoUserFollows()
      .subscribe((result) => {
        this.Followings = result;
      })
  }

  ngOnInit() {
    this.FollowService.GetWhoUserFollows()
      .subscribe((result) => {
        this.Followings = result;
      })
  }
  

}






