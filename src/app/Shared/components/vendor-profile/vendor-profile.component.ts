import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IService } from 'src/app/Models/IService';
import { IUser } from 'src/app/Models/IUser';
import { IVendor } from 'src/app/Models/IVendor';
import { IVendorWithDetails } from 'src/app/Models/IVendorWithDetails';
import { UserService } from 'src/app/Services/User.service';
import { VendorService } from 'src/app/Services/Vendor.service';



@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit ,AfterViewInit {
  @ViewChild("filterContainer") filterContainer!: ElementRef;
  @ViewChild("caret") caret!: ElementRef;

  currentUserVendor: IUser | null = null;
  currentVendor: IVendor | null = null;
  currentServices: IService[] | null = null;
  vendorWithDetails: IVendorWithDetails | undefined;

  constructor(private vendor: VendorService, private user: UserService) { }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit() {
    this.vendor.getVendorWithUser(1, 3).subscribe(responseList => {
      this.currentVendor = responseList[0];
      this.currentUserVendor = responseList[1];
    });
    this.vendor.getServices(1).subscribe(result => {
      console.log(result);
      this.currentServices = result;
    })
  }
  scrollToTargetAdjusted(x: string) {
    var elementPosition = document.getElementById(x)!.getBoundingClientRect().top;
    var offsetPosition: number = (elementPosition) + (window.scrollY - 160);
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  REVIEWS: any[] = [
    {
      User: { Name: 'عبد السميع اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/05.jpg' },
      Date: new Date("2023-10-06").toLocaleDateString(),
      Rate: 4,
      Service: 'تصوير افراح',
      Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
    },
    {
      User: { Name: 'اللميع', PicURL: 'https://booking.webestica.com/assets/images/avatar/04.jpg' },
      Date: new Date("2023-10-07").toLocaleString(),
      Rate: 2,
      Service: 'تصوير ',
      Description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى. هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.'
    },
  ];


  //replace by array of post by service id
  posts = [];


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


}
