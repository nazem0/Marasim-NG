
import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { IUser } from 'src/app/Models/IUser';
@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {
  @ViewChild("UploadPic") UploadPic: ElementRef | null = null;
  @Input() User:IUser| null = null;
  ngAfterViewInit(): void {
    };
}
