import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IFollowVendor } from 'src/app/Models/IFollow';
import { environment } from 'src/environments/environment.development';
import { FollowService } from 'src/app/Services/Follow.service';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/Services/User.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  apiUrl = environment.serverUrl;
  @Output() refresh = new EventEmitter();
  @Input() Following: IFollowVendor | null = null;
  constructor(
    public UserService: UserService,
    private FollowService: FollowService,
    private CookieService: CookieService) { }

  ngOnInit() {
    this.FollowService.GetWhoUserFollows()
    console.log("Child")
  }

  Unfollow() {
    this.FollowService.Delete(this.Following?.vendorId!).subscribe({
      next: (data) => this.refresh.emit()
    });
  }
}
