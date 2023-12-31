import { Invitation } from 'src/app/Models/Invitation';
import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements AfterViewInit {
  @ViewChild("Invitation") Invitaion!:ElementRef;
  @Input() invitation! :Invitation;
  apiUrl=environment.serverUrl;
  constructor(private Scroller:ViewportScroller) { }
  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const Invitaion_Element=this.Invitaion.nativeElement;
    const invitation_content = [...Invitaion_Element!.innerText];
    this.Invitaion.nativeElement!.innerHTML = ""
    for (let i = 0; i < invitation_content.length; i++) {
        setTimeout(() => {
          Invitaion_Element!.innerHTML += `<span class="text-white">${invitation_content[i]}</span>`
        }, i * 200);
        setTimeout(() => {
          this.Scroller.scrollToAnchor("bride_groom_section")
          }, invitation_content.length * 270);
    
    }
  }

}
