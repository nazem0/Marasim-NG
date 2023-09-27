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
    let inputRevelDuration=1500;
    sr.reveal('.rightSide', { origin: 'right', duration: 1200,distance: '500px' })
    sr.reveal('.leftSide', { origin: 'left', duration: 1200 ,distance: '500px'})

  }
}
