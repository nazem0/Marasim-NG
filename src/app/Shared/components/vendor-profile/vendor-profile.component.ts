import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FullVendorInfo } from 'src/app/Models/FullVendorInfo';
import { ICategory } from 'src/app/Models/ICategory';
import { IPost } from 'src/app/Models/IPost';
import { IReview } from 'src/app/Models/IReview';
import { IService } from 'src/app/Models/IService';
import { IVendor } from 'src/app/Models/IVendor';
import { CategoryService } from 'src/app/Services/Category.service';
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
  vendor: IVendor | null = null;
  category: ICategory | null = null;
  services: IService[] | null = null;
  posts: IPost[] | null = null;
  reviews: IReview[] | null = null;



  constructor(
    private VendorService: VendorService,
    private ReviewService: ReviewService,
    private PostService: PostService,
    private ServiceService: ServiceService,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService) { }

  ngOnInit() {
    // get vendor Id from router
    this.vendorID = parseInt(this.ActivatedRoute.snapshot.paramMap.get("id")!);
    console.log(this.vendorID)



  }

  ngAfterViewInit(): void {
    this.VendorService.GetByVendorId(this.vendorID!)
      .subscribe((result) => {
        this.vendor = result;
      })

    this.CategoryService.GetById(this.vendor?.categoryId!)
      .subscribe((result) => {
        this.category = result;
      })

    this.PostService.GetByVendorID(this.vendorID!)
      .subscribe((result) => {
        this.posts = result;
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
