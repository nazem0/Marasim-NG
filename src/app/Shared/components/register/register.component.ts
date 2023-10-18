import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,AfterViewInit {
  @ViewChild("UploadPic") UploadPic : ElementRef | null  = null;
  PicName :string ="";

  constructor(private ScrollReveal: ScrollRevealService) { }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.rightSide', { origin: 'right', duration: 1200, distance: '500px' })
    sr.reveal('.leftSide', { origin: 'left', duration: 1200, distance: '500px' })
  }
  ngAfterViewInit(): void {
    this.UploadPic?.nativeElement.addEventListener('change', (e:any) => {
      this.PicName=e.target?.files[0].name;
    });
  }
}
