import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from 'src/app/Shared/services/scroll-reveal.service';

@Component({
  selector: 'app-bride-groom',
  templateUrl: './bride-groom.component.html',
  styleUrls: ['./bride-groom.component.css'],
})
export class BrideGroomComponent implements OnInit {
  constructor(private ScrollReveal: ScrollRevealService) { }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('div', { scale: 0.85, distance: '-50px', duration: 1500 });
  }
}
