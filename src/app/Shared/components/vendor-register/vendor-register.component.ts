import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealService } from 'src/app/Services/Scroll-reveal.service';
import { RegisterService } from 'src/app/Services/Register.service';
import { OpenCageDataResponse } from 'src/app/Models/OpenCageDataResponse';
@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css'],
})
export class VendorRegisterationComponent implements OnInit, AfterViewInit {
  @ViewChild('Latitude') Latitude : ElementRef | null =null;
  @ViewChild('Longitude') Longitude : ElementRef | null =null;

  @ViewChild('UploadPic') UploadPic: ElementRef | null = null;
  PicName: string = '';
  position: { lat: string | number; long: string | number } = {
    lat: 24.0923346,
    long: 32.9001062,
  };
  registerForm: FormGroup;
  data: FormData;
  PasswordRegEx = (/^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/);
  PhoneNumberRegEx = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/);
  address : string ="";
  constructor(
    private ScrollReveal: ScrollRevealService,
    private builder: FormBuilder,
    private RegisterService: RegisterService,
    private HttpClient: HttpClient
  ) {
    this.data = new FormData();
    this.registerForm = this.builder.group({
      Name: [null, [Validators.required, Validators.minLength(2)]],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, [Validators.required,Validators.pattern(this.PasswordRegEx)]],
      ConfirmPassword: [null, [Validators.required]],
      PhoneNumber: [null, [Validators.required, Validators.minLength(11),Validators.pattern(this.PhoneNumberRegEx)]],
      NationalID: [null, [Validators.required, Validators.minLength(11)]],
      Gender: [null, [Validators.required]],
      Picture: [null, [Validators.required]],
      Latitude: [null],
      Longitude: [null],
      Address: [null],
      Summary : [null, [Validators.required,Validators.minLength(20), Validators.maxLength(1000) ]]
    });
  }
  ngOnInit() {
    const sr = this.ScrollReveal.getScrollReveal();
    sr.reveal('.rightSide', {
      origin: 'right',
      duration: 1200,
      distance: '500px',
    });
    sr.reveal('.leftSide', {
      origin: 'left',
      duration: 1200,
      distance: '500px',
    });
  }

  ngAfterViewInit(): void {
    this.UploadPic?.nativeElement.addEventListener('change', (e: any) => {
      this.PicName = e.target?.files[0].name;
    });
    // Map

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
      locationButton.type="button";
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
              latSpan.value=pos.lat;
              lngSpan.value=pos.lng;
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
        latSpan.value=newPos.lat;
        lngSpan.value=newPos.lng;
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

  async register() {
    let address="";
    this.registerForm.get("Latitude")?.patchValue(this.Latitude?.nativeElement.value)
    this.registerForm.get("Longitude")?.patchValue(this.Longitude?.nativeElement.value)
    this.decodeLatLng(this.Latitude?.nativeElement.value, this.Longitude?.nativeElement.value ).subscribe((response)=>{
      let formattedResponse = response as OpenCageDataResponse
      let formattedAddress = formattedResponse.results[0].formatted
      if(formattedAddress.includes("unnamed road")){
        address=formattedAddress.replace("unnamed road",formattedResponse.results[0].components.state);
        this.registerForm.get("Address")?.patchValue(address);
      }
      else
      {
        address = formattedAddress;
        this.registerForm.get("Address")?.patchValue(address)
      }
    if(this.registerForm.valid)
    {
      
      this.data.append('Address',this.registerForm.get('Address')?.value);
      this.data.append('Name', this.registerForm.get('Name')?.value);
      this.data.append('Email', this.registerForm.get('Email')?.value);
      this.data.append('Password', this.registerForm.get('Password')?.value);
      this.data.append(
        'ConfirmPassword',
        this.registerForm.get('ConfirmPassword')?.value
      );
      this.data.append(
        'PhoneNumber',
        this.registerForm.get('PhoneNumber')?.value
      );
      this.data.append('NationalID', this.registerForm.get('NationalID')?.value);
      this.data.append('Gender', this.registerForm.get('Gender')?.value);
      this.data.append('Picture', this.UploadPic?.nativeElement.files[0]);
      this.data.append('Latitude',this.registerForm.get('Latitude')?.value);
      this.data.append('Longitude',this.registerForm.get('Longitude')?.value);
      this.data.append('Summary',this.registerForm.get('Summary')?.value);
      this.RegisterService.registerVendor(this.data).subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error)
      })
    }
    });
  }

  
  



  decodeLatLng(lat: number, lng: number) {
    const apiKey = '7d34f18319b241f08196de233370d818';
    return this.HttpClient.get(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}&language=native`
    );
  }
}
