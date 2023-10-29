import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class UserEditProfileComponent {
  @ViewChild("UploadPic") UploadPic: ElementRef | null = null;

  ngAfterViewInit(): void {
    };
  }
