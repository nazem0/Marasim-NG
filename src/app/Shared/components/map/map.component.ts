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
    script.src="src/assets/js/mapsJavaScriptAPI.js"
    document.querySelector("head")?.append(script);
  }
  
}