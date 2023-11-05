import { Component} from '@angular/core';

@Component({
  selector: 'app-vendor-following-vendor',
  templateUrl: './vendor-following-vendor.component.html',
  styleUrls: ['./vendor-following-vendor.component.css']
})
export class VendorFollowingVendorComponent{

  followers = [
    {
      followerName: "علي احمد علي",
      followerStatus: false,
    },
    {
      followerName: "مصطفى ابراهيم محمد",
      followerStatus: false,
    },
    {
      followerName: "محمد ناظم محروس",
      followerStatus: true,
    },
    {
      followerName: "صهيب احمد محمد",
      followerStatus: false,
    },
    {
      followerName: "محمود شلالى",
      followerStatus: true,
    },
    {
      followerName: "محمود نادى",
      followerStatus: false,
    },
    {
      followerName: "سامر سمير",
      followerStatus: false,
    },
    {
      followerName: "احمد ابراهيم",
      followerStatus: true,
    },
  ];

}
