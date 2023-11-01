import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-vendorside',
  templateUrl: './profile-vendorside.component.html',
  styleUrls: ['./profile-vendorside.component.css']
})
export class ProfileVendorsideComponent {
  Service = {
    ServiceID: 1,
    ServiceName: 'تصوير افراح',
    Price: 100.00,
    Rate: 4

  }

  slides: Array<{ title: string, description: string, image: string }> = [
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    },
    {
      title: 'test',
      description: 'test',
      image: '../assets/img/hall.webp'
    }
  ];




  //replace by array of post by service id
  posts = [];

  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY - 80);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
