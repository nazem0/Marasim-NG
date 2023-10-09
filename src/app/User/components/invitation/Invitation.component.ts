import {  Component, OnInit } from '@angular/core';
import { ScrollRevealService } from 'src/app/Shared/services/scroll-reveal.service';
@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.css']
})
export class InvitationComponent implements OnInit{
  constructor(private ScrollReveal: ScrollRevealService) { }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('div', { scale: 0.85, distance: '-50px', duration: 1500 });
  }

}
