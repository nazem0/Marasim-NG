import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class UserEditProfileComponent {
  @ViewChild("UploadPic") UploadPic: ElementRef | null = null;
  @Input() User:IUser| null = null;
  ngAfterViewInit(): void {
    };
  }
