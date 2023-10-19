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
    script.src="assets/js/mapsJavaScriptAPI.js"
    let test = document.createElement("script")
    test.innerHTML=`var map;async function initMap(){let a={lat:24.0923346,lng:32.9001062},{Map:t,InfoWindow:e}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:n}=await google.maps.importLibrary("marker");map=new t(document.getElementById("map"),{zoom:15,center:a,mapId:"Position"});let i=new n({map:map,position:a,title:"Position",gmpDraggable:!0}),p=new e;i.addListener("dragend",a=>{let t=i.position;p.close(),p.setContent("Pin dropped at: " + t.lat + ", " + t.lng),p.open(i.map,i)})}`;
    test.type="text/javascript"
    document.querySelector("head")?.append(script,test);
  }
  
}