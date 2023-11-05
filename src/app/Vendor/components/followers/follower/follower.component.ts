import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/User.service';
import { IVendor } from 'src/app/Models/IVendor';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-follower',
  templateUrl: './follower.component.html',
  styleUrls: ['./follower.component.css']
})
export class FollowerComponent implements OnInit {
  @Input() UserID: number | null = null;
  User:IUser|null=null;
  constructor(private UserService: UserService) {


  }
  ngOnInit() {
    this.UserService.getByID(this.User?.id).subscribe(
      (User)=>{
        this.User=User
      console.log(this.User);
      }
    );
  }
}


