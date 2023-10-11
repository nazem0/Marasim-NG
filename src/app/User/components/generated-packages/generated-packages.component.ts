import { Component } from '@angular/core';
import { ScrollRevealService } from 'src/app/Services/Scroll-Reveal.service';

@Component({
  selector: 'app-generated-packages',
  templateUrl: './generated-packages.component.html',
  styleUrls: ['./generated-packages.component.css']
})
export class GeneratedPackagesComponent {
  constructor(private ScrollReveal: ScrollRevealService) { }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.package_components',{ scale:0.85, distance: '-50px',duration: 1500 });
  }
}


