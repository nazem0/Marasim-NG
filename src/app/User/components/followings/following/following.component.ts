import { UserService } from 'src/app/Services/User.service';
import { Component, Input, OnInit } from '@angular/core';
import { IVendor } from 'src/app/Models/IVendor';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {
  @Input() vendorID: number | null = null;
  vendor:IUser|null=null;
  constructor(private UserService: UserService) {


  }
  ngOnInit() {
    this.UserService.getByID(this.vendor!.id).subscribe(
      (vendor)=>{
        this.vendor=vendor
      console.log(this.vendor);
      }
    );
  }
  unfolow() {

  }
}
