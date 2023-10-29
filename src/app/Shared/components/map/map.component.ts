import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  position: { lat: string | number; long: string | number } = {
    lat: 24.0923346,
    long: 32.9001062,
  };

  constructor() { }
  ngAfterViewInit(): void {
    let script = document.createElement('script');
    script.src = 'assets/js/mapsJavaScriptAPI.js';
    let mapInit = document.createElement('script');
    mapInit.innerHTML = `
    var map; 
    var marker;
    const latSpan = document.getElementById("lat");
    const lngSpan = document.getElementById("lng");

    async function initMap() {
      
      let pos = {
        lat: ${this.position.lat}, 
        lng: ${this.position.long}
      };
      
      const {Map, InfoWindow} = await google.maps.importLibrary("maps");
      const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");
    
      map = new Map(document.getElementById("map"), {
        zoom: 12,
        mapTypeId: 'hybrid', 
        center: pos,
        mapId:"Position",
        streetViewControl: false
      });

      // Get Current Location Button
      const locationButton = document.createElement("button");

      locationButton.innerHTML = "<i class='fa-solid fa-location-dot'></i>";
      locationButton.id="myLocation";
      locationButton.classList.add("custom-map-control-button","btn","btn-dark","rounded-circle","p-2");
      map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);

      marker = new AdvancedMarkerElement({
        map: map,
        position: pos,
        title: "Position",
        gmpDraggable: true 
      });
      map.addListener("center_changed", () => {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(() => {
          map.panTo(marker.position);
        }, 3000);
      });

      locationButton.addEventListener("click", () => {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              infoWindow.setPosition(pos);
              infoWindow.setContent("موقعك من خلال خطوط الطول ودوائر العرض: " + pos.lat + ", " + pos.lng);
              infoWindow.open(map);
              map.setCenter(pos);
              marker.position=pos;
              infoWindow.open(map, marker)
              latSpan.innerText=pos.lat;
              lngSpan.innerText=pos.lng;
            },
            () => {
              handleLocationError(true, infoWindow, map.getCenter());
            },
          );
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      });


      marker.addListener("click", () => {
        map.setZoom(17);
        map.setCenter(marker.position);
      });
    
      let infoWindow = new InfoWindow();
      marker.addListener("dragend", event => {
        let newPos = marker.position;
        infoWindow.close();
        infoWindow.setContent("موقعك من خلال خطوط الطول ودوائر العرض: " + newPos.lat + ", " + newPos.lng);
        latSpan.innerText=newPos.lat;
        lngSpan.innerText=newPos.lng;
        infoWindow.open(map, marker);
      });
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(
          browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation.",
        );
        infoWindow.open(map);
      }
    }`;
    mapInit.type = 'text/javascript';
    document.querySelector('head')?.append(script, mapInit);
  }
}
