import { ActivatedRoute } from '@angular/router';
import { InvitationService } from 'src/app/Services/invitation.service';
import { Component, OnInit } from '@angular/core';
import { Invitation } from 'src/app/Models/Invitation';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit {
  constructor(
    private ScrollReveal: ScrollRevealService,
    private InvitationService: InvitationService,
    private ActivatedRoute: ActivatedRoute,
  ) { }
  invitation: Invitation | null = null;
  invitationId: number | null = null;
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('#bride_groom_section *', { scale: 0.85, distance: '-50px', duration: 1500 });
    this.getData();
  }
  getData() {
    this.invitationId = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!)
    this.InvitationService.get(this.invitationId).subscribe({
      next: (response) => {
        this.invitation = response
        console.log(response)
      }
    })

  }
}
