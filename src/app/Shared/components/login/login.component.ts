import { Component, OnInit } from '@angular/core';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private ScrollReveal: ScrollRevealService ){

  }
ngOnInit(){
  const sr = this.ScrollReveal.getScrollReveal();
  sr.reveal('.rightSide', { origin: 'right', duration: 1200,distance: '500px' })
  sr.reveal('.leftSide', { origin: 'left', duration: 1200 ,distance: '500px'})
}
}