import { AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit{
  constructor()
  {}
  ngAfterViewInit(): void {
    let script=document.createElement("script")
    script.src="https://cdn.jsdelivr.net/gh/nazem0/marasim-json-backend@main/marasim.js"
    document.querySelector("head")?.append(script);
  }
  
}