import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Invitation } from 'src/app/Models/Invitation';
import { InvitationService } from 'src/app/Services/invitation.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css'],
})
export class InvitationsComponent implements OnInit {
  apiUrl = environment.serverUrl;
  invitations: Invitation[] | null = null;

  constructor(
    private InvitationService: InvitationService,
    private Toastr: ToastrService) { }
  ngOnInit() { 
    this.getData();
  }

  getData() {
    this.InvitationService.getInvitaions().subscribe({
      next: (result) => {
        this.invitations = result;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  delete(Id: number){
    this.InvitationService.delete(Id).subscribe({
      next: (result) => {
        this.Toastr.success("تم الحذف بنجاح");
        this.getData();
      },
      error: (error) => {
        this.Toastr.error('حدث خطأ');
        console.log(error);
      }
    })

  }
}
