import { Component } from '@angular/core';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component {

  go(){
    document.getElementById('sec2')?.scrollIntoView();

  }
 home(){
    document.getElementById('hero')?.scrollIntoView();

  }
  contact(){
    document.getElementById('contact')?.scrollIntoView();
  }
}
