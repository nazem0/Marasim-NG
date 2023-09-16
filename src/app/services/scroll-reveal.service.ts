// scroll-reveal.service.ts
import { Injectable } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Injectable({
  providedIn: 'root',
})
export class ScrollRevealService {
  private sr: typeof ScrollReveal;

  constructor() {
    this.sr = ScrollReveal();
    // Add your ScrollReveal configuration here
  }

  getScrollReveal(): typeof ScrollReveal {
    return this.sr;
  }
}
