import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from 'src/app/services/scroll-reveal.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private ScrollReveal: ScrollRevealService) { }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('section',
      {
        scale: 0.85,
        distance: '-50px',
        duration: 1000
      })
  }
}
