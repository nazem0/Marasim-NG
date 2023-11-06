import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullVendorInfo } from 'src/app/Models/FullVendorInfo';
import { IService } from 'src/app/Models/IService';
import { IUser } from 'src/app/Models/IUser';
import { IVendor } from 'src/app/Models/IVendor';
import { IVendorWithDetails } from 'src/app/Models/IVendorWithDetails';
import { PostService } from 'src/app/Services/Post.service';
import { ReviewService } from 'src/app/Services/Review.service';
import { UserService } from 'src/app/Services/User.service';
import { VendorService } from 'src/app/Services/Vendor.service';
import { ServiceService } from 'src/app/Services/service.service';
import { environment } from 'src/environments/environment.development';



@Component({
  selector: 'app-vendor-profile',
  templateUrl: './vendor-profile.component.html',
  styleUrls: ['./vendor-profile.component.css']
})
export class VendorProfileComponent implements OnInit {
  vendorID: number | null = null;
  Vendor: FullVendorInfo | null = null;
  currentServices: IService[] | null = null;
  apiUrl=environment.serverUrl;

  constructor(
    private VendorService: VendorService,
    private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // get vendor Id from router
    this.vendorID = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!);

    this.VendorService.GetByVendorId(this.vendorID)
      .subscribe((result) =>{
        this.Vendor = result
        console.log(result)
      } )
        

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
